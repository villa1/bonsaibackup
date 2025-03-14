
import React from 'react';
import { Link } from 'react-router-dom';
import { User, CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../utils/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  if (!post) return null;
  
  return (
    <div className="mt-12">
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
          <span className="bg-bonsai-olive text-white text-xs uppercase font-bold px-3 py-1 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">{post.title}</h2>
          <p className="text-white/90 mt-2 max-w-2xl">{post.excerpt}</p>
          
          <div className="flex items-center mt-4 text-white/80">
            <span className="flex items-center">
              <User size={14} className="mr-1" />
              {post.author}
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <CalendarDays size={14} className="mr-1" />
              {post.date}
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center bg-white text-bonsai-dark-green px-4 py-2 rounded-md font-medium hover:bg-bonsai-olive hover:text-white transition-colors">
            Read Full Article
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
