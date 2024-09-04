import React from 'react';


interface BlogCardProps {
    author: string;
    id: string;
    title: string;
    desc?: string;
    articleURL: string;
    imgURL: string;
    updatedAt: string;
}

// truncates text to a specific number of characters
function truncateText(text: string, limit: number): string {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }
  

// Defines the BlogCard component with props 
const BlogCard: React.FC<BlogCardProps> = ({ author, id, articleURL, imgURL,  title, desc, updatedAt}) => {
  const truncatedDesc = desc ? truncateText(desc, 150) : '';

    
  return (
    <div className="flex flex-col w-full sm:max-w-[550px] bg-[#344245] border  shadow border-none" id={id}>
        <a href={articleURL}  className="blog-image">
            <img className="object-cover aspect-[16/9]" src={imgURL} alt={title} />
        </a>
        <div className="flex flex-col p-5 h-full">
            <a href={articleURL} >
                <h5 className="sm:mb-2 text-xl sm:text-2xl font-bold tracking-tight text-main-text">{title}</h5>
            </a>
            <p className="font-normal text-main-text sm:mt-8 sm:mb-3 leading-relaxed">{truncatedDesc}</p>
            <div className="flex-flex-col justify-start mt-auto">
            <a href={articleURL} className="group inline-flex items-center text-sm font-medium text-center text-main-text bg-[#344245] rounded-lg sm:mt-16" >
                Read more
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:scale-125 transition-transform duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                </a>

                <div className="flex items-center">
                    <a href='/about/' className="font-normal text-sm text-main-text sm:mb-3 mt-8 mr-8 hover:underline">{author}</a>
                    <p className="sm:mb-3 font-normal text-sm text-main-text  mt-8">{updatedAt}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogCard;
