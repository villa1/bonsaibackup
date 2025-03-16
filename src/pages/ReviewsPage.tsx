
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Reviews from '../components/home/Reviews';
import DefaultLayout from '../layouts/DefaultLayout';
import SectionTitle from '../components/ui/SectionTitle';

const ReviewsPage = () => {
  return (
    <DefaultLayout>
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">Customer Reviews</span>
          </div>
        </div>
      </div>
      
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="CUSTOMER TESTIMONIALS"
          title="What Our Clients Say"
          description="Discover what customers around the world have to say about their experience with Indo Cipanas Bonsai. We're proud to maintain our reputation for excellence in quality and service."
        />
        
        <div className="mt-12">
          <Reviews />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ReviewsPage;
