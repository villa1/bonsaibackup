
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "./components/cookie/CookieConsent";

// Layout components
import DefaultLayout from "./layouts/DefaultLayout";
import SingleLayout from "./layouts/SingleLayout";
import ListLayout from "./layouts/ListLayout";

// Page components
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import SitemapPage from "./pages/SitemapPage";
import XmlSitemapPage from "./pages/XmlSitemapPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ReviewsPage from "./pages/ReviewsPage";
import InstructionsPage from "./pages/InstructionsPage";
import AboutPage from "./pages/AboutPage";
import ExportProcessPage from "./pages/ExportProcessPage";
import FAQPage from "./pages/FAQPage";
import PartnersPage from "./pages/PartnersPage";
import PressPage from "./pages/PressPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";

// Create query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Content Section List Pages */}
          <Route path="/services" element={<ListLayout section="services"><ListPage section="services" /></ListLayout>} />
          <Route path="/services-catalog" element={<ListLayout section="services-catalog"><ListPage section="services-catalog" /></ListLayout>} />
          
          {/* Content Single Pages */}
          <Route path="/about" element={<SingleLayout section="about"><AboutPage /></SingleLayout>} />
          <Route path="/export-process" element={<SingleLayout section="export-process"><ExportProcessPage /></SingleLayout>} />
          <Route path="/sustainability" element={<SingleLayout section="sustainability"><SustainabilityPage /></SingleLayout>} />
          <Route path="/faq" element={<SingleLayout section="faq"><FAQPage /></SingleLayout>} />
          <Route path="/testimonials" element={<DefaultLayout><TestimonialsPage /></DefaultLayout>} />
          <Route path="/reviews" element={<DefaultLayout><ReviewsPage /></DefaultLayout>} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/press" element={<SingleLayout section="press"><PressPage /></SingleLayout>} />
          <Route path="/contact" element={<SingleLayout section="contact"><SinglePage slug="contact" /></SingleLayout>} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          
          {/* Sitemap */}
          <Route path="/sitemap" element={<SingleLayout section="sitemap"><SitemapPage /></SingleLayout>} />
          <Route path="/sitemap.xml" element={<XmlSitemapPage />} />
          
          {/* Admin Instructions */}
          <Route path="/admin-instructions" element={<DefaultLayout><InstructionsPage /></DefaultLayout>} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
