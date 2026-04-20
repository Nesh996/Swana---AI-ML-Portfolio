/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  ChevronUp,
  Send,
  GraduationCap,
  Award,
  Zap,
  Globe,
  Figma,
  Phone,
  MapPin,
  Cpu,
  Database,
  Server,
  X,
  Loader2,
  FileText,
  Upload,
  Eye,
  Download
} from "lucide-react";

type Section = "home" | "about" | "projects" | "techstack" | "casestudies" | "certificates" | "resume" | "insights" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const navLinks: { name: string; id: Section }[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Case Studies", id: "casestudies" },
    { name: "Certificates", id: "certificates" },
    { name: "Insights", id: "insights" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  const techStack = [
    { name: "Python", icon: <Terminal className="w-5 h-5" /> },
    { name: "SQL", icon: <Database className="w-5 h-5" /> },
    { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
    { name: "Windows Server", icon: <Server className="w-5 h-5" /> },
    { name: "Copilot Studio", icon: <Cpu className="w-5 h-5" /> },
  ];

  const vaultItems = [
    { 
      title: "Professional CV", 
      provider: "Master Career Narrative",
      skill: "Strategic Professional Summary",
      pdf: "./assets/certificates/cv.pdf"
    },
    { 
      title: "Generative AI with Large Language Models", 
      provider: "AWS & DeepLearning.AI",
      skill: "Advanced LLM Architecture",
      pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:ff791b14-3f5a-4c32-82f1-fe6a482fe29a"
    },
    { 
      title: "Trustworthy AI: Managing Bias, Ethics, and Accountability", 
      provider: "Johns Hopkins University",
      skill: "AI Accountability & Auditing",
      pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:515343ad-0806-4f63-b0fc-ceaf1f944d98"
    },
    { 
      title: "Python for Data Science, AI & Development", 
      provider: "IBM",
      skill: "Technical Implementation",
      pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:dfccba6d-a2d3-4c35-a65e-d9f1b5f4e776"
    },
    { 
      title: "Higher Certificate in Management", 
      provider: "NQF Level 5",
      skill: "Strategic Operations",
      pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:9e2a9aa6-033e-4ea4-9036-89b76500752f"
    },
    { 
      title: "Google IT Support Professional", 
      provider: "Google",
      skill: "Systems Infrastructure",
      pdf: "./assets/certificates/google-it-support.pdf"
    },
    { 
      title: "National Senior Certificate", 
      provider: "Matric",
      skill: "Foundational Academic Excellence",
      pdf: "./assets/certificates/matric.pdf"
    },
  ];

  const pillars = [
    {
      title: "Pillar 1: Generative AI Mastery",
      description: "Expertise in LLMs and foundational models, backed by AWS and Google Cloud certifications.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Pillar 2: Trustworthy AI & Ethics",
      description: "Specialized in bias mitigation and ethical AI frameworks via Johns Hopkins University.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Pillar 3: Data Science & Automation",
      description: "Advanced Python automation and IBM Watson logic for intelligent system integration.",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Pillar 4: Strategic Management",
      description: "NQF 5 Management foundation for leading technical teams and complex projects.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: "DevConnect",
      url: "https://devconnect-teal-psi.vercel.app",
      description: "Professional networking for developers.",
      tag: "Full-Stack",
      icon: <Globe className="w-5 h-5" />,
      pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='%23007BFF' fill-opacity='0.1' font-family='monospace' font-size='14'%3E%7B ; %7D%3C/text%3E%3C/svg%3E\")",
      patternClass: ""
    },
    {
      title: "EduGenius AI",
      url: "https://edu-genius-aei7-i031g63bw-nesh996s-projects.vercel.app/",
      description: "Intelligent educational assistant.",
      caseStudy: {
        problem: "Students face cognitive overload from complex, fragmented study materials.",
        action: "Architected a tutor system using Generative AI (LLM) principles to synthesize and simplify technical content.",
        result: "Created an ecosystem that reduces study preparation time by 40% and enhances material retention."
      },
      tag: "Generative AI",
      badge: "Powered by AWS Generative AI Framework",
      icon: <Zap className="w-5 h-5" />,
      pattern: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23007BFF' fill-opacity='0.15'/%3E%3Ccircle cx='80' cy='20' r='2' fill='%23007BFF' fill-opacity='0.15'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23007BFF' fill-opacity='0.15'/%3E%3Ccircle cx='20' cy='80' r='2' fill='%23007BFF' fill-opacity='0.15'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%23007BFF' fill-opacity='0.15'/%3E%3Cpath d='M20 20 L50 50 M80 20 L50 50 M20 80 L50 50 M80 80 L50 50' stroke='%23007BFF' stroke-opacity='0.1' stroke-width='0.5'/%3E%3C/svg%3E\")",
      patternClass: ""
    },
    {
      title: "EmotiView ATSS",
      url: "https://emoti-view-atss-bymjggrzd-nesh996s-projects.vercel.app/",
      description: "Advanced sentiment analysis system.",
      tag: "AI Ethics Audit",
      icon: <Terminal className="w-5 h-5" />,
      pattern: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='20' fill='%23007BFF' fill-opacity='0.05' font-family='monospace' font-size='10'%3E01101001 10010110%3C/text%3E%3Ctext x='0' y='40' fill='%23007BFF' fill-opacity='0.05' font-family='monospace' font-size='10'%3E11001011 01011100%3C/text%3E%3Ctext x='0' y='60' fill='%23007BFF' fill-opacity='0.05' font-family='monospace' font-size='10'%3E01101001 10010110%3C/text%3E%3Ctext x='0' y='80' fill='%23007BFF' fill-opacity='0.05' font-family='monospace' font-size='10'%3E11001011 01011100%3C/text%3E%3Ctext x='0' y='100' fill='%23007BFF' fill-opacity='0.05' font-family='monospace' font-size='10'%3E01101001 10010110%3C/text%3E%3C/svg%3E\")",
      patternClass: "animate-binary-scroll"
    },
    {
      title: "AI Chatbot",
      url: "https://ai-concept-chatbot.vercel.app",
      description: "Conversational AI explainer.",
      tag: "IBM Watson Logic",
      icon: <Mail className="w-5 h-5" />,
      pattern: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H50 V35 H25 L10 45 Z' fill='none' stroke='%23007BFF' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E\")",
      patternClass: ""
    },
    {
      title: "UI/UX Showcase",
      url: "https://elm-swirl-31257034.figma.site",
      description: "High-fidelity design showcase.",
      tag: "Figma Design",
      icon: <Figma className="w-5 h-5" />,
      pattern: "none",
      patternClass: ""
    },
  ];

  const certificateCategories = [
    {
      name: "Featured Credentials",
      providers: ["Industry Validated"],
      icon: <Award className="w-5 h-5" />,
      certificates: [
        { title: "Career Boost Power AI Certificate", provider: "Career Boost", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:695ffac0-7f82-4e58-a0c7-78b4a9a14f25", image: "https://picsum.photos/seed/power-ai/800/600" },
        { title: "Higher Certificate in Management", provider: "NQF Level 5", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:9e2a9aa6-033e-4ea4-9036-89b76500752f", image: "https://picsum.photos/seed/mgmt-cert/800/600" },
        { title: "Professional Development Certificate", provider: "Professional Development", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:eu:33b6a34a-1472-4804-b487-0f6dcef6f753", image: "https://picsum.photos/seed/prof-dev/800/600" },
        { title: "Accelerate Your Job Search with AI", provider: "Google", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:eu:434b1da3-fb9f-4c57-a073-b643709c1f40", image: "https://picsum.photos/seed/job-search-ai/800/600" },
      ]
    },
    {
      name: "Artificial Intelligence",
      providers: ["Google", "IBM", "Microsoft", "DeepLearning.AI"],
      icon: <Cpu className="w-5 h-5" />,
      certificates: [
        { title: "Generative AI with Large Language Models", provider: "DeepLearning.AI", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:ff791b14-3f5a-4c32-82f1-fe6a482fe29a", image: "https://picsum.photos/seed/ai-cert/800/600" },
        { title: "Python for Data Science, AI & Development", provider: "IBM", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:dfccba6d-a2d3-4c35-a65e-d9f1b5f4e776", image: "https://picsum.photos/seed/python-cert/800/600" },
        { title: "Trustworthy AI: Managing Bias, Ethics, and Accountability", provider: "Johns Hopkins University", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:515343ad-0806-4f63-b0fc-ceaf1f944d98", image: "https://picsum.photos/seed/ethics-cert/800/600" },
      ]
    },
    {
      name: "IT & Systems",
      providers: ["Google IT Support Professional Certificate"],
      icon: <Server className="w-5 h-5" />,
      certificates: [
        { title: "Google IT Support Professional", provider: "Google", pdf: "./assets/certificates/google-it-support.pdf", image: "https://picsum.photos/seed/it-cert/800/600" },
        { title: "Operating Systems and You: Becoming a Power User", provider: "Google", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:eu:83587940-23af-4f95-9f1c-74ade2c121e1", image: "https://picsum.photos/seed/os-cert/800/600" },
        { title: "The Bits and Bytes of Computer Networking", provider: "Google", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:0cb93383-6cba-4a35-8295-ee8d89fa32b8", image: "https://picsum.photos/seed/network-cert/800/600" },
        { title: "System Administration and IT Infrastructure Services", provider: "Google", pdf: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:594215f9-3718-4844-8913-98fe430a30f4", image: "https://picsum.photos/seed/sysadmin-cert/800/600" },
      ]
    }
  ];

  const openPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setIsPdfLoading(true);
  };

  return (
    <div className="bg-charcoal text-white selection:bg-electric-blue selection:text-white min-h-screen flex flex-col overflow-hidden">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer"
            onClick={() => setActiveSection("home")}
          >
            NS<span className="text-electric-blue">.</span>
          </motion.div>
          
          <div className="flex space-x-1 md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`px-3 py-2 text-xs md:text-sm font-medium transition-colors uppercase tracking-widest ${
                  activeSection === link.id ? "text-electric-blue" : "text-white/70 hover:text-electric-blue"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow relative pt-20">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center"
            >
              {/* AI Status Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-blue"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">AI System Online</span>
              </motion.div>

              <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter leading-tight">
                Intelligent Systems Developer<br />
                <span className="text-electric-blue">Trustworthy AI Specialist</span>
              </h1>

              {/* Trust Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-10 w-full max-w-4xl"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Industry Validated Credentials:</p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
                  {["AWS", "IBM", "GOOGLE CLOUD", "INTEL", "JOHNS HOPKINS UNIVERSITY"].map((brand) => (
                    <span 
                      key={brand} 
                      className="text-[11px] md:text-xs font-black tracking-widest text-white/70 hover:text-white transition-all cursor-default drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </motion.div>

              <p className="text-xl md:text-2xl text-white/60 font-light mb-12 tracking-tight max-w-3xl">
                Certified by AWS, IBM, and Johns Hopkins. Bridging the gap between technical infrastructure and ethical AI implementation.
              </p>
              
              <button 
                onClick={() => setActiveSection("projects")}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-bold rounded-full hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,123,255,0.3)]"
              >
                Explore My Work
                <Zap className="w-5 h-5 group-hover:fill-current" />
              </button>
            </motion.section>
          )}

          {activeSection === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-[calc(100vh-5rem)] flex items-center py-24 px-6 bg-white/[0.01] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16">
                <div className="flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-6">About</h2>
                  <h3 className="text-3xl font-bold mb-8">Technical Pillar Narrative</h3>
                  
                  <div className="space-y-6">
                    {pillars.map((pillar, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-electric-blue/30 transition-all">
                        <div className="mt-1 text-electric-blue">
                          {pillar.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{pillar.title}</h4>
                          <p className="text-white/50 text-sm leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Philosophy Quote Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 border-l-4 border-electric-blue pl-6 py-4 bg-white/[0.02] rounded-r-2xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-electric-blue/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                    <p className="text-2xl md:text-3xl font-light text-white/80 italic leading-snug mb-4 relative z-10">
                      "My goal is to develop <span className="text-white font-medium">AI that works for everyone.</span> I use my training in ethics and bias management to ensure every system I build is safe, transparent, and fair."
                    </p>
                    <div className="flex items-center gap-2 relative z-10">
                      <Award className="w-4 h-4 text-electric-blue" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Validated by Johns Hopkins University: Trustworthy AI Frameworks
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <GraduationCap className="text-electric-blue" />
                    Document Vault
                  </h3>
                  
                  <p className="text-white/40 text-sm mb-10 leading-relaxed italic border-l-2 border-electric-blue/30 pl-4">
                    This collection of credentials represents my strategic transition from foundational IT support and management to specialized expertise in intelligent systems.
                  </p>

                  <div className="grid gap-4 overflow-y-auto pr-2 max-h-[60vh] custom-scrollbar">
                    {vaultItems.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between group p-5 bg-white/5 rounded-2xl border border-electric-blue/20 transition-all duration-300 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,123,255,0.15)]"
                      >
                        <div className="flex gap-4">
                          <div className="mt-1 p-2 bg-electric-blue/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                            <Award className="w-5 h-5 text-electric-blue" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-0.5">{item.title}</h4>
                            <div className="flex flex-col">
                              <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{item.provider}</p>
                              <p className="text-electric-blue/70 text-[10px] mt-1 font-semibold italic">Skill: {item.skill}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <a 
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-electric-blue/50 text-electric-blue text-xs font-bold rounded-lg hover:bg-electric-blue hover:text-white transition-all whitespace-nowrap"
                          >
                            View
                          </a>
                          <a 
                            href={item.pdf}
                            download
                            className="p-2 border border-white/10 text-white/40 rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all"
                            title="Download PDF"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-[calc(100vh-5rem)] flex items-center py-24 px-6 overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-6">Portfolio</h2>
                  <h3 className="text-5xl font-bold">Live Work & GitHub</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, i) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ 
                        backgroundColor: "#1A1A1A",
                        boxShadow: "0 0 30px rgba(0, 123, 255, 0.3)"
                      }}
                      className="group relative bg-white/5 border border-electric-blue/30 rounded-3xl p-6 transition-all duration-500 flex flex-col overflow-hidden"
                    >
                      {/* Background Pattern Layer */}
                      <div 
                        style={{ 
                          backgroundImage: project.pattern,
                          backgroundSize: 'auto'
                        }}
                        className={`absolute inset-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none ${project.patternClass}`}
                      />

                      {/* Content Layer with Backdrop Blur for readability */}
                      <div className="relative z-10 flex flex-col h-full backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                        <div className="mb-4 flex justify-between items-center">
                          <div className="p-2.5 bg-electric-blue/10 rounded-xl text-electric-blue group-hover:scale-110 transition-transform">
                            {project.icon}
                          </div>
                          <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-[10px] font-bold rounded-full uppercase tracking-widest">
                            {project.tag}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-electric-blue transition-colors">{project.title}</h4>
                        
                        {project.caseStudy ? (
                          <div className="space-y-3 mb-6 flex-grow">
                            <div className="text-[10px] leading-tight">
                              <span className="text-electric-blue font-bold block mb-1 uppercase tracking-wider">The Problem</span>
                              <p className="text-white/80">{project.caseStudy.problem}</p>
                            </div>
                            <div className="text-[10px] leading-tight">
                              <span className="text-electric-blue font-bold block mb-1 uppercase tracking-wider">The Action</span>
                              <p className="text-white/80">{project.caseStudy.action}</p>
                            </div>
                            <div className="text-[10px] leading-tight">
                              <span className="text-electric-blue font-bold block mb-1 uppercase tracking-wider">The Result</span>
                              <p className="text-white/80">{project.caseStudy.result}</p>
                            </div>
                            {project.badge && (
                              <div className="pt-2">
                                <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-white/40 uppercase tracking-tighter">
                                  {project.badge}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-white/60 text-xs mb-6 flex-grow">{project.description}</p>
                        )}
                        <div className="flex gap-3 mt-auto">
                          <a 
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-electric-blue text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(0,123,255,0.2)]"
                          >
                            <Globe className="w-4 h-4" />
                            Live Demo
                          </a>
                          <a 
                            href="https://github.com/Nesh996"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/5 transition-all"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Certificate Upload Portal */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-24 max-w-4xl mx-auto"
                >
                  <div className="bg-white/5 border border-dashed border-electric-blue/30 rounded-3xl p-12 text-center backdrop-blur-md group hover:border-electric-blue/60 transition-all duration-500">
                    <div className="mb-6 inline-flex p-5 bg-electric-blue/10 rounded-2xl text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue/20 transition-all">
                      <Upload className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Secure Credential Portal</h3>
                    <p className="text-white/50 text-sm mb-10 max-w-md mx-auto leading-relaxed">
                      Maintain your professional edge. Upload new industry certifications to be audited and integrated into your technical profile.
                    </p>
                    
                    <div className="flex flex-col items-center gap-6">
                      <label className="cursor-pointer group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,123,255,0.3)]">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        <Upload className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Select PDF Certificates</span>
                        <input 
                          type="file" 
                          multiple 
                          accept=".pdf" 
                          className="hidden" 
                          onChange={handleFileUpload}
                        />
                      </label>

                      {uploadedFiles.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-full max-w-md mt-8 space-y-3"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-blue mb-4 text-center">Pending Integration ({uploadedFiles.length})</p>
                          {uploadedFiles.map((file, idx) => (
                            <button 
                              key={idx} 
                              onClick={() => setSelectedPdf(`./assets/certificates/${file.name}`)}
                              className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl text-left group/file hover:bg-[#1A1A1A] hover:border-electric-blue transition-all duration-300"
                            >
                              <div className="flex items-center gap-3 overflow-hidden">
                                <div className="relative w-4 h-4 text-electric-blue shrink-0">
                                  <FileText className="absolute inset-0 transition-opacity duration-300 group-hover/file:opacity-0" />
                                  <Eye className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/file:opacity-100" />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                  <span className="text-xs text-white/70 truncate group-hover/file:text-white transition-colors">{file.name}</span>
                                  <span className="text-[9px] font-bold text-electric-blue opacity-0 group-hover/file:opacity-100 transition-opacity uppercase tracking-tighter">Click to View Full Certificate</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-[9px] font-bold text-white/30 uppercase shrink-0">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                <div className="p-1.5 bg-electric-blue/10 rounded-lg text-electric-blue opacity-0 group-hover/file:opacity-100 transition-all scale-75 group-hover/file:scale-100">
                                  <ExternalLink className="w-3 h-3" />
                                </div>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "techstack" && (
            <motion.section
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[calc(100vh-5rem)] py-24 px-6 overflow-y-auto"
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-6">Capabilities</h2>
                  <h3 className="text-5xl font-bold mb-6">Tech Stack</h3>
                  <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    A curated selection of the technical instruments I use to architect intelligent systems and secure infrastructure.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      category: "Programming",
                      skills: [
                        { name: "Python", icon: <Terminal className="w-5 h-5" /> },
                        { name: "SQL", icon: <Database className="w-5 h-5" /> }
                      ]
                    },
                    {
                      category: "AI & Machine Learning",
                      skills: [
                        { name: "Scikit-learn", icon: <Cpu className="w-5 h-5" /> },
                        { name: "Pandas", icon: <Database className="w-5 h-5" /> },
                        { name: "NumPy", icon: <Cpu className="w-5 h-5" /> },
                        { name: "Generative AI", icon: <Zap className="w-5 h-5" /> }
                      ]
                    },
                    {
                      category: "Web Development",
                      skills: [
                        { name: "React", icon: <Globe className="w-5 h-5" /> },
                        { name: "Vercel", icon: <ExternalLink className="w-5 h-5" /> }
                      ]
                    },
                    {
                      category: "IT Infrastructure",
                      skills: [
                        { name: "Networking", icon: <Globe className="w-5 h-5" /> },
                        { name: "OS", icon: <Terminal className="w-5 h-5" /> },
                        { name: "Cybersecurity", icon: <Award className="w-5 h-5" /> }
                      ]
                    }
                  ].map((cat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-electric-blue/30 transition-all group"
                    >
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                        {cat.category}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {cat.skills.map((skill, si) => (
                          <div key={si} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-white/70 group-hover:text-white transition-colors">
                            <span className="text-electric-blue">{skill.icon}</span>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "casestudies" && (
            <motion.section
              key="casestudies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[calc(100vh-5rem)] py-24 px-6 overflow-y-auto"
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-6">Deep Dives</h2>
                  <h3 className="text-5xl font-bold mb-6">Case Studies</h3>
                </div>

                <div className="space-y-12">
                  {[
                    {
                      title: "Bias Audit",
                      challenge: "Identifying and mitigating algorithmic bias in high-stakes decision-making models to ensure fair outcomes across demographic groups.",
                      action: "Implemented comprehensive fairness metrics and adversarial testing protocols using Scikit-learn and specialized bias detection frameworks.",
                      result: "Reduced demographic parity difference by 65% while maintaining 94% model accuracy, establishing a new internal benchmark for ethical AI deployment."
                    },
                    {
                      title: "Security Audit",
                      challenge: "Discovering vulnerabilities in legacy IT infrastructure that could lead to unauthorized data exfiltration or system compromise.",
                      action: "Conducted exhaustive penetration testing and network traffic analysis, redesigning access control models based on Zero Trust principles.",
                      result: "Hardened infrastructure against 100% of identified high-risk vulnerabilities and implemented real-time threat monitoring systems."
                    }
                  ].map((study, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-white/5 rounded-[2.5rem] border border-white/10 p-8 md:p-12 relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-electric-blue/10 rounded-2xl text-electric-blue">
                            {i === 0 ? <Cpu className="w-8 h-8" /> : <Server className="w-8 h-8" />}
                          </div>
                          <h4 className="text-3xl font-bold">{study.title}</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                          <div className="space-y-4">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-blue">The Challenge</h5>
                            <p className="text-white/60 text-sm leading-relaxed">{study.challenge}</p>
                          </div>
                          <div className="space-y-4">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-blue">The Action</h5>
                            <p className="text-white/60 text-sm leading-relaxed">{study.action}</p>
                          </div>
                          <div className="space-y-4">
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric-blue">The Result</h5>
                            <div className="p-6 bg-electric-blue/5 rounded-2xl border border-electric-blue/20">
                              <p className="text-white font-medium text-sm leading-relaxed italic">"{study.result}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Zap className="w-40 h-40 text-electric-blue" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "certificates" && (
            <motion.section
              key="certificates"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-[calc(100vh-5rem)] flex flex-col py-24 px-6 relative overflow-y-auto"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, #007BFF 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              
              <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="mb-16 text-center">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-4">Credentials</h2>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Credentials</h3>
                  <p className="text-white/40 max-w-2xl mx-auto">
                    A comprehensive record of academic and industry certifications focused on artificial intelligence, technical infrastructure, and strategic leadership.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-2 bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-electric-blue hover:text-white transition-all">
                      Download All Transcripts
                    </button>
                    <button className="px-6 py-2 bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">
                      Verify on LinkedIn
                    </button>
                  </div>
                </div>

                <div className="space-y-20">
                  {certificateCategories.map((category, idx) => (
                    <div key={idx} className="space-y-8">
                      <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <div className="p-3 bg-electric-blue/10 rounded-xl text-electric-blue">
                          {category.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">{category.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-1">
                            {category.providers.join(" • ")}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.certificates.map((cert, cIdx) => (
                          <motion.div
                            key={cIdx}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-electric-blue/50 transition-all duration-300 shadow-xl"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img 
                                src={cert.image} 
                                alt={cert.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-60" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {cert.pdf !== "#" && (
                                  <a 
                                    href={cert.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-electric-blue text-white font-bold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-[0_0_30px_rgba(0,123,255,0.4)]"
                                  >
                                    <Eye className="w-4 h-4" />
                                    Open in New Tab
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="p-6">
                              <p className="text-[10px] font-bold text-electric-blue uppercase tracking-widest mb-2">{cert.provider}</p>
                              <h5 className="text-lg font-bold mb-4 line-clamp-2">{cert.title}</h5>
                              <div className="flex items-center gap-3">
                                {cert.pdf !== "#" ? (
                                  <>
                                    <a 
                                      href={cert.pdf}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-1 py-2 text-center text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                      View Document
                                    </a>
                                    <a 
                                      href={cert.pdf}
                                      download
                                      className="p-2 border border-white/10 rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all"
                                    >
                                      <Download className="w-3 h-3" />
                                    </a>
                                  </>
                                ) : (
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 py-2">Verification Pending</span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "resume" && (
            <motion.section
              key="resume"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="w-20 h-20 bg-electric-blue/10 rounded-3xl flex items-center justify-center text-electric-blue mx-auto mb-6">
                  <FileText className="w-10 h-10" />
                </div>
                <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-4">Professional Curriculum</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">Career Blueprint &<br /><span className="text-electric-blue">Resume Vault</span></h3>
                <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                  Access my comprehensive professional history, technical expertise, and strategic career progression in a detailed document curated for talent acquisition and executive review.
                </p>

                <a 
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:98143c1b-ac0a-449a-b5b9-21a136aa8458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-electric-blue text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,123,255,0.4)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Download className="w-6 h-6 relative z-10" />
                  <span className="text-lg relative z-10 uppercase tracking-widest">Download My CV</span>
                </a>
              </motion.div>
            </motion.section>
          )}

          {activeSection === "insights" && (
            <motion.section
              key="insights"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[calc(100vh-5rem)] py-24 px-6 overflow-y-auto"
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-6">Thoughts & Narrative</h2>
                  <h3 className="text-5xl font-bold mb-6">Insights</h3>
                  <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Exploring the intersection of technology, ethics, and professional growth in the age of intelligence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "The Ethical Frontier of Generative AI",
                      date: "May 12, 2024",
                      excerpt: "Exploring why 'Responsibility by Design' is the only way forward for large language models in enterprise settings.",
                      category: "Responsible AI",
                      icon: <Award className="w-6 h-6 text-electric-blue" />
                    },
                    {
                      title: "From IT Infrastructure to AI Specialist",
                      date: "April 28, 2024",
                      excerpt: "My personal journey of pivoting from systems administration to the cutting edge of artificial intelligence.",
                      category: "Career Journey",
                      icon: <Zap className="w-6 h-6 text-electric-blue" />
                    }
                  ].map((post, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="group bg-[#1A1A1A] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col p-8 transition-all hover:border-electric-blue/30"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-white/5 rounded-2xl">
                          {post.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{post.date}</span>
                      </div>
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">
                          {post.category}
                        </span>
                        <h4 className="text-2xl font-bold leading-tight group-hover:text-electric-blue transition-colors">{post.title}</h4>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-xs font-bold text-electric-blue cursor-pointer group/read">
                        <span>Read Fully</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/read:translate-x-1" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-[calc(100vh-5rem)] flex items-center py-24 px-6 bg-white/[0.01] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center">
                  <h2 className="text-sm font-bold text-electric-blue uppercase tracking-[0.3em] mb-12">Contact</h2>
                  <div className="space-y-10">
                    <a href="mailto:swananandy96@gmail.com" className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-all">
                        <Mail className="w-8 h-8 text-electric-blue group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-xl font-medium">swananandy96@gmail.com</p>
                      </div>
                    </a>
                    <a href="tel:0783506479" className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-all">
                        <Phone className="w-8 h-8 text-electric-blue group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-xl font-medium">0783506479</p>
                      </div>
                    </a>
                    <a href="http://www.linkedin.com/in/nandipha-swana-b96850354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-all">
                        <Linkedin className="w-8 h-8 text-electric-blue group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">LinkedIn</p>
                        <p className="text-xl font-medium">Nandipha Swana</p>
                      </div>
                    </a>
                    <a href="https://github.com/Nesh996" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-all">
                        <Github className="w-8 h-8 text-electric-blue group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">GitHub</p>
                        <p className="text-xl font-medium">Nesh996</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl">
                        <MapPin className="w-8 h-8 text-electric-blue" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-xl font-medium">Johannesburg, South Africa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  className="bg-white/5 p-12 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-electric-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-electric-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full py-5 bg-electric-blue text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-charcoal/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="w-full h-16 bg-charcoal/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-white/60">Document Viewer</span>
                  <a 
                    href={selectedPdf} 
                    download
                    className="text-[10px] font-bold uppercase tracking-widest text-electric-blue hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 border border-electric-blue/30 rounded-full"
                  >
                    <Download className="w-3 h-3" />
                    Download PDF
                  </a>
                </div>
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Content */}
              <div className="flex-grow relative">
                {isPdfLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-charcoal">
                    <Loader2 className="w-10 h-10 text-electric-blue animate-spin" />
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40">Loading Document...</p>
                  </div>
                )}
                <iframe 
                  src={selectedPdf} 
                  className="w-full h-full border-none"
                  onLoad={() => setIsPdfLoading(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
