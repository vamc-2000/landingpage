import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/landing/LegalLayout";
import { 
  FileText, 
  HelpCircle, 
  ShieldCheck, 
  AlertOctagon, 
  Coins, 
  Terminal, 
  Ban, 
  Scale, 
  FolderLock 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | RBC24 - Healthcare Hiring Portal",
  description: "Read the RBC24 Terms and Conditions of service. Transparent platform guidelines for clinical candidates and medical recruiters governed under Indian law.",
  robots: "index, follow",
};

export default function TermsAndConditionsPage() {
  const sections: LegalSection[] = [
    {
      id: "agreement-and-introduction",
      title: "Agreement to Terms & Introduction",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to RBC24. These Terms and Conditions (referred to as the "User Agreement") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("You"), and RBC24, concerning your access to and use of the rbc24.com website, mobile applications, and matching services.
          </p>
          <p>
            By registering, logging in, or otherwise accessing our platform, you acknowledge that you have read, understood, and agree to be bound by all of these terms of service, along with our Privacy Policy.
          </p>
          <p className="font-bold text-slate-900">
            If you do not agree with all of these terms, you are expressly prohibited from using the platform, and you must discontinue use immediately.
          </p>
        </div>
      )
    },
    {
      id: "platform-nature-and-intermediary",
      title: "Platform Nature & Intermediary Disclaimer",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            RBC24 acts exclusively as a hiring/intermediary marketplace connecting medical professionals (candidates) with healthcare organizations, hospitals, and clinics (recruiters).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Not an Employer:</strong> RBC24 is not an employer, clinical contracting agency, or employment agent. All hiring contracts, salary models, and labor terms are decided strictly between the recruiter and the candidate.</li>
            <li><strong>No Placement Guarantees:</strong> We do not guarantee candidates will find relevant employment, nor do we guarantee recruiters will successfully fill open clinical quotas.</li>
            <li><strong>Intermediary Status:</strong> In accordance with the Indian Information Technology Act, 2000, RBC24 acts solely as an intermediary. We host user-generated profiles and job descriptions in good faith, and are not responsible for direct interactions or subsequent employment outcomes.</li>
          </ul>
        </div>
      )
    },
    {
      id: "responsible-use",
      title: "Responsible Use & Account Conduct",
      icon: <FolderLock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            To maintain safety and trust in healthcare hiring, you agree to access our platform resources responsibly.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Security:</strong> You are responsible for maintaining the strict confidentiality of your login passwords. You agree to notify us immediately of any unauthorized access to your recruiter or candidate dashboard.</li>
            <li><strong>Prohibition of Automation:</strong> Accessing (or attempting to access) any of our databases, job listings, or candidate resumes through automated tools, scrapers, bots, or browser scripts is strictly prohibited.</li>
            <li><strong>Platform Security:</strong> Engaging in any activity that disrupts our platform servers, networks, or connected databases, or attempting to reverse-engineer our proprietary matching matching software, is highly illegal and will lead to prosecution.</li>
          </ul>
        </div>
      )
    },
    {
      id: "credential-verification",
      title: "Credential Verification Notice & Vetting",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Because healthcare delivery deals directly with patient lives, the absolute accuracy of clinical credentials is crucial.
          </p>
          <div className="bg-orange-50 border border-orange-200/50 rounded-2xl p-5 space-y-3">
            <h4 className="text-sm font-extrabold text-orange-950 uppercase tracking-wider">
              Verification Compliance Framework
            </h4>
            <p className="text-sm text-orange-900 leading-relaxed font-semibold">
              1. Candidates are entirely responsible for submitting valid certifications, degrees, and active Medical/Nursing Council registrations.
            </p>
            <p className="text-sm text-orange-900 leading-relaxed font-semibold">
              2. RBC24 reserves the right (but is not legally obligated) to audit profiles and verify licenses directly with NMC, MCI, Indian Nursing Councils, or State authorities.
            </p>
            <p className="text-sm text-orange-900 leading-relaxed font-semibold">
              3. Submission of fraudulent, doctored, or expired clinical certifications will lead to immediate profile suspension, permanent ecosystem blacklisting, and reporting to relevant legal authorities.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: <Terminal className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Unless otherwise indicated, rbc24.com and its matching algorithms, database structures, source code, graphic designs, custom iconography, software codes, and trademarks are the exclusive proprietary property of RBC24.
          </p>
          <p>
            These proprietary elements are protected under the Copyright Act, 1957, and Trademark Act, 1999 of India, and other international intellectual property rights.
          </p>
          <p>
            You are granted a limited license to access and browse the website strictly to look for employment or recruit clinical staff. Any unauthorized copying, distribution, downloading, selling, or duplicating of our platform assets is strictly prohibited.
          </p>
        </div>
      )
    },
    {
      id: "limitation-of-warranties",
      title: "Limitation of Warranties",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            By utilizing RBC24, you understand and agree that all services, databases, matches, and layouts are provided on an "as is" and "as available" basis.
          </p>
          <p>
            RBC24 expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a clinical hiring standard, non-infringement, or accuracy of third-party user profiles.
          </p>
          <p>
            We do not warrant that our servers will operate completely error-free, that job feeds will be uninterrupted, or that our licensing vetting processes are 100% infallible.
          </p>
        </div>
      )
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: <AlertOctagon className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            In conjunction with the limitation of warranties, you understand and agree that RBC24, its directors, and employees will not be held liable for any direct, indirect, incidental, consequential, special, or exemplary damages.
          </p>
          <p>
            This includes, but is not limited to, losses resulting from platform downtime, candidate credential fraud, clinical performance failures of hired staff, loss of clinical data, or disputes between recruiters and candidates.
          </p>
          <p>
            RBC24's total liability for any claim arising out of these terms or platform usage shall be strictly limited to the actual subscription or service fee paid by you to RBC24 during the 12-month period preceding the claim.
          </p>
        </div>
      )
    },
    {
      id: "cancellation-and-refund",
      title: "Cancellation & Refund Policy",
      icon: <Coins className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Recruiters purchasing premium matching packages, job listing slot bundles, or subscription plans agree to the following financial terms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Non-Refundable:</strong> All transaction fees, slots payments, and recruiter dashboard subscription charges are strictly non-refundable once the digital features are credited to your account.</li>
            <li><strong>Exceptions:</strong> Refunds will only be evaluated under extreme cases of platform technical failure where a purchased service could not be provisioned for more than 7 consecutive business days.</li>
            <li><strong>Billing Queries:</strong> Any queries regarding double billing or payment gateway failures should be sent to <a href="mailto:cv.rbc24@gmail.com" className="text-orange-600 font-semibold hover:underline">cv.rbc24@gmail.com</a>.</li>
          </ul>
        </div>
      )
    },
    {
      id: "termination-of-use",
      title: "Termination of Service",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We reserve the right, at our sole discretion, to suspend, throttle, or permanently terminate your access to the RBC24 platform (including removing active resumes, profiles, and job listings) without notice, in the event of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any breach of this User Agreement or associated Privacy policies.</li>
            <li>Submission of falsified certificates, fake registration numbers, or deceptive medical council records.</li>
            <li>Spamming clinical candidates or using candidate data for external solicitations.</li>
            <li>Engaging in harassment or abusive behavior towards other community members or our customer support specialists.</li>
          </ul>
        </div>
      )
    },
    {
      id: "governing-law-and-jurisdiction",
      title: "Governing Law & Jurisdiction",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            This platform is owned and controlled by RBC24 from offices located in the city of Hyderabad, State of Telangana, India.
          </p>
          <p>
            By accessing rbc24.com and our mobile tools, you agree that the local laws and statutes of the State of Telangana and governing federal laws of India shall apply to all matters relating to your platform usage, without regard to conflict of law principles.
          </p>
          <p>
            Furthermore, any legal action to enforce this User Agreement, or resolve disputes under these terms, shall be filed exclusively in state or federal courts located in Hyderabad, Telangana, India. You hereby waive any jurisdictional or inconvenient forum objections.
          </p>
        </div>
      )
    }
  ];

  return (
    <LegalLayout
      title="Terms Keep RBC24 Safe & Fair"
      subtitle="Transparent rules of service governing healthcare professionals and trusted medical recruiters."
      lastUpdated="May 2026"
      sections={sections}
    />
  );
}
