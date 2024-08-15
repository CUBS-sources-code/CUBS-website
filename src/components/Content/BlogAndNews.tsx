import React from 'react';

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
    image: "/path/to/network-image.jpg"
  },
  {
    id: 2,
    title: "Lorem Ipsum Mockup DATA 2 !!!!!!!!!!!!!!!!!",
    date: "October 28, 2024",
    image: "/path/to/crypto-coins.jpg"
  },
  {
    id: 3,
    title: "What You Need to Know About the Call Center Industry",
    date: "October 28, 2024",
    image: "/path/to/call-center.jpg"
  },
  {
    id: 4,
    title: "Small Business Hiring Tips and Trends to Be Aware Of",
    date: "October 28, 2024",
    image: "/path/to/bitcoin-chart.jpg"
  },
  {
    id: 5,
    title: "Mock Up Data Test",
    date: "December 31, 2024",
    image: "/path/to/test.jpg"
  },
  {
    id: 6,
    title: "Mock Up Data Test",
    date: "December 31, 2024",
    image: "/path/to/test.jpg"
  },
  {
    id: 7,
    title: "Mock Up Data Test",
    date: "December 31, 2024",
    image: "/path/to/test.jpg"
  },
  {
    id: 8,
    title: "Mock Up Data Test",
    date: "December 31, 2024",
    image: "/path/to/test.jpg"
  },
  {
    id: 9,
    title: "Mock Up Data Test",
    date: "December 31, 2024",
    image: "/path/to/test.jpg"
  },
];

const BlogAndNews: React.FC = () => {
  return (
    <div className="bg-[#0F082C] w-full py-8 pb-20">
      <div className="w-3/4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-purple-800 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-purple-300 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAndNews;