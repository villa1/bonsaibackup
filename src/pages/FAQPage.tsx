
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const FAQPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<{[key: string]: number | null}>({
    shipping: null,
    products: null,
    care: null,
    ordering: null,
    legal: null
  });

  const faqCategories: {[key: string]: FAQCategory} = {
    shipping: {
      title: "Shipping & Delivery",
      items: [
        {
          question: "How do you ensure plants survive international shipping?",
          answer: "We use specialized packaging techniques developed over years of experience, including temperature regulation, moisture control, and secure bracing. Each plant is individually wrapped and sealed to maintain ideal humidity levels. We also time our shipments to avoid extreme weather conditions and use expedited shipping services with experience handling live plants."
        },
        {
          question: "Which countries do you ship to?",
          answer: "We ship to most countries worldwide, with some exceptions due to import regulations. Major destinations include the USA, Canada, EU countries, UK, Australia, Japan, and the UAE. Please contact us to confirm shipping availability to your specific location, as regulations can change."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping times vary by destination. Typically, orders reach Asian countries in 2-5 days, North America and Europe in 5-10 days, and other regions in 7-14 days. We provide tracking information so you can monitor your shipment's progress."
        },
        {
          question: "Do I need to pay import duties or taxes?",
          answer: "Import duties, taxes, and customs clearance fees are the responsibility of the buyer and are not included in our shipping costs. These vary by country and the value of your order. We provide accurate documentation to facilitate the customs process, but we recommend researching your country's import requirements before ordering."
        },
        {
          question: "What if my plant arrives damaged?",
          answer: "While extremely rare, if your plant arrives damaged, please document the condition with photos immediately upon opening and contact us within 48 hours. We offer replacements or refunds for plants damaged during transit, subject to our guarantee policy."
        }
      ]
    },
    products: {
      title: "Our Plants & Products",
      items: [
        {
          question: "What types of plants do you offer?",
          answer: "We specialize in semi-mature bonsai trees, tropical plants, and rare Indonesian native species. Our inventory includes ficus varieties, juniper bonsai, tropical flowering species, rare aroids, and specialty plants like Adenium and Euphorbia. We regularly update our available stock based on seasonality and availability."
        },
        {
          question: "How old are your bonsai trees?",
          answer: "Our bonsai range from young specimens (3-5 years) to semi-mature trees (10-20 years). For collectors, we occasionally offer mature specimens (30+ years). Each listing specifies the approximate age of the tree."
        },
        {
          question: "Are all your plants nursery-grown?",
          answer: "Yes, all our plants are ethically sourced from our network of nurseries and dedicated growers. We do not collect from the wild. Our sustainable cultivation practices ensure we can offer beautiful specimens while protecting natural habitats."
        },
        {
          question: "Do you provide certificates for your plants?",
          answer: "All our exports include proper phytosanitary certificates and CITES documentation where required. For premium specimens, we also provide certificates of authenticity and cultivation history."
        },
        {
          question: "Can I request a specific plant style or species?",
          answer: "Yes! We welcome custom requests. If you're looking for a specific species, style, or size not listed on our website, please contact us. We can often source specific plants through our extensive grower network."
        }
      ]
    },
    care: {
      title: "Plant Care & Maintenance",
      items: [
        {
          question: "Will my plant survive in my local climate?",
          answer: "Most of our tropical plants require warm temperatures (above 50°F/10°C) and cannot tolerate frost. Temperate bonsai species have different requirements. We provide detailed care guides with each plant, including climate adaptability information. For customers in cold climates, many of our plants can thrive indoors or in greenhouses."
        },
        {
          question: "How should I care for my plant after arrival?",
          answer: "Upon arrival, keep your plant in a sheltered, indirect light location for 7-10 days to acclimate. Mist tropical species regularly and water sparingly at first. Each plant comes with specific care instructions tailored to its species and your climate zone. We also offer ongoing care support via email."
        },
        {
          question: "How often should I water my bonsai?",
          answer: "Watering frequency depends on the species, pot size, soil composition, and your local climate. As a general rule, most bonsai should be watered when the top 1 cm of soil feels dry to the touch. Tropical species typically need more frequent watering than temperate species. Your detailed care guide will provide specific recommendations."
        },
        {
          question: "When and how should I repot my plant?",
          answer: "Most bonsai require repotting every 2-3 years, while tropical houseplants typically need repotting every 1-2 years. The best time for repotting is usually early spring for most species. We include species-specific repotting guidelines with each plant purchase."
        },
        {
          question: "Do you offer ongoing support for plant care?",
          answer: "Absolutely! We offer email support for all customers and have a library of care guides on our website. Premium customers receive access to video consultations with our plant specialists for personalized care advice."
        }
      ]
    },
    ordering: {
      title: "Ordering & Payment",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cryptocurrency payments (Bitcoin, Ethereum). For large orders, we can arrange custom payment plans."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "Orders can be modified or canceled within 24 hours of placement. After this window, we begin our preparation process and may not be able to accommodate changes. Please contact us immediately if you need to adjust your order."
        },
        {
          question: "Do you offer wholesale pricing?",
          answer: "Yes, we offer wholesale pricing for nurseries, garden centers, landscape designers, and commercial clients. Please contact our wholesale department for pricing and minimum order requirements."
        },
        {
          question: "Can I place a custom order?",
          answer: "We welcome custom orders! Whether you're looking for specific species, sizes, or styles, our team can work with you to source the perfect plants. Custom orders typically require a 50% deposit and may have longer lead times."
        },
        {
          question: "What is your return policy?",
          answer: "Due to the nature of live plants, we do not accept returns. However, we do offer our Plant Health Guarantee. If a plant arrives damaged or dies within 14 days despite proper care, we provide replacements or refunds. Please refer to our detailed Return Policy for complete information."
        }
      ]
    },
    legal: {
      title: "Legal & Documentation",
      items: [
        {
          question: "What documents do you provide for import?",
          answer: "We provide all necessary export documentation, including phytosanitary certificates, CITES permits (where applicable), commercial invoices, and packing lists. Our experienced team ensures all paperwork meets international requirements to facilitate smooth customs clearance."
        },
        {
          question: "Are there plants that cannot be exported to my country?",
          answer: "Import regulations vary by country. Some nations have restrictions on certain plant species, sizes, or soil types. Before ordering, we recommend checking your country's import regulations or contacting us to confirm whether your desired plants can be legally imported to your location."
        },
        {
          question: "How do you comply with CITES regulations?",
          answer: "We strictly adhere to CITES (Convention on International Trade in Endangered Species) regulations. For any CITES-listed species, we obtain all required permits before export and provide copies to the customer. This ensures all our plant exports comply with international conservation laws."
        },
        {
          question: "Do you guarantee all plants are legally exportable?",
          answer: "Yes, we guarantee that all plants we ship are legally exportable from Indonesia and have the proper documentation. Our expert team stays current with international regulations and will never ship a plant that doesn't meet legal requirements."
        },
        {
          question: "What is your privacy policy regarding customer information?",
          answer: "We respect your privacy and protect your personal information. Customer data is used only for processing orders, shipping, and providing customer support. We never sell or share your information with third parties. Please see our Privacy Policy page for complete details."
        }
      ]
    }
  };

  const toggleQuestion = (category: string, index: number) => {
    setExpandedIndex(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="FREQUENTLY ASKED QUESTIONS"
          title="Common Questions About Our Plants & Services"
          description="Find answers to the most common questions about our plants, shipping, care, and more. If you don't see your question answered here, please contact us."
        />
        
        <div className="mt-12 space-y-10">
          {Object.entries(faqCategories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="bg-white rounded-xl shadow-md overflow-hidden">
              <h2 className="text-xl font-playfair font-bold text-white bg-bonsai-dark-green p-6">
                {category.title}
              </h2>
              
              <div className="divide-y divide-gray-100">
                {category.items.map((item, index) => (
                  <div key={index} className="p-6">
                    <button
                      onClick={() => toggleQuestion(categoryKey, index)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <h3 className="text-lg font-medium text-bonsai-dark-green">
                        {item.question}
                      </h3>
                      <span className="text-bonsai-olive">
                        {expandedIndex[categoryKey] === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    
                    <div className={`mt-2 transition-all duration-300 overflow-hidden ${expandedIndex[categoryKey] === index ? 'max-h-96' : 'max-h-0'}`}>
                      <p className="text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-bonsai-beige/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our team is here to help.
            Contact us and we'll get back to you as soon as possible.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
