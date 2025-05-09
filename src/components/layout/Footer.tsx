
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-700 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://thepskgroup.com/wp-content/uploads/2022/09/PSK-Group-Favicon-e1722336026629-300x138.png" 
                alt="PSK Group Logo" 
                className="h-8"
              />
              <span
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(0,51,102,0.80)',
                  padding: '1px 1px 1px 1px',
                  borderRadius: '4px',
                  boxShadow: '0 1px 8px rgba(0,0,0,0.10)'
                }}
              >PSKTMT</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Premium TMT Bars for a Stronger Future. Building Tomorrow's Foundations with Quality Steel.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/pskbuildingsolutionss/" aria-label="Facebook" className="hover:text-psktmt-500 transition-colors">
                <Facebook size={20} />
              </a>
            
              <a href="https://www.instagram.com/thepskgroup/" aria-label="Instagram" className="hover:text-psktmt-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/thepskgroup/" aria-label="LinkedIn" className="hover:text-psktmt-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Price List
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-psktmt-500 shrink-0 mt-1" size={18} />
                <span className="text-neutral-300">
                2nd Floor, Bizness Square, Jubilee Enclave,
                HITEC City, Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="text-psktmt-500" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+919133383303" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                    +91 91333 83303
                  </a>
                  <a href="tel:+919133383358" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                    +91 91333 83358
                  </a>
                </div>
              </li>
                
              <li className="flex items-center gap-3">
                <Mail className="text-psktmt-500" size={18} />
                <a href="mailto:info@psktmt.com" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  connect@thepskgroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations & Approvals */}
          <div className="flex flex-col items-center lg:items-end justify-center">
            <img
              src="/lovable-uploads/8165cf31-29a9-4ccb-bd99-8c22ee3678ba.png"
              alt="Accreditations and Approvals"
              className="w-full max-w-xs md:max-w-sm mb-2"
              style={{ background: "white", borderRadius: 8, boxShadow: "0 1px 10px rgba(0,0,0,0.06)" }}
            />
          </div>
        </div>

        <div className="border-t border-neutral-600 pt-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-neutral-400">
            <p>© {currentYear} PSKTMT - A PSK Group Venture. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
