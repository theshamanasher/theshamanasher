import { useEffect, useState } from 'react';
import client from '../sanityclient';
import imageUrlBuilder from '@sanity/image-url';
import BlogCard from '../components/BlogCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define an interface representing the shape of the data
interface Post {
  title: string;
  slug: {
    current: string;
  } | null;
  _updatedAt: string;
  author: {
    name: string;
  };
  body: {
    children: {
      text: string;
    }[];
  }[];
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  categories: {
    title: string;
  }[];
}

const BASE_URL = "/blog/";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Function to build image URL
function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}

// Function to format the date to dd/mm/yyyy
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post" && !(_id in path("drafts.**")) && !("BIO" in categories[]->title) && !("Testimonial" in categories[]->title)]{
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
        setPosts(response || []);
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
    <div className="flex flex-wrap justify-center mt-10 gap-32"> 
      {posts.map((post, index) => (
        <BlogCard 
          key={index.toString()} // Convert the index to a string
          id={index.toString()}  // Convert index to a string
          title={post.title}
          desc={post.body[0]?.children[0]?.text || 'No description available'}
          articleURL={`${BASE_URL}${post.slug?.current || 'no-slug'}`} // Add fallback for slug
          imgURL={urlFor(post.mainImage.asset)}
          author={post.author.name}
          updatedAt={formatDate(post._updatedAt)} // Format the date
        />
      ))}
    </div>
  );
}

export default Blog;