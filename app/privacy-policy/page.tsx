import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/landing/LegalLayout";
import { 
  UserCheck, 
  Cookie, 
  BellRing, 
  Lock, 
  Scale, 
  Database,
  Eye,
  FileCheck2,
  Trash2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | RBC24 - Healthcare Recruitment & Hiring Platform",
  description: "Learn how RBC24 protects your personal information, resumes, and medical licensing credentials. Transparent privacy policies governed under the laws of India.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  const sections: LegalSection[] = [
    {
      id: "scope-and-introduction",
      title: "Scope and Introduction",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to RBC24. We are committed to safeguarding the privacy and digital security of our users. This Privacy Policy governs the manner in which RBC24 collects, processes, stores, and discloses information collected from healthcare professionals (including doctors, nurses, allied health staff, and technicians) and authorized recruiters or healthcare organizations utilizing the RBC24 platform.
          </p>
          <p>
            This policy applies strictly to the website (rbc24.com), our mobile applications, and all recruitment technologies, clinical career matching tools, and verification services offered by RBC24. By accessing our platform, you acknowledge and agree to the data practice guidelines detailed in this document.
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            To effectively connect qualified clinical talent with verified medical facilities, RBC24 collects personal identification and professional credential information. This information is collected when you register, upload a resume, complete your profile, or verify your license.
          </p>
          <h3 className="text-base font-bold text-slate-900 mt-4">1. Candidate Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact details:</strong> Full name, primary email address, active mobile number, and current residential address.</li>
            <li><strong>Professional credentials:</strong> Medical degrees (MBBS, MD, MS, BSc Nursing, etc.), active registration numbers from the Medical Council of India (MCI), National Medical Commission (NMC), State Medical Councils, or Indian Nursing Council.</li>
            <li><strong>Employment & History:</strong> Comprehensive CV/resume details, professional experience logs, current clinical designations, specializations (e.g., Cardiology, Critical Care), current hospital affiliations, and salary requirements.</li>
          </ul>
          <h3 className="text-base font-bold text-slate-900 mt-4">2. Recruiter & Hospital Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Organizational details:</strong> Hospital or clinic name, registration records, license details, and official corporate address.</li>
            <li><strong>Representative details:</strong> Name, official work email address, telephone extension, and authorization letter of the HR or medical director managing recruitment accounts.</li>
          </ul>
        </div>
      )
    },
    {
      id: "cookies-and-tracking",
      title: "Web Browser Cookies & Tracking",
      icon: <Cookie className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            RBC24 utilizes standard web cookies, persistent identifiers, and session tokens to enhance platform user experience, maintain secure active logins, and track career preference filters. 
          </p>
          <p>
            Our cookies help us store your search settings (such as preferred healthcare domains and cities), speed up login times by remembering your session, and analyze aggregated traffic data to optimize landing page speeds.
          </p>
          <p>
            You have the right to set your browser to reject cookies or warn you before accepting them. However, please note that turning off cookies may disable certain vital interactive functionalities of our hiring system, such as active application tracking and instant recruiter chat capabilities.
          </p>
        </div>
      )
    },
    {
      id: "how-we-use-information",
      title: "How We Use Collected Information",
      icon: <FileCheck2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            RBC24 collects and processes your personal data strictly to support clinical recruitment workflows. We do not sell or rent candidate lists to third-party marketing companies. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Facilitating Matches:</strong> Matching healthcare candidates based on specialty, experience level, and council certifications with open requirements posted by verified recruiters.</li>
            <li><strong>Ecosystem Trust Verification:</strong> Auditing and verifying medical licenses, degrees, and registrations with respective state authorities to protect hospitals from credential fraud.</li>
            <li><strong>Customer Service & Inquiries:</strong> Answering query tickets, providing feedback on application status, and assisting hospitals with recruiter dashboard tutorials.</li>
            <li><strong>Continuous Platform Improvement:</strong> Evaluating system usage logs, user feedback, and navigation maps to simplify the job application steps and improve search matching algorithms.</li>
          </ul>
        </div>
      )
    },
    {
      id: "data-retention-and-deletion",
      title: "Data Retention & Deletion",
      icon: <Trash2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We retain user profile data, including clinical credentials, resume documents, and account configuration details, only as long as necessary to provide recruitment services and maintain active matches, or as required by governing legal compliance standards in India.
          </p>
          <h3 className="text-base font-bold text-slate-900 mt-4">Account Deletion & Data Rights</h3>
          <p>
            Every user has a absolute right to request the complete deletion of their account and personal details from our records. If you wish to delete your account:
          </p>
          <ol className="list-ol pl-6 space-y-2 list-decimal">
            <li>Send a direct deletion request email from your registered account to <a href="mailto:cv.rbc24@gmail.com" className="text-orange-600 font-semibold hover:underline">cv.rbc24@gmail.com</a>.</li>
            <li>Specify "Account Deletion Request - [Your Full Name]" in the subject line.</li>
            <li>Upon validation, our team will purge all professional credentials, uploaded CVs, and contact info from our servers within 14 business days. A confirmation email will be sent upon completion.</li>
          </ol>
        </div>
      )
    },
    {
      id: "communication-consent",
      title: "Communication Consent & Alerts",
      icon: <BellRing className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            RBC24 operates as a fast-paced recruitment network where instant job notification is key to career advancement. By registering on our platform as a healthcare candidate or recruiter, you grant express consent to receive official communications from RBC24, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Job Alerts:</strong> Regular email and SMS recommendations matching your medical specialty or location.</li>
            <li><strong>Recruitment Updates:</strong> Real-time WhatsApp or SMS alerts notifying you of scheduled interviews, recruiter shortlist decisions, and contract offers.</li>
            <li><strong>Verification Notifications:</strong> Status messages regarding NMC/State council credential checks.</li>
          </ul>
          <p>
            You can manage your notification preferences or opt-out of promotional alerts anytime inside your account dashboard, or by utilizing the unsubscribing links enclosed within our email digests.
          </p>
        </div>
      )
    },
    {
      id: "how-we-protect-data",
      title: "How We Protect Your Information",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We employ modern, multi-layered data protection frameworks to prevent unauthorized access, alteration, disclosure, or destruction of your medical credentials, resumes, passwords, and transaction details.
          </p>
          <p>
            All sensitive credentials, licensing documents, and personal details exchanged between candidates/recruiters and the platform occur over high-grade, SSL-secured communication channels, fully encrypted using industry-standard protocols.
          </p>
          <p>
            Our cloud databases feature automated secure backups, continuous scanning for security vulnerabilities, and restricted internal access policies. Only vetted RBC24 verification compliance officers have access to raw license documentation for auditing purposes.
          </p>
        </div>
      )
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            To deliver frictionless cloud infrastructure, notification routing, and analytics, RBC24 partners with reputable third-party service providers.
          </p>
          <p>
            These partners include cloud server hosts (such as AWS), payment gateway integrators (for subscription plans), transactional SMS and WhatsApp routing APIs, and usage tracking platforms (like Google Analytics). 
          </p>
          <p>
            These third-party platforms are only allowed to access and use your information to perform specialized tasks on our behalf. They are bound by strict NDA agreements and are legally prohibited from utilizing your personal data for their own independent marketing campaigns.
          </p>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law & Regulations",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy is drafted and governed strictly in accordance with the Information Technology Act, 2000 of India, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable data security guidelines in the Indian territory.
          </p>
          <p>
            Any disputes, claims, or regulatory queries arising out of the terms of this policy shall be referred exclusively to the competent courts located in Hyderabad, Telangana, India.
          </p>
        </div>
      )
    }
  ];

  return (
    <LegalLayout
      title="Privacy & Trust at RBC24"
      subtitle="Your data security, medical credential protection, and professional confidentiality matter to us."
      lastUpdated="May 2026"
      sections={sections}
    />
  );
}
