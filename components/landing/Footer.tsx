import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-3xl font-display font-black text-white mb-6 block">
              RBC24
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Transforming healthcare recruitment in India through technology, verification, and specialized matching.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><TwitterIcon className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-smooth hover:text-white"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#job-seekers" className="hover:text-primary transition-smooth">For Job Seekers</Link></li>
              <li><Link href="#recruiters" className="hover:text-primary transition-smooth">For Recruiters</Link></li>
              <li><Link href="#mobile-app" className="hover:text-primary transition-smooth">Mobile App</Link></li>
              <li><Link href="#specialties" className="hover:text-primary transition-smooth">Specialties</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary transition-smooth">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@rbc24.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 (800) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>HSR Layout, Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>© {new Date().getFullYear()} RBC24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
