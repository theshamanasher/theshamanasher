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


// Define the BlogCard component with props parameter
const BlogCard: React.FC<BlogCardProps> = ({ author, id, articleURL, imgURL,  title, desc, updatedAt}) => {
  return (
    <div className="flex flex-col w-full sm:max-w-[650px] bg-[#344245] border  shadow border-none" id={id}>
        <a href={articleURL} target="_blank" className="blog-image">
            <img className=" object-cover aspect-[16/9]" src={imgURL} alt={title} />
        </a>
        <div className="flex flex-col p-5 h-full">
            <a href={articleURL} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-main-text">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-main-text mt-8 leading-relaxed">{desc}</p>


            <div className="flex-flex-col justify-start mt-auto">
                <a href={articleURL} target="_blank" className="inline-flex items-center text-sm font-medium text-center text-main-text bg-[#344245] rounded-lg mt-16">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <div className="flex items-center">
                    <p className="mb-3 font-normal text-sm text-main-text  mt-8 mr-8">{author}</p>
                    <p className="mb-3 font-normal text-sm text-main-text  mt-8">{updatedAt}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogCard;
