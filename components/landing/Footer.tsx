import Image from "next/image";
import Link from "next/link";
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
    <footer className="bg-[#0B0F19] text-slate-300 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Soft Ambient Background Highlight */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 1. Platform */}
          <div>
            <h4 className="text-slate-100 font-black mb-6 uppercase tracking-widest text-[11px] hover:text-primary transition-colors duration-200 cursor-pointer">
              Platform
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li><a href="#job-seekers" className="text-slate-300 hover:text-primary transition-colors duration-200">For Job Seekers</a></li>
              <li><a href="#recruiters" className="text-slate-300 hover:text-primary transition-colors duration-200">For Recruiters</a></li>
              <li><a href="#mobile-app" className="text-slate-300 hover:text-primary transition-colors duration-200">Mobile App</a></li>
              <li><a href="#specialties" className="text-slate-300 hover:text-primary transition-colors duration-200">Specialties</a></li>
            </ul>
          </div>

          {/* 2. Support */}
          <div>
            <h4 className="text-slate-100 font-black mb-6 uppercase tracking-widest text-[11px] hover:text-primary transition-colors duration-200 cursor-pointer">
              Support
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/privacy-policy" className="text-slate-300 hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-slate-300 hover:text-primary transition-colors duration-200">Terms & Conditions</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h4 className="text-slate-100 font-black mb-6 uppercase tracking-widest text-[11px] hover:text-primary transition-colors duration-200 cursor-pointer">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                <span className="text-slate-300">cv.rbc24@gmail.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-300 leading-relaxed text-sm">
                  <strong>RBC24</strong><br />
                  1-1-199, Budvel Village,<br />
                  Rajendranagar,<br />
                  Hyderabad – 500030,<br />
                  Telangana, India
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Logo & Matter */}
          <div className="flex flex-col items-start text-left lg:col-span-1">
            <a href="/" className="relative h-20 w-20 block mb-6 rounded-full overflow-hidden border border-slate-800 bg-white hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.jpeg"
                alt="RBC24 Logo"
                fill
                className="object-cover"
                sizes="64px"
                priority
              />
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-slate-400">
              India's healthcare hiring ecosystem connecting medical professionals with trusted organizations.
            </p>
            <div className="flex gap-3 justify-start">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-200 text-slate-300 hover:text-white"><FacebookIcon className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-200 text-slate-300 hover:text-white"><TwitterIcon className="w-4 h-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-200 text-slate-300 hover:text-white"><InstagramIcon className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} RBC24. All rights reserved.</p>
          <p className="text-slate-600 font-medium">Empowering India's clinical workforce</p>
        </div>
      </div>
    </footer>
  );
}