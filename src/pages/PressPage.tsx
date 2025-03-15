
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Indo Cipanas Bonsai Announces Expansion of Sustainable Export Program",
      date: "June 15, 2023",
      excerpt: "We're excited to announce the expansion of our sustainable export program, which will increase our capacity while maintaining our commitment to environmental responsibility.",
      link: "#"
    },
    {
      id: 2,
      title: "New Partnership with European Botanical Gardens Association",
      date: "April 3, 2023",
      excerpt: "Indo Cipanas Bonsai has formed a strategic partnership with the European Botanical Gardens Association to promote Indonesian plant species preservation.",
      link: "#"
    },
    {
      id: 3,
      title: "Indo Cipanas Bonsai Recognized for Community Development Initiatives",
      date: "February 28, 2023",
      excerpt: "Our company has been awarded the Regional Community Impact Award for our work supporting local farming communities in Indonesia.",
      link: "#"
    },
    {
      id: 4,
      title: "Launch of Rare Tropical Plant Conservation Program",
      date: "November 12, 2022",
      excerpt: "Indo Cipanas Bonsai is proud to announce our new conservation program dedicated to preserving and propagating rare Indonesian tropical plant species.",
      link: "#"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      title: "Indo Cipanas Bonsai: Bringing Indonesian Artistry to Global Gardens",
      publication: "Botanical World Magazine",
      date: "July 2023",
      link: "#"
    },
    {
      id: 2,
      title: "How This Indonesian Exporter is Changing the Global Bonsai Market",
      publication: "International Horticulture Review",
      date: "May 2023",
      link: "#"
    },
    {
      id: 3,
      title: "Sustainable Plant Export: The Indo Cipanas Model",
      publication: "Green Business Quarterly",
      date: "March 2023",
      link: "#"
    },
    {
      id: 4,
      title: "From Java to the World: The Journey of Indonesian Bonsai",
      publication: "Cultural Botanicals Journal",
      date: "January 2023",
      link: "#"
    }
  ];

  const mediaAssets = [
    {
      id: 1,
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      fileType: "ZIP",
      link: "#"
    },
    {
      id: 2,
      title: "Executive Team Photos",
      description: "Professional headshots of our leadership team",
      fileType: "ZIP",
      link: "#"
    },
    {
      id: 3,
      title: "Facility & Nursery Images",
      description: "High-quality photos of our growing facilities",
      fileType: "ZIP",
      link: "#"
    },
    {
      id: 4,
      title: "Product Catalog Images",
      description: "Professional photos of our featured plants",
      fileType: "ZIP",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="PRESS & MEDIA"
          title="News & Resources"
          description="Find the latest information about Indo Cipanas Bonsai, including press releases, media coverage, and resources for journalists and partners."
        />
        
        {/* Press Releases */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Press Releases</h2>
          
          <div className="space-y-6">
            {pressReleases.map(release => (
              <div key={release.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center text-sm text-bonsai-olive mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{release.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-bonsai-dark-green mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <a href={release.link} className="text-bonsai-olive hover:text-bonsai-dark-green font-medium flex items-center">
                  Read full press release
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Media Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Media Coverage</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publication</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mediaFeatures.map(feature => (
                  <tr key={feature.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.publication}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feature.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feature.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-bonsai-olive">
                      <a href={feature.link} className="hover:text-bonsai-dark-green flex items-center">
                        Read
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Media Assets */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Media Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map(asset => (
              <div key={asset.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-bonsai-dark-green mb-2">{asset.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{asset.description}</p>
                <a href={asset.link} className="flex items-center text-bonsai-olive hover:text-bonsai-dark-green font-medium">
                  <Download size={16} className="mr-2" />
                  Download {asset.fileType}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Media Contact */}
        <div className="mt-16 bg-bonsai-beige/50 rounded-lg p-8">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Media Contact</h2>
          <p className="text-gray-700 mb-6">
            For media inquiries, interview requests, or additional information, please contact our press office:
          </p>
          
          <div className="space-y-2">
            <p className="font-medium">Media Relations Department</p>
            <p>Email: press@indocipanasbonsai.com</p>
            <p>Phone: +62 123 456 789</p>
          </div>
          
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
