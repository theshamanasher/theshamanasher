import { useEffect, useState } from 'react';
import client from '../sanityclient';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Hero from "../components/Hero";
import Title from "../components/Title";

interface Biography {
  title: string;
  slug: {
    current: string;
  } | null;
  _updatedAt?: string | null;
  author: {
    name: string;
  } | null;
  body?: {
    children?: {
      text: string;
    }[];
  }[];
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  categories: {
    title: string;
  }[];
}

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Function to build image URL
function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}

const About = () => {
  const [bio, setBio] = useState<Biography[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post" && !(_id in path("drafts.**")) && "BIO" in categories[]->title]{
          title,
          slug,
          _updatedAt,
          body[]{
            children[]{
              text
            }
          },
          author-> {
            name
          },
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[]->{
            title
          }
        }`;
        const response = await client.fetch(query);
        setBio(response || []);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className='w-full flex justify-center items-center'>Loading...</div>;
  if (error) return <div className='w-full flex justify-center items-center'>Error: {error}</div>;

  return (
    <div className='flex flex-col w-full'>
        {bio.map((post, index) => (
          <div key={index} className="mt-16 flex flex-col items-center">

            {post.mainImage && post.mainImage.asset && (
              <Hero bannerImage={urlFor(post.mainImage.asset)} />
            )}

            <div className="w-full max-w-[1080px] mt-64 flex flex-col items-center">
              <div className='sm:mt-64 flex w-full'>
                <Title title={post.title} />
              </div>
              
              {post.mainImage && post.mainImage.asset && (
                <img
                  src={urlFor(post.mainImage.asset)}
                  alt={post.title}
                  className="w-full h-auto mt-16 sm:mt-64 rounded-full max-w-256"
                />
              )}
              <div className="mt-16 sm:mt-64 text-center font-light">
                {post.body?.map((block, blockIndex) => (
                  <p key={blockIndex} className="mt-16">
                    {block.children?.map((child, childIndex) => (
                      <span className="text-light font-light" key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
              <p className="mt-16 text-center font-bold">- {post.author?.name}</p>
            </div>

          </div>
        ))}
      </div>
  );
};

export default About;