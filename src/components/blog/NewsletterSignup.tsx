
import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Get our latest articles, care guides, and expert advice delivered directly to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bonsai-olive/50"
          />
          <button className="bg-bonsai-dark-green text-white px-6 py-3 rounded-md hover:bg-bonsai-olive transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
