import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Sticky Header
 * - Professional navigation with brand colors
 * - Quick access to phone number
 * - Responsive mobile menu
 * - Subtle shadow for depth
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Dịch Vụ", href: "#services" },
    { label: "Đánh Giá", href: "#testimonials" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#E67E00] flex items-center justify-center">
            <span className="text-white font-bold text-lg">⚡</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-[#003366] text-lg">Battery Phi Long</h1>
            <p className="text-xs text-[#FF8C00] font-semibold">Cứu Hộ 24/7</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-[#FF8C00] transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg gap-2"
          >
            <Phone className="w-4 h-4" />
            0984 727 274
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#003366]" />
            ) : (
              <Menu className="w-6 h-6 text-[#003366]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container max-w-6xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-[#FF8C00] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg gap-2 mt-4">
              <Phone className="w-4 h-4" />
              Gọi Ngay
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
