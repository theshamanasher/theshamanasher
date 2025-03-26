import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../sanityclient';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Author {
  name: string;
}

interface MainImage {
  asset: {
    _id: string;
    url: string; 
  };
}

interface TextChild {
  text: string;
  marks?: string[]; 
}

interface BodyBlock {
  _key: string;
  _type: string;
  style?: string;
  children: TextChild[];
  markDefs?: any[]; 
}

interface Post {
  title: string;
  _updatedAt: string;
  author: Author;
  body: BodyBlock[];
  mainImage: MainImage;
}

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          _updatedAt,
          author->{name},
          body[]{
            ...,
            markDefs[],
            children[]{
              ...,
              marks
            }
          },
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        const result = await client.fetch(query, { slug });
        setPost(result);
      } catch (error) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const renderBodyContent = (body: BodyBlock[]) => {
    return body.map((block) => {
      const text = block.children.map((child) => child.text).join(' ');
      
      // Handle different block styles
      switch (block.style) {
        case 'h2':
          return (
            <h2 key={block._key} className="text-2xl text-[#aabcbf] font-semibold mt-8 mb-4">
              {text}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={block._key} className="text-xl text-[#aabcbf] font-medium mt-6 mb-3">
              {text}
            </h3>
          );
        default:
          return (
            <p key={block._key} className="text-base text-[#aabcbf] my-4 leading-relaxed">
              {text}
            </p>
          );
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error || !post) return <div>{error || 'Post not found'}</div>;

  return (
    <div>
      <div className="flex w-full bg-[#344245] justify-center py-16 sm:py-24 border-b-2">
        <div className="flex flex-col items-center w-full max-w-4xl px-4">
          {post.mainImage && (
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              className="object-cover w-full rounded-lg shadow-xl aspect-[16/9]"
            />
          )}
          <h1 className="text-[#aabcbf] text-4xl md:text-6xl font-light mt-16 text-center">
            {post.title}
          </h1>
          <div className="flex flex-col items-center mt-8 space-y-2">
            <span className="text-xl text-[#aabcbf] font-light">
              By: {post.author.name}
            </span>
            <span className="text-md text-[#aabcbf] font-light">
              {new Date(post._updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#344245]">
        <article className="w-full max-w-2xl px-4 py-16 prose">
          {renderBodyContent(post.body)}
        </article>
      </div>
    </div>
  );
}

export default PostPage;