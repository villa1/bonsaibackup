
import React from 'react';
import SingleLayout from '../layouts/SingleLayout';
import SectionTitle from '../components/ui/SectionTitle';
import { Leaf, Recycle, Users, BarChart3, Shield, Globe } from 'lucide-react';

const SustainabilityPage = () => {
  const sustainabilityPillars = [
    {
      title: "Ethical Sourcing",
      icon: <Shield className="h-10 w-10 text-bonsai-olive mb-4" />,
      description: "We ensure all our plants are legally and ethically sourced, maintaining strict compliance with CITES regulations and Indonesian forestry laws. We never collect from protected areas or endangered populations."
    },
    {
      title: "Community Empowerment",
      icon: <Users className="h-10 w-10 text-bonsai-olive mb-4" />,
      description: "We partner with local farmers and artisans, providing fair compensation and ongoing training. This creates sustainable livelihoods while preserving traditional knowledge and techniques."
    },
    {
      title: "Environmental Stewardship",
      icon: <Leaf className="h-10 w-10 text-bonsai-olive mb-4" />,
      description: "Our nurseries implement water conservation, organic growing methods, and integrated pest management. We maintain forest buffer zones and practice habitat restoration in our growing areas."
    },
    {
      title: "Resource Efficiency",
      icon: <Recycle className="h-10 w-10 text-bonsai-olive mb-4" />,
      description: "We utilize rainwater harvesting, solar power, and composting systems. Our packaging incorporates biodegradable and recycled materials to minimize environmental impact during shipping."
    }
  ];

  const sustainabilityMetrics = [
    { label: "Reduction in water usage", value: "35%", period: "since 2020" },
    { label: "Solar power utilization", value: "60%", period: "of our energy needs" },
    { label: "Community farmers supported", value: "120+", period: "across Indonesia" },
    { label: "Trees planted for reforestation", value: "5,000+", period: "annually" }
  ];

  const certifications = [
    {
      name: "CITES Certified",
      description: "Full compliance with the Convention on International Trade in Endangered Species of Wild Fauna and Flora."
    },
    {
      name: "Indonesian Export License",
      description: "Officially approved by the Indonesian government for plant export with all required permits."
    },
    {
      name: "Sustainable Trade Certification",
      description: "Verified commitment to ethical sourcing, fair labor practices, and environmental stewardship."
    },
    {
      name: "Carbon Reduction Initiative",
      description: "Active participation in carbon offset programs and emissions reduction strategies."
    }
  ];

  return (
    <SingleLayout section="sustainability">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="OUR COMMITMENT"
          title="Sustainable Practices"
          description="At Indo Cipanas Bonsai, sustainability isn't just a buzzword—it's fundamental to our business model and values. We are committed to environmental stewardship, community support, and ethical business practices in everything we do."
        />
        
        {/* Hero image */}
        <div className="mt-8 mb-16 rounded-xl overflow-hidden h-[400px] relative">
          <img 
            src="/placeholder.svg" 
            alt="Indo Cipanas sustainable nursery practices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bonsai-dark-green/70 to-transparent flex items-center">
            <div className="max-w-md ml-8 md:ml-16 text-white">
              <h2 className="text-3xl font-playfair font-bold mb-4">Growing With Purpose</h2>
              <p>
                Our sustainability journey encompasses every aspect of our operation, 
                from how we cultivate our plants to how we engage with communities and 
                deliver our products to customers worldwide.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sustainability pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainabilityPillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {pillar.icon}
                <h3 className="text-xl font-semibold text-bonsai-dark-green mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Metrics section */}
        <div className="bg-bonsai-beige/20 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-8">Our Impact by the Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <BarChart3 className="h-10 w-10 text-bonsai-olive mx-auto mb-3" />
                <span className="block text-3xl font-bold text-bonsai-dark-green mb-1">{metric.value}</span>
                <span className="block text-sm text-bonsai-olive mb-2">{metric.period}</span>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-6">Community Impact</h2>
            <p className="text-gray-600 mb-4">
              Our business model is built on supporting local communities. We work directly 
              with farmers and artisans throughout Indonesia, providing fair compensation, 
              training, and long-term partnerships.
            </p>
            <p className="text-gray-600 mb-4">
              Through our community development programs, we've helped establish sustainable 
              livelihoods while preserving traditional cultivation techniques that have been 
              passed down through generations.
            </p>
            <p className="text-gray-600">
              We regularly host workshops for local farmers on sustainable growing practices, 
              business skills, and export requirements, empowering them to participate in the 
              global market while maintaining environmental responsibility.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden h-[300px]">
            <img 
              src="/placeholder.svg" 
              alt="Indo Cipanas community work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green text-center mb-8">Our Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex p-4 border border-gray-200 rounded-lg">
                <div className="bg-bonsai-beige/30 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-bonsai-olive" />
                </div>
                <div>
                  <h3 className="font-semibold text-bonsai-dark-green">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future goals */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <Globe className="h-16 w-16 text-bonsai-olive mb-6 md:mb-0 md:mr-8" />
            <div>
              <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Our Future Commitments</h2>
              <p className="text-gray-600 mb-4">
                While we're proud of our achievements so far, we recognize that sustainability is a journey, 
                not a destination. We're continually improving our practices and setting ambitious goals:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-bonsai-olive mr-2 mt-0.5" />
                  <span>Achieve carbon neutrality in all operations by 2028</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-bonsai-olive mr-2 mt-0.5" />
                  <span>Eliminate all single-use plastics from our packaging by 2026</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-bonsai-olive mr-2 mt-0.5" />
                  <span>Expand our community farming network to 200+ families</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-bonsai-olive mr-2 mt-0.5" />
                  <span>Increase our reforestation initiatives by 50%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SingleLayout>
  );
};

export default SustainabilityPage;
