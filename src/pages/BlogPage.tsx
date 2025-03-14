
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useBlogPosts } from '../utils/blog';
import FeaturedPost from '../components/blog/FeaturedPost';
import CategoryFilter from '../components/blog/CategoryFilter';
import BlogGrid from '../components/blog/BlogGrid';
import NewsletterSignup from '../components/blog/NewsletterSignup';

const BlogPage = () => {
  const { posts, loading, error } = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter posts based on category
  const filteredPosts = activeCategory 
    ? posts.filter(post => post.category === activeCategory)
    : posts;
  
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory);
  
  // Get unique categories from all posts
  const categories = [...new Set(posts.map(post => post.category))];
  
  if (loading) {
    return (
      <div className="pt-24">
        <Navbar />
        <div className="container-custom mx-auto py-12 min-h-screen">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-bonsai-dark-green"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="pt-24">
        <Navbar />
        <div className="container-custom mx-auto py-12 min-h-screen">
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-red-700">Terjadi kesalahan</h2>
            <p className="text-red-600">Tidak dapat memuat artikel blog. Silakan coba lagi nanti.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-24">
      <Navbar />
      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-bonsai-beige/50 py-3">
          <div className="container-custom mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-bonsai-dark-green font-medium">Blog</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="KNOWLEDGE & INSIGHTS" 
            title="Blog & Resources"
            description="Expert guides, industry insights, and success stories from the world of bonsai and tropical plants."
          />
          
          {/* Featured Post */}
          {!activeCategory && featuredPost && <FeaturedPost post={featuredPost} />}
          
          {/* Category Filters */}
          <CategoryFilter 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
          />
          
          {/* Blog Grid */}
          <BlogGrid posts={regularPosts} />
          
          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
