import React from 'react';


interface BlogCardProps {
    title: string;
    desc?: string;
    articleURL: string;
    imgURL: string;
}


// Define the BlogCard component with props parameter
const BlogCard: React.FC<BlogCardProps> = ({ articleURL, imgURL,  title, desc }) => {
  return (
    <div className="w-full sm:max-w-[350px] bg-[#262236] border border-gray-200 rounded-lg shadow">
        <a href={articleURL} target="_blank">
            <img className="rounded-t-lg" src={imgURL} alt="" />
        </a>
        <div className="p-5">
            <a href={articleURL} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-main-text">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700  mt-8">{desc}</p>
            <a href={articleURL} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main-text bg-blue-700 rounded-lg mt-16">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  );
};

export default BlogCard;
