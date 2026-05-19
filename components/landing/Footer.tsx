import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);


const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* 1. Platform */}
          <div>
            <h4 className="text-white/60 hover:text-primary transition-smooth cursor-pointer font-black mb-6 uppercase tracking-widest text-[10px]">Platform</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#job-seekers" className="hover:text-primary transition-smooth">For Job Seekers</a></li>
              <li><a href="#recruiters" className="hover:text-primary transition-smooth">For Recruiters</a></li>
              <li><a href="#mobile-app" className="hover:text-primary transition-smooth">Mobile App</a></li>
              <li><a href="#specialties" className="hover:text-primary transition-smooth">Specialties</a></li>
            </ul>
          </div>

          {/* 2. Support */}
          <div>
            <h4 className="text-white/60 hover:text-primary transition-smooth cursor-pointer font-black mb-6 uppercase tracking-widest text-[10px]">Support</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h4 className="text-white/60 hover:text-primary transition-smooth cursor-pointer font-black mb-6 uppercase tracking-widest text-[10px]">Contact Us</h4>
            <ul className="space-y-4 text-base">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>cv.rbc24@gmail.com</span>
              </li>
              {/* <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 (800) 123-4567</span>
              </li> */}
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>HSR Layout, Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* 4. Logo & Matter */}
          <div className="flex flex-col items-center text-left lg:col-span-1">
            <a href="/" className="relative h-25 w-60 block mb-4">
              <Image
                src="/logo.jpeg"
                alt="RBC24 Logo"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 192px, 192px"
                priority
              />
            </a>
            <p className="text-base leading-relaxed mb-8 max-w-xs text-muted-foreground">
              India's healthcare hiring ecosystem connecting medical professionals with trusted organizations.
            </p>
            <div className="flex gap-4 justify-start">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><TwitterIcon className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
           <p>© {new Date().getFullYear()} RBC24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}