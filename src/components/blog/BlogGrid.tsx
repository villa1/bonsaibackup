
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../utils/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <span className="bg-bonsai-beige text-bonsai-dark-green text-xs uppercase font-bold px-2 py-1 rounded-full mb-2 inline-block">
                {post.category}
              </span>
              <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">{post.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center mt-4 text-gray-500 text-sm">
                <span className="flex items-center">
                  <User size={12} className="mr-1" />
                  {post.author}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              <Link 
                to={`/blog/${post.slug}`} 
                className="mt-4 inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium"
              >
                Read More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center py-16">
          <p className="text-gray-500">No articles found. Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
