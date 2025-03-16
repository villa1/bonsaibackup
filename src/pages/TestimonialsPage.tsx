
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Star, Award, Users, Globe } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Reviews from '../components/home/Reviews';
import DefaultLayout from '../layouts/DefaultLayout';

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: "Michael Johnson",
      role: "Botanical Garden Curator, United States",
      quote: "The quality of bonsai specimens from Indo Cipanas is exceptional. Their attention to detail in selecting, preparing, and shipping these living artworks shows their deep commitment to the craft. After working with many suppliers globally, they stand out as true masters of their profession.",
      image: "/placeholder.svg",
      stars: 5
    },
    {
      name: "Sophie Laurent",
      role: "Landscape Designer, France",
      quote: "Our design firm has incorporated Indo Cipanas bonsai into several high-profile projects. Their plants consistently exceed expectations in terms of character, health, and longevity. The export process is seamless, and their team provides excellent guidance on plant selection for our specific needs.",
      image: "/placeholder.svg",
      stars: 5
    },
    {
      name: "Tetsuo Yamada",
      role: "Bonsai Collector, Japan",
      quote: "Even as a Japanese collector with high standards, I'm consistently impressed by the quality coming from Indo Cipanas. Their tropical specimens have unique characteristics that complement my collection of traditional Japanese varieties. Their shipping methods ensure the plants arrive in perfect condition.",
      image: "/placeholder.svg",
      stars: 5
    }
  ];

  const clientCategories = [
    {
      category: "Private Collectors",
      icon: <Users className="h-8 w-8 text-bonsai-olive" />,
      description: "Discerning collectors who appreciate our rare and high-quality specimens for their personal collections.",
      countries: ["United States", "Japan", "Germany", "Australia", "Singapore", "United Kingdom", "Canada", "France", "Italy", "Spain"]
    },
    {
      category: "Botanical Gardens",
      icon: <Leaf className="h-8 w-8 text-bonsai-olive" />,
      description: "Public and private botanical institutions seeking exceptional specimens for their tropical collections.",
      institutions: ["Royal Botanical Gardens", "Singapore Botanic Gardens", "Brooklyn Botanic Garden", "Montreal Botanical Garden", "Kew Gardens"]
    },
    {
      category: "Landscape Designers",
      icon: <Globe className="h-8 w-8 text-bonsai-olive" />,
      description: "Professional designers who incorporate our premium plants into luxury properties and public spaces.",
      projects: ["Luxury Hotels", "Corporate Headquarters", "Public Parks", "Private Estates", "Wellness Retreats"]
    }
  ];

  return (
    <DefaultLayout>
      {/* Breadcrumbs */}
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">Testimonials</span>
          </div>
        </div>
      </div>
      
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="CLIENT TESTIMONIALS"
          title="What Our Clients Say"
          description="Discover what customers around the world have to say about their experience with Indo Cipanas Bonsai. We're proud to maintain our reputation for excellence in quality and service."
        />
        
        {/* Featured testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-bonsai-dark-green">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client carousel */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-8">More Client Reviews</h2>
          <Reviews />
        </div>
        
        {/* Our clients */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-8">Our Global Clientele</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-bonsai-dark-green ml-3">{category.category}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                {category.countries && (
                  <div>
                    <h4 className="font-medium text-bonsai-olive mb-2">Client Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.countries.map((country, idx) => (
                        <span key={idx} className="text-xs bg-bonsai-beige/30 text-bonsai-dark-green px-2 py-1 rounded">{country}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.institutions && (
                  <div>
                    <h4 className="font-medium text-bonsai-olive mb-2">Notable Institutions:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {category.institutions.map((institution, idx) => (
                        <li key={idx}>{institution}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {category.projects && (
                  <div>
                    <h4 className="font-medium text-bonsai-olive mb-2">Project Types:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {category.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-bonsai-beige/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Share Your Experience</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We value feedback from our clients. If you've worked with Indo Cipanas Bonsai, 
            we'd love to hear about your experience and how our plants have enhanced your collection or projects.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors">
            <MessageSquare size={18} className="mr-2" />
            Submit Your Testimonial
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TestimonialsPage;
