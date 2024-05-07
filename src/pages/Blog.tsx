import { useEffect, useState } from 'react';
import client from '../sanityclient'
import imageUrlBuilder from '@sanity/image-url'
import BlogCard from '../components/BlogCard';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


// Define an interface representing the shape of the data
interface Post {
  title: string;
  slug: {
    current: string;
  }
  _updatedAt: string;
  author: {
    name: string;
  }
  body: {
    children: {
      text: string;
    };
  }
  mainImage: {
    asset: {
      _id: string;
      URL: string;
    };
  };
}

const BASE_URL = "/blog/";


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)


// parameters:
function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

// Helper function to format the date to dd/mm/yyyy
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
        const response = await fetch('https://bkxt2s2x.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D%7B%0A++++++++title%2C%0A++++++++slug%2C%0A++++++++_updatedAt%2C%0A++++++++body%5B0%5D%7B%0A++++++++++children%5B0%5D%7B%0A++++++++++++text%2C%0A++++++++++%7D%2C%0A++++++++%0A++++++++%7D%2C%0A++++++++author-%3E+%7B%0A++++++++++name%0A++++++++%7D%2C%0A++++++++mainImage%7B%0A++++++++++asset-%3E%7B%0A++++++++++++_id%2C%0A++++++++++++URL%2C%0A++++++++%7D%0A++++++%7D%0A++++%7D');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.result || []);
      } catch (error) {
        setError('error');
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
            desc={post.body.children.text}
            articleURL={`${BASE_URL}${post.slug.current}`} // Construct the final article URL correctly
            imgURL={urlFor(post.mainImage).url()}
            author={post.author.name}
            updatedAt={formatDate(post._updatedAt)} // Format the date
        />
      ))}



    </div>
  )
}

export default Blog
