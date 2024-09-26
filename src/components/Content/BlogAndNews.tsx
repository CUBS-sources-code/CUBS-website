import React from 'react';

import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "What Is 'Shift Shock' and How Can You Prevent It?",
    date: "October 30, 2024",
    image: "/img/News/001.png"
  },
  {
    id: 2,
    title: "What You Need to Know About the Call Center Industry",
    date: "October 28, 2024",
    image: "/img/News/002.png"
  },
  {
    id: 3,
    title: "Small Business Hiring Tips and Trends to Be Aware Of",
    date: "October 28, 2024",
    image: "/img/News/003.png"
  },
  {
    id: 4,
    title: "Small Business Hiring Tips and Trends to Be Aware Of",
    date: "October 28, 2024",
    image: "/img/News/004.png"
  },
  {
    id: 5,
    title: "What You Need to Know About the Call Center Industry",
    date: "December 31, 2024",
    image: "/img/News/005.png"
  },
  {
    id: 6,
    title: "What Is 'Shift Shock' and How Can You Prevent It?",
    date: "December 31, 2024",
    image: "/img/News/006.png"
  },
  {
    id: 7,
    title: "Small Business Hiring Tips and Trends to Be Aware Of",
    date: "December 31, 2024",
    image: "/img/News/007.png"
  },
  {
    id: 8,
    title: "What Is 'Shift Shock' and How Can You Prevent It?",
    date: "December 31, 2024",
    image: "/img/News/008.png"
  },
  {
    id: 9,
    title: "What You Need to Know About the Call Center Industry",
    date: "December 31, 2024",
    image: "/img/News/009.png"
  },
];

const BlogAndNews: React.FC = () => {
  return (
    <Link href={'/news/id'}>  
      <div className="bg-[#0F082C] w-full py-8 pb-20">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-purple-800 bg-opacity-0 overflow-hidden hover:scale-110 duration-300 ease-in-out">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-purple-600 font-bold text-xl">{post.date}</p>
                  <h3 className="text-lg text-white font-semibold mt-2">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogAndNews;