import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Battery Phi Long Landing Page
 * 
 * Design Philosophy: Modern Emergency Service Landing Page
 * - High-contrast color scheme (Dark Blue #003366 + Orange #FF8C00)
 * - Professional typography with Playfair Display for headings and Poppins for body
 * - Clear visual hierarchy and call-to-action elements
 * - Responsive design optimized for mobile and desktop
 * - Trust-building through testimonials and social proof
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
