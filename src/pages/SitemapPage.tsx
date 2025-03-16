
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleLayout from '../layouts/SingleLayout';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, FileText, Home, ShoppingBag, Users, Info, Mail, Book, Leaf, HelpCircle, Star, Building, Newspaper, FileCode, Shield } from 'lucide-react';

interface SitemapCategory {
  title: string;
  icon: React.ReactNode;
  links: {
    label: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

const SitemapPage = () => {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the sitemap paths
    fetch('/sitemap.md')
      .then(response => response.text())
      .then(data => {
        // Extract paths from the markdown file
        const lines = data.split('\n');
        const extractedPaths = lines
          .filter(line => line.startsWith('/'))
          .map(line => line.trim());
        
        setPaths(extractedPaths);
      })
      .catch(error => {
        console.error('Error loading sitemap paths:', error);
        // Fallback to routes we know exist
        setPaths([
          '/',
          '/services',
          '/services-catalog',
          '/about',
          '/contact',
          '/export-process',
          '/sustainability',
          '/faq',
          '/testimonials',
          '/blog',
          '/partners',
          '/press',
          '/privacy-policy',
          '/terms-of-service',
          '/cookie-policy',
          '/accessibility',
          '/return-policy',
          '/sitemap',
        ]);
      });
  }, []);

  // Organize the pages into categories
  const sitemapCategories: SitemapCategory[] = [
    {
      title: "Main Pages",
      icon: <Home className="h-5 w-5 text-bonsai-olive" />,
      links: [
        { label: "Home", path: "/", icon: <Home size={14} /> },
        { label: "About Us", path: "/about", icon: <Info size={14} /> },
        { label: "Contact", path: "/contact", icon: <Mail size={14} /> },
      ]
    },
    {
      title: "Products & Services",
      icon: <ShoppingBag className="h-5 w-5 text-bonsai-olive" />,
      links: [
        { label: "Services", path: "/services", icon: <ShoppingBag size={14} /> },
        { label: "Services Catalog", path: "/services-catalog", icon: <FileText size={14} /> },
        { label: "Export Process", path: "/export-process", icon: <ChevronRight size={14} /> },
      ]
    },
    {
      title: "Information",
      icon: <Info className="h-5 w-5 text-bonsai-olive" />,
      links: [
        { label: "Sustainability", path: "/sustainability", icon: <Leaf size={14} /> },
        { label: "FAQ", path: "/faq", icon: <HelpCircle size={14} /> },
        { label: "Blog", path: "/blog", icon: <Book size={14} /> },
      ]
    },
    {
      title: "About Us",
      icon: <Users className="h-5 w-5 text-bonsai-olive" />,
      links: [
        { label: "Testimonials", path: "/testimonials", icon: <Star size={14} /> },
        { label: "Partners", path: "/partners", icon: <Building size={14} /> },
        { label: "Press", path: "/press", icon: <Newspaper size={14} /> },
      ]
    },
    {
      title: "Legal & Technical",
      icon: <Shield className="h-5 w-5 text-bonsai-olive" />,
      links: [
        { label: "Privacy Policy", path: "/privacy-policy", icon: <Shield size={14} /> },
        { label: "Terms of Service", path: "/terms-of-service", icon: <FileText size={14} /> },
        { label: "Cookie Policy", path: "/cookie-policy", icon: <Shield size={14} /> },
        { label: "Accessibility", path: "/accessibility", icon: <Users size={14} /> },
        { label: "Return Policy", path: "/return-policy", icon: <ShoppingBag size={14} /> },
        { label: "XML Sitemap", path: "/sitemap.xml", icon: <FileCode size={14} /> },
      ]
    }
  ];

  // For any paths that aren't categorized above, we'll add them to "Other Pages"
  const categorizedPaths = sitemapCategories.flatMap(category => 
    category.links.map(link => link.path)
  );
  
  const uncategorizedPaths = paths.filter(path => 
    !categorizedPaths.includes(path) && 
    path !== '/sitemap' && 
    path !== '/sitemap.xml'
  );

  if (uncategorizedPaths.length > 0) {
    sitemapCategories.push({
      title: "Other Pages",
      icon: <FileText className="h-5 w-5 text-bonsai-olive" />,
      links: uncategorizedPaths.map(path => {
        // Create a label by transforming the path
        const label = path
          .replace('/', '')
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return { label: label || 'Page', path };
      })
    });
  }

  return (
    <SingleLayout section="sitemap">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="SITE NAVIGATION"
          title="Complete Website Map"
          description="Find every page on our website organized by category for easy navigation."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-bonsai-dark-green ml-2">{category.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="flex items-center p-2 hover:bg-bonsai-beige/10 rounded transition-colors"
                      >
                        {link.icon && <span className="text-bonsai-olive mr-2">{link.icon}</span>}
                        <span className="text-gray-700 hover:text-bonsai-dark-green">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-bonsai-beige/20 rounded-xl border border-bonsai-beige text-center">
          <h3 className="text-xl font-semibold text-bonsai-dark-green mb-4">Looking for Something Specific?</h3>
          <p className="text-gray-600 mb-6">
            If you can't find what you're looking for, please don't hesitate to contact us.
            Our team is here to help you navigate our products and services.
          </p>
          <Link to="/contact" className="inline-flex items-center px-5 py-2.5 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </SingleLayout>
  );
};

export default SitemapPage;
