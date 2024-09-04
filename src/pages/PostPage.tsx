// Import necessary packages
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../sanityclient';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define TypeScript interfaces for the post structure
interface Author {
  name: string;
}

interface MainImage {
    asset: {
        _id: string;
        URL: string;
    };
}

interface TextChild {
    text: string;
}
  
interface BodyBlock {
    _key: string;
    _type: string;
    children: TextChild[];
}

interface Post {
    title: string;
    _updatedAt: string;
    author: Author;
    body: BodyBlock[]; // Updated to an array of blocks
    mainImage: MainImage;
}

// URL builder utility
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Component to render an individual blog post
function PostPage() {
  // Retrieve slug from URL parameters
  const { slug } = useParams<{ slug: string }>();

  // Initialize state
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch post data by slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          _updatedAt,
          author->{name},
          body,
          mainImage{asset->{_id, URL}}
        }`;
        const result = await client.fetch(query, { slug });
        setPost(result);
        console.log(result);
      } catch (error) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

   
    fetchPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error || !post) return <div>{error || 'Post not found'}</div>;

  const firstBlockText = post.body.length > 0 ? post.body[0].children.map((child) => child.text).join(' ') : '';


  return (
    <div>
        <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
            <div className="flex flex-col items-center w-full max-w-[768px]">
            <img src={urlFor(post.mainImage).url()} alt={post.title}  className="object-cover aspect-[16/9]" />
            <h1 className=" text-[#aabcbf] text-4xl md:text-6xl font-light mt-16">{post.title}</h1>
            <span className="text-xl  text-[#aabcbf] font-light mt-8">By:  {post.author.name}</span>
            <span className="text-md  text-[#aabcbf] font-light mt-8"> {new Date(post._updatedAt).toLocaleDateString()}</span>
            <span className="text-base  text-[#aabcbf] mt-32 text-center leading-relaxed font-light"> {firstBlockText}</span>
            </div>
        </div>
   
      
    </div>
  );
}

export default PostPage;
