
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { FileText, Truck, Globe, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExportProcessPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle subtitle="SHIPPING WORLDWIDE" title="Our Export Process" />
        
        {/* Step-by-Step Export Guide */}
        <div className="mb-20">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8">Step-by-Step Export Guide</h2>
          
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-bonsai-wheat/50"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Plant Selection & Consultation</h3>
                  <p className="text-gray-700 mb-4">
                    Browse our extensive catalog or consult with our experts to find specimens that match your climate, space, and aesthetic preferences. We provide detailed information about each species' care requirements and growth characteristics to ensure successful cultivation in your region.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "The consultation process was invaluable. The team's expertise helped me select varieties that thrive in Singapore's climate while matching my design preferences." — David Chen, Singapore
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Documentation & Permits</h3>
                  <p className="text-gray-700 mb-4">
                    Our specialized export team handles all necessary documentation, including phytosanitary certificates, CITES permits for protected species, and commercial invoices. We maintain relationships with regulatory authorities to ensure smooth processing and compliance with both Indonesian export and your country's import regulations.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "Their expertise with international plant regulations made what could have been a complex process remarkably straightforward. All documentation was perfectly prepared." — Emma Tanaka, Japan
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Plant Preparation & Treatment</h3>
                  <p className="text-gray-700 mb-4">
                    Each plant undergoes meticulous preparation for international shipping. This includes appropriate pruning to reduce stress, soil treatment or bare-rooting depending on destination requirements, and preventative treatments to ensure plants are pest-free. We time this preparation phase carefully to optimize plant health during transit.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "The care taken in preparing the bonsai for shipping was evident upon arrival. Not a single leaf was damaged, and the plants adapted quickly to their new environment." — Sarah Johnson, Australia
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Custom Packaging & Shipping</h3>
                  <p className="text-gray-700 mb-4">
                    We've developed specialized packaging techniques for different plant types, sizes, and shipping durations. Each plant is secured to prevent movement while allowing adequate ventilation. Depending on your needs and destination, we offer air freight (2-5 days) or sea freight (15-45 days) options, with full insurance coverage available.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "The packaging was exceptional—innovative and secure. All 15 specimens arrived in perfect condition despite the journey to the UK." — James Wilson, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">Import Assistance & Clearance</h3>
                  <p className="text-gray-700 mb-4">
                    We provide comprehensive guidance for the import process in your country, including customs requirements and quarantine procedures. For major destinations, we can recommend trusted customs brokers. Our documentation is carefully prepared to facilitate smooth import clearance with minimal delays.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "Indo Cipanas' import guidance was invaluable. They anticipated regulatory questions and provided all necessary documentation before customs even requested it." — Carlos Rodriguez, Spain
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bonsai-olive flex items-center justify-center z-10">
                  <span className="text-white font-bold">6</span>
                </div>
                <div className="glass-card p-6 flex-1">
                  <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-3">After-Sales Support & Care</h3>
                  <p className="text-gray-700 mb-4">
                    Our commitment extends beyond delivery. We provide detailed care guides tailored to your climate and the specific species purchased. Our horticultural experts are available for ongoing consultation to ensure your plants thrive in their new environment. All plants come with our 30-day survival guarantee.
                  </p>
                  <div className="bg-bonsai-beige/50 p-4 rounded-md">
                    <p className="text-sm text-gray-700 italic">
                      "Their after-sales support is exceptional. Six months after purchase, they still responded promptly with seasonal care advice specific to my location." — Lisa Chen, Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Documentation Requirements */}
        <div className="mb-20">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-8">Documentation Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <FileText className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Phytosanitary Certificate</h3>
              </div>
              <p className="text-gray-700 mb-4">
                This official document certifies that plants are free from pests and diseases. Issued by Indonesia's Agricultural Quarantine Agency after thorough inspection, it's essential for entry into most countries and includes verification of treatments applied.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Valid for 14 days from issuance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Documents plant species, quantity, health status, and treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>We arrange all inspection and certification processes</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <ClipboardCheck className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">CITES Permit</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Required for protected species listed in the Convention on International Trade in Endangered Species. We maintain all necessary documentation proving legal cultivation, sustainable harvesting, and appropriate permits for collection or propagation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Valid for 6 months from issuance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Proves legal acquisition and sustainable cultivation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>We handle all complex application procedures</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <Globe className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Commercial Documentation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We prepare comprehensive export documentation for smooth customs processing, including detailed commercial invoices, accurate packing lists, and proper shipping documents tailored to your destination country's requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Commercial Invoice with complete plant details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Detailed Packing List with weights and dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Bill of Lading/Airway Bill with tracking information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Certificate of Origin when required by destination</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <Truck className="text-bonsai-olive mr-4 flex-shrink-0" size={32} />
                <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green">Import Requirements</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We stay current with import regulations worldwide and provide guidance on necessary permits and procedures specific to your location, including soil restrictions, treatment requirements, and quarantine policies.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Import permits guidance and application assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Quarantine requirements and pre-treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Additional declarations required for specific countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bonsai-olive mr-2">•</span>
                  <span>Customs broker recommendations in your region</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-bonsai-dark-green to-bonsai-olive text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Ready to Import Plants from Indonesia?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Our expert team will guide you through every step of the export process, ensuring a smooth experience from selection to delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
            <Link to="/services-catalog" className="btn-white">Browse Catalog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProcessPage;
