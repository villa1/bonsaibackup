
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Reviews from '../components/home/Reviews';
import DefaultLayout from '../layouts/DefaultLayout';

const TestimonialsPage = () => {
  return (
    <DefaultLayout>
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="CUSTOMER TESTIMONIALS"
          title="What Our Clients Say"
          description="Discover what customers around the world have to say about their experience with Indo Cipanas Bonsai. We're proud to maintain our reputation for excellence in quality and service."
        />
        
        <div className="mt-12">
          <Reviews />
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Why Our Customers Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-bonsai-olive">Quality Assurance</h3>
              <p className="text-gray-600">Every plant we export undergoes a rigorous quality control process. Our customers consistently praise the exceptional health and vitality of our bonsai and tropical plants upon arrival.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-bonsai-olive">Expert Knowledge</h3>
              <p className="text-gray-600">Our team provides detailed care instructions and ongoing support for all our plants. Customers appreciate our expertise and willingness to share information about plant care and maintenance.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-bonsai-olive">Secure Packaging</h3>
              <p className="text-gray-600">We've perfected our packaging methods to ensure plants arrive in perfect condition, even after international shipping. Our attention to detail during the packing process is frequently highlighted in customer feedback.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-bonsai-olive">Responsive Service</h3>
              <p className="text-gray-600">From initial inquiry to post-delivery care, our responsive customer service team ensures a smooth experience. Many of our customers return for additional purchases due to our dedicated support.</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TestimonialsPage;
