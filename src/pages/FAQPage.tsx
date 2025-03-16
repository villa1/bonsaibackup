
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SingleLayout from '../layouts/SingleLayout';

const FAQPage = () => {
  const faqs = [
    {
      question: "What types of bonsai do you specialize in?",
      answer: "We specialize in tropical and subtropical bonsai varieties that thrive in Indonesia's climate, including Ficus, Serissa, Carmona, Bougainvillea, and various native Indonesian species. Our focus is on ethically sourced specimens with established character and development."
    },
    {
      question: "How do you ensure plants survive international shipping?",
      answer: "We've perfected our shipping methods over years of experience. Each plant is carefully prepared for export, including proper root treatment, secure packaging with moisture retention systems, and temperature-controlled shipping. We also provide detailed care instructions for the critical post-arrival period."
    },
    {
      question: "Do you provide documentation for customs clearance?",
      answer: "Yes, we handle all necessary documentation for international shipping, including phytosanitary certificates, CITES permits (when applicable), and proper customs declarations. We're experienced with shipping regulations for major markets including the US, EU, UK, Australia, and Asia."
    },
    {
      question: "What is your minimum order quantity?",
      answer: "While we don't have a strict minimum order quantity for most customers, we recommend consolidating orders to optimize shipping costs. For wholesale buyers, we offer volume discounts starting at 10+ plants, with significant benefits at 25+ and 50+ quantities."
    },
    {
      question: "How long does shipping typically take?",
      answer: "Shipping times vary by destination. Typically, plants reach most Asian countries within 3-5 days, Australia/New Zealand in 5-7 days, Europe/UK in 6-8 days, and North America in 7-10 days. We provide tracking information for all shipments."
    },
    {
      question: "Do you offer any guarantees on plant survival?",
      answer: "We guarantee that plants will arrive in viable condition. If a plant arrives damaged due to shipping, we offer replacements or refunds. Please note that proper care after arrival is essential - we provide detailed care instructions to maximize success rates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, PayPal, and major credit cards. For large wholesale orders, we can arrange escrow services or staged payment schedules to ensure security for both parties."
    },
    {
      question: "Are your plants legally sourced and exported?",
      answer: "Absolutely. All our plants are ethically and legally sourced, either from our own nurseries or from our network of trusted local growers. We maintain all necessary permits for plant export from Indonesia and comply with international regulations including CITES where applicable."
    },
    {
      question: "Do you offer custom sourcing for specific varieties?",
      answer: "Yes, we provide custom sourcing services for collectors seeking specific varieties or characteristics. Our team has extensive connections throughout Indonesia and can locate rare specimens. Custom sourcing typically requires 1-3 months depending on the rarity."
    },
    {
      question: "How do you handle import regulations for different countries?",
      answer: "We stay updated on import regulations for all major markets and provide country-specific guidance to our customers. Before processing any order, we confirm that the selected plants are permitted for import to your country and advise on any special requirements."
    }
  ];

  return (
    <SingleLayout section="faq">
      <div className="container-custom mx-auto py-12">
        <SectionTitle
          subtitle="QUESTIONS & ANSWERS"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our bonsai plants, export processes, shipping methods, and more. If you don't see your question answered here, please contact our team."
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-bonsai-beige/10 text-left font-medium text-bonsai-dark-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-bonsai-beige/20 rounded-lg border border-bonsai-beige">
            <h3 className="text-xl font-playfair font-bold text-bonsai-dark-green mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to assist with any specific inquiries you might have about our plants, 
              services, or export processes. We're here to make your bonsai acquisition as smooth as possible.
            </p>
            <Link to="/contact" className="inline-flex items-center px-5 py-2.5 bg-bonsai-olive text-white rounded-md hover:bg-bonsai-dark-green transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </SingleLayout>
  );
};

export default FAQPage;
