
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Calendar } from 'lucide-react';
import { type LegalContent } from '../../utils/legalContent';

interface LegalPageTemplateProps {
  content: LegalContent;
}

const LegalPageTemplate: React.FC<LegalPageTemplateProps> = ({ content }) => {
  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle={content.subtitle}
          title={content.title}
        />
        
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            {/* Last updated date */}
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <Calendar size={16} className="mr-2" />
              <span>{content.lastUpdated}</span>
            </div>
            
            {/* Content sections */}
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="prose max-w-none">
                  <h2 className="text-xl font-semibold text-bonsai-dark-green mb-3">{section.title}</h2>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
            
            {/* Contact information */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-semibold text-bonsai-dark-green mb-3">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this {content.title.toLowerCase()}, please contact us:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>By email: legal@indocipanasbonsai.com</li>
                <li>By mail: Indo Cipanas Bonsai, Jl. Raya Cipanas No. 123, Cipanas, West Java, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageTemplate;
