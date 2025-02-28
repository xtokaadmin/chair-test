import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  logo?: string;
  navItems?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  logo = "Chair",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Commercial", href: "/commercial" },
    { label: "Private", href: "/private" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full h-20 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-red-600">{logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Book a Flight
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
              Book a Flight
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
