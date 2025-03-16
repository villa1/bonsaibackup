
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Users, Clock, Award, FileCheck, Medal, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle subtitle="COMPANY PROFILE" title="About Us" />
        
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 1998, Indo Cipanas Bonsai began as a small family nursery in the highland region of Cipanas, West Java. Our journey started with a profound passion for the ancient art of bonsai and a vision to introduce Indonesia's extraordinary tropical plant diversity to the global market.
            </p>
            <p className="text-gray-700 mb-4">
              Over two decades, we have grown to become Indonesia's premier exporter of tropical bonsai, blending traditional Japanese techniques with unique Indonesian botanical heritage. Our 15-hectare facility now hosts over 50,000 specimens across 120 species, all cultivated with meticulous care.
            </p>
            <p className="text-gray-700">
              Today, we serve collectors, botanical gardens, and landscapers across 35 countries, while maintaining our commitment to ethical sourcing, sustainable practices, and supporting local farming communities. Each bonsai we create tells a story of Indonesia's natural beauty, preserved through the art of careful cultivation.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Bonsai Nursery" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bonsai-olive/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-bonsai-wheat/30 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-bonsai-olive" size={28} />
              </div>
              <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Customer First</h3>
              <p className="text-gray-600">
                We prioritize lasting relationships built on trust and excellence, providing personalized service and ensuring complete satisfaction with every interaction.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-bonsai-olive" size={28} />
              </div>
              <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Excellence in Craft</h3>
              <p className="text-gray-600">
                We merge traditional Japanese bonsai techniques with Indonesian botanical heritage, created by master artisans with decades of expertise.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-bonsai-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-bonsai-olive" size={28} />
              </div>
              <h3 className="font-bold text-bonsai-dark-green text-lg mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                We're dedicated to ethical sourcing, renewable cultivation methods, and supporting local communities while conserving Indonesia's botanical heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mb-20">
          <SectionTitle subtitle="OUR EXPERTS" title="Meet the Team" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Sarah Johnson</h3>
              <p className="text-bonsai-olive mb-2">Master Bonsai Artist</p>
              <p className="text-gray-600 text-sm px-4">
                With over 20 years of experience in tropical bonsai cultivation, Sarah leads our design team and oversees artistic development.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">David Chen</h3>
              <p className="text-bonsai-olive mb-2">Export Specialist</p>
              <p className="text-gray-600 text-sm px-4">
                David ensures all international shipments comply with regulations and arrive in perfect condition through his expertise in global logistics.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Michael Wong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Michael Wong</h3>
              <p className="text-bonsai-olive mb-2">Horticultural Director</p>
              <p className="text-gray-600 text-sm px-4">
                Michael oversees our nurseries with his advanced degree in tropical horticulture, ensuring optimal growing conditions for all our plants.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-bonsai-olive/20">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Amanda Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green">Amanda Patel</h3>
              <p className="text-bonsai-olive mb-2">Customer Relations</p>
              <p className="text-gray-600 text-sm px-4">
                Amanda ensures all clients receive personalized service from initial inquiry through long-term care guidance with her dedication to client satisfaction.
              </p>
            </div>
          </div>
        </div>
        
        {/* Certifications & Licenses Section */}
        <div className="mb-12">
          <SectionTitle subtitle="OUR CREDENTIALS" title="Certifications & Licenses" />
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <div className="flex items-start mb-6">
                <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                  <FileCheck className="text-bonsai-olive h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">CITES Certification</h3>
                  <p className="text-gray-600 mb-4">
                    We hold valid CITES permits for all applicable plant species, ensuring legal and sustainable trade of protected botanical specimens across international borders.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                      <Globe size={20} className="text-bonsai-dark-green" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-bonsai-dark-green">Permit Number</p>
                      <p className="text-gray-600">ID-CITES-EXP-2023/054</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-start mb-6">
                <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                  <Medal className="text-bonsai-olive h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Business License</h3>
                  <p className="text-gray-600 mb-4">
                    Indo Cipanas Bonsai is a legally registered company in Indonesia, officially recognized under the Indonesian business registry with NIB 212240016669.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                      <Award size={20} className="text-bonsai-dark-green" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-bonsai-dark-green">Legal Status</p>
                      <p className="text-gray-600">Fully Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-start mb-6">
                <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                  <FileCheck className="text-bonsai-olive h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Phytosanitary Certification</h3>
                  <p className="text-gray-600 mb-4">
                    We obtain proper phytosanitary certificates for all plant exports, ensuring our plants meet the strictest international health standards and are free from pests and diseases.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                      <Globe size={20} className="text-bonsai-dark-green" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-bonsai-dark-green">Issuing Authority</p>
                      <p className="text-gray-600">Indonesian Plant Quarantine Agency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-start mb-6">
                <div className="bg-bonsai-olive/10 p-3 rounded-lg mr-4">
                  <Medal className="text-bonsai-olive h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green mb-2">Export License</h3>
                  <p className="text-gray-600 mb-4">
                    We hold a valid export license from the Indonesian Ministry of Trade, allowing us to legally export bonsai and ornamental plants to destinations worldwide.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-bonsai-beige rounded-full flex items-center justify-center mr-3">
                      <Award size={20} className="text-bonsai-dark-green" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-bonsai-dark-green">License Number</p>
                      <p className="text-gray-600">ID-EXP-3456/TRADE/2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
