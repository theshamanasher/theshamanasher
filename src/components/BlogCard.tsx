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
// const BlogCard: React.FC<BlogCardProps> = ({ author, id, articleURL, imgURL,  title, desc, updatedAt}) => {
  const BlogCard: React.FC<BlogCardProps> = ({ author, id, articleURL, imgURL,  title, desc}) => {
  const truncatedDesc = desc ? truncateText(desc, 150) : '';

    
  return (
    <div className="group flex flex-col w-full sm:max-w-[350px] bg-[#344245] border  shadow border-none rounded-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]" id={id}>
        <a href={articleURL}  className="blog-image ">
            <img className="object-cover aspect-[16/9]  rounded-t-md transition-transform duration-300" src={imgURL} alt={title} />
        </a>
        <div className="flex flex-col p-16 h-full rounded-b-md">
            <a href={articleURL} >
                <h5 className="sm:mb-2 text-xl sm:text-2xl font-bold tracking-tight text-main-text">{title}</h5>
            </a>
            <p className="font-normal text-main-text sm:mt-8 sm:mb-3 leading-relaxed text-xs">{truncatedDesc}</p>
            <div className="flex-flex-col justify-start mt-auto">
            <a 
            href={articleURL} 
            className="inline-flex items-center gap-8 text-xs font-semi text-main-text hover:text-white transition-colors w-fit"
          >
            Read article
            <svg
              className="w-16 h-16 transition-transform duration-200 group-hover:translate-x-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

                <div className="flex items-center">
                    <a href='/about/' className="font-normal text-sm text-main-text sm:mb-3 mt-8 mr-8 hover:underline">{author}</a>
                    {/* <p className="sm:mb-3 font-normal text-sm text-main-text  mt-8">{updatedAt}</p> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogCard;
