
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
          <Route path="/blog" element={<ListLayout section="blog"><BlogPage /></ListLayout>} />
          <Route path="/blog/:slug" element={<SingleLayout section="blog"><BlogPostPage /></SingleLayout>} />
          
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
          <Route path="/partners" element={<SingleLayout section="partners"><PartnersPage /></SingleLayout>} />
          <Route path="/press" element={<SingleLayout section="press"><PressPage /></SingleLayout>} />
          <Route path="/contact" element={<SingleLayout section="contact"><SinglePage slug="contact" /></SingleLayout>} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<SingleLayout section="legal"><SinglePage slug="privacy-policy" /></SingleLayout>} />
          <Route path="/terms-of-service" element={<SingleLayout section="legal"><SinglePage slug="terms-of-service" /></SingleLayout>} />
          <Route path="/cookie-policy" element={<SingleLayout section="legal"><SinglePage slug="cookie-policy" /></SingleLayout>} />
          <Route path="/accessibility" element={<SingleLayout section="legal"><SinglePage slug="accessibility" /></SingleLayout>} />
          <Route path="/return-policy" element={<SingleLayout section="legal"><SinglePage slug="return-policy" /></SingleLayout>} />
          
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
