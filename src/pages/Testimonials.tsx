import { useEffect, useState } from 'react';
import client from '../sanityclient';
import demoImg1 from '../assets/img/demo/demo-1.jpg'
import demoImg2 from '../assets/img/demo/demo-2.jpg'
import demoImg3 from '../assets/img/demo/demo-3.jpg'
import demoImg4 from '../assets/img/demo/demo-4.jpg'
import demoImg5 from '../assets/img/demo/demo-5.jpg'


interface Testimonial {
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
  } | null;
  categories: {
    title: string;
  }[];
}


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post" && !(_id in path("drafts.**")) && ("Testimonial" in categories[]->title)]{
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
        setTestimonials(response || []);
        console.log('Fetched Testimonials:', response); // Log the response to check the data
        setTestimonials(response || []);
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

  const demoImages = [demoImg1, demoImg2, demoImg3, demoImg4, demoImg5];


  return (
    <div className="flex flex-col">
    {/* header */}
    <div className="flex w-full bg-white justify-center p-32 sm:py-64 md:py-[120px] border-b-2">
      <div className="flex flex-col items-center w-full max-w-[550px]">
        <h1 className="mt-8 text-[#495153] text-4xl md:text-6xl font-light">Testimonials</h1>
        <span className="text-xl  text-[#495153] font-light mt-16 sm:mt-32">What is Everyone Saying?</span>
      </div>
    </div>
    {/* grid */}
    <ul className="grid w-full">

      {testimonials.map((testimonial, index) => (
        <li 
          className={`flex flex-col sm:flex-row items-start ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}   
          key={index.toString()} 
          id={index.toString()} >
         <img 
            src={
              testimonial.mainImage?.asset?.url 
                ? testimonial.mainImage.asset.url 
                : demoImages[index % demoImages.length]
            } 
            alt={testimonial.mainImage ? testimonial.title : "Demo image"} 
            className="w-full sm:w-1/2" 
          />
          <div className="container flex w-full sm:w-1/2 justify-center items-start h-full bg-white">
            <div className="flex flex-col items-center flex-s p-16 sm:p-32 dm:p-64 h-full justify-center">
              <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light"> {testimonial.body[0]?.children[0]?.text || 'No description available'}
              </span>
              <span className="text-base  text-[#495153] mt-32 text-center leading-relaxed font-light">
              - {testimonial.author?.name || 'Anonymous'}
              </span>
            </div>
          </div>
        </li>
      ))}

    </ul>
  </div>
  )
}


export default Testimonials