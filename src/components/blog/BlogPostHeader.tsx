
import React from 'react';
import { type BlogPost } from '../../utils/blog';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <div className="w-full h-[400px] relative">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default BlogPostHeader;
