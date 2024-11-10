import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  // Example blog posts data (remove backend fetch logic)
  const posts = [
    {
      _id: "1",
      title: "Sustainable Living Tips",
      excerpt: "Learn how to live a more eco-friendly life with these simple tips.",
      image: "blog1.jpg",
    },
    {
      _id: "2",
      title: "Green Technologies Revolutionizing the World",
      excerpt: "Discover the green technologies that are shaping our future.",
      image: "blog2.jpg",
    },
    {
      _id: "3",
      title: "The Importance of Renewable Energy",
      excerpt: "Why renewable energy is the future and how it impacts the planet.",
      image: "blog3.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
        <p className="text-lg text-gray-600">Stay updated with the latest articles on sustainability!</p>
      </div>

      {/* Blog Post List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link to={`#`} className="text-green-600 mt-4 inline-block hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))
        )}
      </div>   
    </div>
  );
}
