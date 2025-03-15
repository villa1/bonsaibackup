
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Building2, Users, Truck, Globe2, Database, Leaf } from 'lucide-react';

const PartnersPage = () => {
  const partnerCategories = [
    {
      icon: <Building2 size={32} className="text-bonsai-olive" />,
      title: "Nurseries & Growers",
      description: "We partner with local Indonesian nurseries and growers who share our commitment to sustainable cultivation practices and exceptional quality.",
      partners: [
        "Bogor Botanical Gardens",
        "Cipanas Horticultural Center",
        "Bandung Plant Collective",
        "Sukabumi Traditional Growers Association"
      ]
    },
    {
      icon: <Truck size={32} className="text-bonsai-olive" />,
      title: "Logistics Partners",
      description: "Our trusted logistics partners ensure secure, efficient transportation of plants worldwide, with specialized knowledge in handling live botanical products.",
      partners: [
        "EcoPack Indonesia",
        "Global Plant Transport",
        "AeroCargo Botanicals",
        "PlantSafe Shipping Solutions"
      ]
    },
    {
      icon: <Globe2 size={32} className="text-bonsai-olive" />,
      title: "International Distributors",
      description: "We work with select distributors globally who maintain our high standards of plant care and customer service.",
      partners: [
        "European Bonsai Collective",
        "North American Plant Importers Association",
        "Pacific Rim Botanical Exchange",
        "Middle East Garden Centers Alliance"
      ]
    },
    {
      icon: <Database size={32} className="text-bonsai-olive" />,
      title: "Research Institutions",
      description: "Collaborations with botanical research institutions help us stay at the forefront of plant cultivation techniques and conservation efforts.",
      partners: [
        "Indonesian Institute of Botanical Sciences",
        "Tropical Plant Research Center",
        "Agricultural University of Bogor",
        "International Bonsai Preservation Society"
      ]
    },
    {
      icon: <Leaf size={32} className="text-bonsai-olive" />,
      title: "Conservation Organizations",
      description: "We actively support and partner with organizations dedicated to plant conservation and sustainable agricultural practices.",
      partners: [
        "Indonesian Rainforest Trust",
        "Botanical Diversity Initiative",
        "Southeast Asian Plant Conservation Network",
        "Traditional Plant Knowledge Foundation"
      ]
    },
    {
      icon: <Users size={32} className="text-bonsai-olive" />,
      title: "Community Programs",
      description: "Our community partnerships empower local farmers and artisans, ensuring economic benefits reach those who contribute to our supply chain.",
      partners: [
        "Java Rural Development Program",
        "Women in Horticulture Initiative",
        "Youth Botanical Training Program",
        "Traditional Plant Knowledge Preservation Society"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="OUR PARTNERS"
          title="Working Together for Excellence"
          description="We collaborate with a diverse network of partners who share our commitment to quality, sustainability, and exceptional plant care."
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bonsai-wheat/30 flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">{category.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-bonsai-olive mb-3">Featured Partners</h4>
                  <ul className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-bonsai-wheat mr-2"></div>
                        <span className="text-gray-700">{partner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Become a Partner</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for new partnerships that align with our values of quality, sustainability, and exceptional plant care.
            If you're interested in partnering with Indo Cipanas Bonsai, we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors"
          >
            Contact Us About Partnerships
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
