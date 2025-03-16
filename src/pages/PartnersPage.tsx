
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import SectionTitle from '../components/ui/SectionTitle';
import { Building, Users, Leaf, Award, ShieldCheck, Globe } from 'lucide-react';

const PartnersPage = () => {
  const partnerCategories = [
    {
      title: "Nursery Partners",
      icon: <Leaf className="h-10 w-10 text-bonsai-olive mb-3" />,
      description: "Local Indonesian nurseries that grow and develop premium bonsai specimens.",
      partners: [
        { name: "Bogor Botanical Garden", focus: "Research & Conservation" },
        { name: "Jayapura Tropical Nursery", focus: "Rare Species Cultivation" },
        { name: "West Java Bonsai Collective", focus: "Traditional Techniques" },
        { name: "Sumatran Rainforest Initiative", focus: "Sustainable Forestry" },
        { name: "Bandung Horticultural Society", focus: "Plant Pathology & Health" }
      ]
    },
    {
      title: "Export Partners",
      icon: <Globe className="h-10 w-10 text-bonsai-olive mb-3" />,
      description: "Shipping and logistics partners ensuring safe delivery worldwide.",
      partners: [
        { name: "Pacific Air Cargo", focus: "APAC Region Shipping" },
        { name: "EuroPlant Logistics", focus: "European Market Specialist" },
        { name: "Global Botanical Transport", focus: "Temperature-Controlled Shipping" },
        { name: "AeroBotanical", focus: "Express Air Freight" },
        { name: "Plant Secure Logistics", focus: "Tracking & Insurance" }
      ]
    },
    {
      title: "Certification Bodies",
      icon: <ShieldCheck className="h-10 w-10 text-bonsai-olive mb-3" />,
      description: "Organizations that certify our sustainable and legal practices.",
      partners: [
        { name: "Indonesian Plant Authority", focus: "Phytosanitary Certification" },
        { name: "CITES Compliance Board", focus: "Protected Species Monitoring" },
        { name: "Sustainable Plant Trade Coalition", focus: "Ethical Standards" },
        { name: "Global Botanical Ethics Council", focus: "Fair Trade Practices" },
        { name: "Green Export Initiative", focus: "Carbon-Neutral Shipping" }
      ]
    },
    {
      title: "International Distributors",
      icon: <Building className="h-10 w-10 text-bonsai-olive mb-3" />,
      description: "Retail and wholesale partners around the world.",
      partners: [
        { name: "European Bonsai Alliance", focus: "EU Distribution Network" },
        { name: "North American Bonsai Consortium", focus: "US & Canada Markets" },
        { name: "Asia-Pacific Plant Importers", focus: "Regional Distribution" },
        { name: "Oceania Botanical Group", focus: "Australia & NZ Market" },
        { name: "Global Botanical Retailers Association", focus: "Worldwide Retail Network" }
      ]
    }
  ];

  return (
    <SingleLayout section="partners">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="OUR PARTNERS"
          title="Working Together for Quality"
          description="At Indo Cipanas Bonsai, we believe in the power of collaboration. Our network of trusted partners helps us maintain the highest standards of quality, sustainability, and service in everything we do."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-playfair font-bold text-bonsai-dark-green">{category.title}</h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {category.partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center p-3 border border-gray-200 rounded-md hover:border-bonsai-olive hover:bg-bonsai-beige/10 transition-colors">
                      <div className="ml-3">
                        <h4 className="font-medium text-bonsai-dark-green">{partner.name}</h4>
                        <p className="text-sm text-gray-500">{partner.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-bonsai-beige/20 rounded-xl p-8 border border-bonsai-beige">
          <div className="flex flex-col md:flex-row items-center">
            <Users className="h-16 w-16 text-bonsai-olive mb-6 md:mb-0 md:mr-8" />
            <div>
              <h3 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-3">Become a Partner</h3>
              <p className="text-gray-700 mb-4">
                We're always looking to expand our network of partners who share our commitment to quality, 
                sustainability, and exceptional service. Whether you're a nursery, retailer, or logistics 
                provider, we'd love to explore collaboration opportunities.
              </p>
              <Link to="/contact" className="inline-flex items-center px-5 py-2.5 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors">
                Contact for Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SingleLayout>
  );
};

export default PartnersPage;
