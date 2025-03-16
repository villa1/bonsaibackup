
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import SectionTitle from '../components/ui/SectionTitle';
import { FileText, Download, Calendar, ArrowUpRight, Award } from 'lucide-react';

const PressPage = () => {
  const pressReleases = [
    {
      title: "Indo Cipanas Bonsai Expands Export Capacity with New Facility",
      date: "May 15, 2025",
      excerpt: "The new state-of-the-art facility will increase our capacity to serve international clients while maintaining our commitment to sustainability and quality.",
      link: "#"
    },
    {
      title: "Partnership Announced with Global Botanical Exchange",
      date: "March 22, 2025",
      excerpt: "This strategic partnership will enhance our distribution network across Europe and North America, bringing our premium bonsai to more collectors worldwide.",
      link: "#"
    },
    {
      title: "Indo Cipanas Receives Sustainability Certification",
      date: "February 10, 2025",
      excerpt: "Our commitment to sustainable growing practices has been recognized with the prestigious Green Export Initiative certification.",
      link: "#"
    },
    {
      title: "Launch of Rare Species Conservation Program",
      date: "December 5, 2024",
      excerpt: "Our new conservation initiative focuses on preserving endangered plant species through sustainable propagation and education.",
      link: "#"
    }
  ];

  const mediaFeatures = [
    {
      outlet: "Botanical Today",
      title: "The Rise of Indonesian Bonsai on the Global Stage",
      date: "April 2025",
      link: "#"
    },
    {
      outlet: "International Plant Trader",
      title: "How Indo Cipanas Revolutionized Plant Export Practices",
      date: "March 2025",
      link: "#"
    },
    {
      outlet: "Green Business Quarterly",
      title: "Sustainability Leaders in the Ornamental Plant Industry",
      date: "January 2025",
      link: "#"
    },
    {
      outlet: "Asian Horticulture Review",
      title: "Traditional Techniques Meet Modern Practices at Indo Cipanas",
      date: "December 2024",
      link: "#"
    }
  ];

  const awards = [
    {
      name: "Excellence in Export - Indonesian Trade Ministry",
      year: "2025",
      description: "Recognized for outstanding quality and compliance in plant exports."
    },
    {
      name: "Sustainable Business Award - APAC Green Business Association",
      year: "2024",
      description: "Honored for environmental leadership and sustainable growing practices."
    },
    {
      name: "Best in Specialist Horticulture - International Botanical Congress",
      year: "2024",
      description: "Awarded for exceptional quality and expertise in bonsai cultivation."
    }
  ];

  return (
    <SingleLayout section="press">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="PRESS & MEDIA"
          title="News and Announcements"
          description="Find the latest news, press releases, and media coverage about Indo Cipanas Bonsai and our ongoing commitment to quality and sustainability in the bonsai industry."
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Press Releases */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Press Releases</h2>
            
            {pressReleases.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-bonsai-olive transition-colors">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={14} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-bonsai-dark-green mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href={item.link} className="inline-flex items-center text-bonsai-olive hover:text-bonsai-dark-green">
                  Read full release <ArrowUpRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
            
            <div className="mt-6 p-6 bg-bonsai-beige/20 rounded-xl border border-bonsai-beige">
              <h3 className="text-xl font-semibold text-bonsai-dark-green mb-4">Media Resources</h3>
              <p className="text-gray-600 mb-6">
                Journalists and media professionals can download our press kit for official logos, 
                high-resolution images, and company information.
              </p>
              <a href="#" className="inline-flex items-center px-5 py-2.5 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors">
                <Download size={16} className="mr-2" />
                Download Press Kit
              </a>
            </div>
          </div>
          
          {/* Media Coverage & Awards */}
          <div>
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Media Coverage</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <ul className="space-y-4">
                {mediaFeatures.map((feature, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <span className="block text-sm text-bonsai-olive font-medium">{feature.outlet}</span>
                    <a href={feature.link} className="font-medium text-bonsai-dark-green hover:text-bonsai-olive">
                      {feature.title}
                    </a>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar size={12} className="mr-1" />
                      <span>{feature.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Awards & Recognition</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ul className="space-y-6">
                {awards.map((award, index) => (
                  <li key={index} className="flex">
                    <Award className="h-6 w-6 text-bonsai-olive flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-bonsai-dark-green">{award.name}</h4>
                      <span className="text-sm text-bonsai-olive">{award.year}</span>
                      <p className="text-sm text-gray-600 mt-1">{award.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6 text-center">Media Inquiries</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              For press inquiries, interview requests, or additional information about Indo Cipanas Bonsai, 
              please contact our media relations team. We aim to respond to all media inquiries within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <FileText size={18} className="text-bonsai-olive mr-2" />
                <span className="text-gray-700">press@indocipanasbonsai.com</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="text-bonsai-olive mr-2" />
                <span className="text-gray-700">Mon-Fri, 9AM - 5PM (GMT+7)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SingleLayout>
  );
};

export default PressPage;
