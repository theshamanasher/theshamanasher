import { useEffect, useState } from 'react';
import client from '../sanityclient'
import imageUrlBuilder from '@sanity/image-url'
import BlogCard from './BlogCard';


// Define an interface representing the shape of the data
interface Post {
  title: string;
  slug: string;
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

  // Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)


// parameters:
function urlFor(source) {
    return builder.image(source)
}


function BlogGrid() {
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
        console.log('lol data', data.result || [])
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="flex flex-wrap justify-center mt-10 gap-32"> 
    {posts.map((post, index) => (
        <BlogCard 
            key={index.toString()} // Convert the index to a string
            id={index.toString()}  // Convert index to a string
            title={post.title}
            desc={post.body.children.text}
            articleURL={` / /${post.slug}`} // Prepend base URL here
            imgURL={urlFor(post.mainImage).url()}
            author={post.author.name}
            updatedAt={post.body._updatedAt}
        />
      ))}



    </div>
  )
}

export default BlogGrid
