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
  Eye
} from "lucide-react";

type Section = "home" | "about" | "projects" | "contact";

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
      title: "Generative AI with LLMs", 
      provider: "AWS & DeepLearning.AI",
      skill: "Advanced LLM Architecture",
      pdf: "./assets/certificates/aws-gen-ai.pdf"
    },
    { 
      title: "Trustworthy AI: Bias & Ethics", 
      provider: "Johns Hopkins University",
      skill: "AI Accountability & Auditing",
      pdf: "./assets/certificates/johns-hopkins-ethics.pdf"
    },
    { 
      title: "Python for Data Science & AI", 
      provider: "IBM",
      skill: "Technical Implementation",
      pdf: "./assets/certificates/ibm-python.pdf"
    },
    { 
      title: "Higher Certificate in Management", 
      provider: "NQF Level 5",
      skill: "Strategic Operations",
      pdf: "./assets/certificates/management-nqf5.pdf"
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
                        <button 
                          onClick={() => openPdf(item.pdf)}
                          className="px-4 py-2 border border-electric-blue/50 text-electric-blue text-xs font-bold rounded-lg hover:bg-electric-blue hover:text-white transition-all whitespace-nowrap"
                        >
                          Preview
                        </button>
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
                    <a href="https://www.linkedin.com/in/nandipha-swana-b96850354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-all">
                        <Linkedin className="w-8 h-8 text-electric-blue group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">LinkedIn</p>
                        <p className="text-xl font-medium">Nandipha Swana</p>
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
                    <ExternalLink className="w-3 h-3" />
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
