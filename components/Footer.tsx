import { 
      Mail,
      MapPin,
       Phone
       } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff6b00] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">
                RBC<span className="text-[#ff6b00]">24</span>
              </span>
            </div>
            <p className="body-muted max-w-sm text-sm">
              The unified hiring platform connecting elite medical professionals with top healthcare organizations worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors shadow-sm">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors shadow-sm">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors shadow-sm">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-4">
              <li><a href="https://jobs.rbc24.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Find Medical Jobs</a></li>
              <li><a href="https://recruiter.rbc24.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Hire Healthcare Talent</a></li>
              <li><a href="#features" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Platform Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 tracking-tight">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Career Advice</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Hiring Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#ff6b00] transition-colors text-sm font-medium">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Mail size={18} className="text-gray-400 mt-0.5" />
                <span>cv.rbc@gmail.com</span>
              </li>
              
        
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <span>123 Medical Drive, Suite 100<br />Healthcare City, HC 12345</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} RBC24 Gateway. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
