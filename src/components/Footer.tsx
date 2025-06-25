
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-poppins font-bold text-xl">Learnly</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering learners worldwide with high-quality courses and expert instruction.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Development</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Design</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Business</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Marketing</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Help Center</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Terms of Service</span></li>
              <li><span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Community</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Learnly. All rights reserved. Made with ❤️ for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
