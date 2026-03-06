import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Hizmetler", path: "/hizmetler" },
  { label: "Blog", path: "/blog" },
  { label: "SSS", path: "/sss" },
  { label: "İletişim", path: "/iletisim" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-gold" />
            <div>
              <span className="text-xl font-heading font-bold text-primary-foreground">
                YILMAZ
              </span>
              <span className="block text-xs text-gold tracking-[0.3em] uppercase">
                Hukuk Bürosu
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+902121234567" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold text-sm transition-colors">
              <Phone className="h-4 w-4" />
              (0212) 123 45 67
            </a>
            <Link to="/iletisim">
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-6">
                Randevu Al
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-gold/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors py-2 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/iletisim" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold mt-4">
                Randevu Al
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
