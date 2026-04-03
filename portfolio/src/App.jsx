import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Palette, Zap, Coffee, ExternalLink, Github, Mail, MapPin, Send, Linkedin, Twitter } from "lucide-react";



// ==========================================
// 1. Navbar Component
// ==========================================
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-gold-text">
          {"<dev />"}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[hsl(220,10%,55%)] hover:text-[#f5a623] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium gradient-gold text-[#0f172a] rounded-lg hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-gray-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-[hsl(220,10%,55%)] hover:text-[#f5a623] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ==========================================
// 2. HeroSection Component
// ==========================================
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 lamp-light pointer-events-none" />

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#f5a623]/30"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-24">
        <div className="relative flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="code-block rounded-xl p-6 w-full max-w-md font-mono text-sm"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-[#f5a623]/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="space-y-1">
              <p>
                <span className="text-[#f5a623]">const</span> <span className="text-blue-400">developer</span> <span className="text-[hsl(220,10%,55%)]">=</span> {"{"}
              </p>
              <p className="pl-4">
                <span className="text-green-400">name</span>: <span className="text-[#f5a623]">"Manesh Edirisinghe"</span>,
              </p>
              <p className="pl-4">
                <span className="text-green-400">role</span>: <span className="text-[#f5a623]">"Full-Stack Engineer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-green-400">passion</span>: <span className="text-[#f5a623]">"UI/UX Design"</span>,
              </p>
              <p className="pl-4">
                <span className="text-green-400">status</span>: <span className="text-[#f5a623]">"Open to work"</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center lg:text-left"
        >
          <div>
            <p className="text-[#f5a623] font-mono text-sm mb-4 tracking-wider">
              // Welcome to my world
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              Software
              <br />
              <span className="gradient-gold-text">Engineer</span>
              <br />
              <span className="text-[hsl(220,10%,55%)] text-3xl lg:text-4xl">
                & UI/UX Designer
              </span>
            </h1>
            <p className="text-[hsl(220,10%,55%)] text-lg max-w-md mb-8 mx-auto lg:mx-0">
              Crafting digital experiences where code meets creativity. Every
              pixel tells a story, every function has a purpose.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 gradient-gold text-[#0f172a] rounded-xl font-medium hover:opacity-90 transition-opacity glow-amber"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 glass rounded-xl font-medium text-white hover:border-[#f5a623]/50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#f5a623]/30 glow-amber bg-gray-800">
                <img
                  src="profilepic.png"
                  alt="Manesh Edirisinghe - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 glass rounded-full text-xs font-mono text-[#f5a623]">
                ● Available
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// 3. AboutSection Component
// ==========================================
const stats = [
  { icon: Code2, label: "Years Experience", value: "3+" },
  { icon: Palette, label: "Projects Delivered", value: "10+" },
  { icon: Zap, label: "Technologies", value: "15+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const aboutCards = [
  {
    title: "Who I Am",
    description:
      "I'm Manesh Edirisinghe, an undergraduate in Bachelor of Information Technology at the University of Colombo School of Computing (UCSC) and hold a Diploma in Information Technology. I'm a passionate Software Engineer and UI/UX Designer, dedicated to creating innovative, user-centered digital experiences and real-world software solutions.",
  },
  {
    title: "What I Do",
    description:
      "I specialize in Java programming and GUI development using Java Swing, creating intuitive and efficient desktop applications. My portfolio includes projects such as iHungry Burgershop and a School Website, reflecting my ability to combine functionality with clean design. I'm deeply passionate about problem-solving, UI/UX design, and continuously exploring modern frameworks and tools to craft seamless digital experiences.",
  },
  {
    title: "My Goals",
    description:
      "My goal is to become a skilled Full-Stack Software Engineer and UI/UX Designer, capable of crafting impactful systems from front-end to back-end. I'm passionate about creating user-centered designs, seamless interfaces, and efficient backend solutions. I'm dedicated to continuous learning, innovative thinking, and turning ideas into meaningful digital experiences.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#f5a623] font-mono text-sm mb-2">// About me</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Designing the <span className="gradient-gold-text">future</span>,
            <br />
            one line at a time.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed">
              I'm Manesh Edirisinghe — an undergraduate pursuing a Bachelor of
              Information Technology at the University of Colombo School of
              Computing (UCSC). I hold a Diploma in Information Technology and
              I'm passionate about building innovative, user-centered digital
              experiences and real-world software solutions.
            </p>
            <p className="text-[hsl(220,10%,55%)] leading-relaxed">
              I specialize in Java programming, GUI development with Java Swing,
              and modern web technologies. I believe in the power of thoughtful
              design to transform complex problems into elegant, seamless
              solutions.
            </p>

            <div className="code-block rounded-xl p-4 font-mono text-sm">
              <p className="text-[hsl(220,10%,55%)]">
                <span className="text-[#f5a623]">$</span> whoami
              </p>
              <p className="text-white mt-1">
                → A curious mind who turns caffeine into code & pixels into
                experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:glow-amber transition-shadow duration-500"
              >
                <stat.icon className="w-6 h-6 text-[#f5a623] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold gradient-gold-text mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-[hsl(220,10%,55%)]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Who I Am / What I Do / My Goals Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:glow-amber transition-shadow duration-500 group"
            >
              <h3 className="text-lg font-bold gradient-gold-text mb-4 group-hover:scale-105 transition-transform origin-left">
                {card.title}
              </h3>
              <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. ProjectsSection Component
// ==========================================
const projects = [
  {
    title: "Restaurant E-Menu Application",
    description: "Engineered a dynamic digital menu platform with a glass-morphism UI/UX, featuring live search and category filtering. Integrated RESTful APIs via Axios for real-time data fetching and responsive rendering across all device types.",
    tags: ["React.js", "Tailwind CSS", "Axios", "REST API"],
    image: "EMenu.png",
    backend: "https://github.com/ManeshEdirisinghe/Restaurant-E-Menu-Application",
    frontend: "https://github.com/ManeshEdirisinghe/Restaurant-E-Menu-Application",
  },
  {
    title: "MediCare Sync - Clinical Management System",
    description: "Collaborating in a 3-member team to develop a full-stack system digitizing healthcare workflows and patient profiles. Implemented JWT-based authentication and a pharmacy coordination module for secure, real-time data access.",
    tags: ["React.js", "Spring Boot", "MySQL", "JWT", "REST API"],
    image: "medicare.png",
    backend: "https://github.com/ManeshEdirisinghe/Wellness-Point-Clinical-System",
    frontend: "https://github.com/ManeshEdirisinghe/wellness-point-front-end",
  },
  {
    title: "Disaster Management System",
    description: "Led a 3-member team to build a real-time emergency response app featuring GPS-based reporting and offline synchronization. Developed a live admin dashboard for incident monitoring while managing task distribution and version control via GitHub.",
    tags: ["React.js", "Firebase", "GPS Integration", "GitHub"],
    image: "DisasterManagement.png",
    backend: "https://github.com/ManeshEdirisinghe/Hackathon-Web-App",
    // frontend: "https://github.com/ManeshEdirisinghe/Hackathon-Web-App",
  },
  {
    title: "Catering Management Dashboard",
    description: "Developed a premium responsive frontend dashboard with a luxury aesthetic to streamline event scheduling and order tracking. Engineered a centralized management hub focusing on dynamic interface logic and state management using React.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "UI/UX"],
    image: "CateringDashboard.png",
    backend: "https://github.com/ManeshEdirisinghe/Catering-Management-System",
    frontend: "https://github.com/ManeshEdirisinghe/Catering-Management-System",
  },
  {
    title: "BuildFlow — Enterprise Construction ERP System",
    description: "Serving as a Technical Business Analyst to bridge business requirements and technical implementation for a large-scale construction ERP. Translating complex needs into detailed user stories and technical scopes while collaborating with Spring Boot and Angular teams.",
    tags: ["Spring Boot", "Angular", "TypeScript", "Agile/Scrum"],
    image: "BuildFlow.png",
    backend: "https://github.com/ManeshEdirisinghe/",
    frontend: "https://github.com/ManeshEdirisinghe/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#f5a623] font-mono text-sm mb-2">
            // Selected work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-gold-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="glass rounded-2xl overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[#f5a623] font-mono text-xs">
                  0{i + 1}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-[hsl(220,10%,55%)] mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono glass rounded-full text-[#f5a623]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[hsl(220,10%,55%)] hover:text-[#f5a623] transition-colors"
                  >
                    <ExternalLink size={16} /> Backend
                  </a>
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[hsl(220,10%,55%)] hover:text-[#f5a623] transition-colors"
                  >
                    <ExternalLink size={16} /> Front end
                  </a>
       
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. SkillsSection Component
// ==========================================
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 }, 
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST / GraphQL", level: 86 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: 93 },
      { name: "UI/UX Research", level: 88 },
      { name: "Design Systems", level: 90 },
      { name: "Prototyping", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#f5a623] font-mono text-sm mb-2">
            // Tech stack
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-gold-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass rounded-2xl p-8 hover:glow-amber transition-shadow duration-500"
            >
              <h3 className="text-xl font-bold mb-6 gradient-gold-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: ci * 0.15 + si * 0.1,
                    }}
                    className="px-4 py-2 bg-[hsl(220,15%,12%)] border border-gray-800 rounded-lg text-sm text-[hsl(40,20%,90%)] hover:border-[#f5a623]/50 hover:text-[#f5a623] transition-colors cursor-default flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623]/50 group-hover:bg-[#f5a623] group-hover:shadow-[0_0_8px_rgba(245,166,35,0.8)] transition-all duration-300" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. ContactSection Component
// ==========================================
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // TODO: Replace with your actual Web3Forms access key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#f5a623] font-mono text-sm mb-2">
            // Get in touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's build something <span className="gradient-gold-text">amazing</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#f5a623]" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-[hsl(220,10%,55%)] text-sm">alex@devstudio.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#f5a623]" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-[hsl(220,10%,55%)] text-sm">San Francisco, CA — Available Worldwide</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[hsl(220,10%,55%)] hover:text-[#f5a623] hover:glow-amber transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="code-block rounded-xl p-4 font-mono text-sm mt-8">
              <p className="text-[hsl(220,10%,55%)]">
                <span className="text-[#f5a623]">$</span> echo "Let's collaborate!"
              </p>
              <p className="text-white mt-1">
                → I'm always open to exciting projects and new ideas.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f5a623]/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f5a623]/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 gradient-gold text-[#0f172a] rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-amber disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#0f172a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
            
            {submitStatus === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center mt-2">
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center mt-2">
                Failed to send message. Please check your access key.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. Footer Component
// ==========================================
const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[hsl(220,10%,55%)] font-mono">
          <span className="text-[#f5a623]">{"<"}</span>dev
          <span className="text-[#f5a623]">{" />"}</span> © 2026
        </p>
        <p className="text-sm text-[hsl(220,10%,55%)]">
          Designed & built with passion
        </p>
      </div>
    </footer>
  );
};

// ==========================================
// 8. LampIntro Component
// ==========================================
const LampIntro = ({ onReveal }) => {
  const [phase, setPhase] = useState("idle");
  const [hovering, setHovering] = useState(false);

  const isLit = phase === "flicker" || phase === "on" || phase === "flood";
  const isFullyLit = phase === "on" || phase === "flood";

  const handlePull = () => {
    if (phase !== "idle") return;
    setPhase("pulling");
    setTimeout(() => setPhase("flicker"), 300);
    setTimeout(() => setPhase("on"), 900);
    setTimeout(() => setPhase("flood"), 1600);
    setTimeout(() => onReveal(), 2600);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundColor: "hsl(220, 20%, 4%)" }}
        animate={{
          backgroundColor: isFullyLit ? "hsl(35, 15%, 8%)" : "hsl(220, 20%, 4%)",
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "flood" ? 1 : 0,
          background: "radial-gradient(ellipse at 50% 30%, hsl(42, 60%, 70%, 0.25) 0%, hsl(42, 50%, 55%, 0.08) 40%, transparent 70%)",
        }}
        transition={{ duration: 1 }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 rounded-b-md bg-[hsl(220,10%,18%)] z-10" />
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[2px] h-[28vh] bg-gradient-to-b from-[hsl(220,10%,25%)] to-[hsl(220,10%,20%)] z-10" />

      <div className="relative flex flex-col items-center z-10" style={{ marginTop: "-8vh" }}>
        <div className="w-6 h-4 rounded-t-sm bg-gradient-to-b from-[hsl(220,8%,30%)] to-[hsl(220,8%,22%)] border border-[hsl(220,8%,35%)]" />

        <div className="relative -mt-[1px]">
          <svg width="200" height="100" viewBox="0 0 200 100" className="drop-shadow-lg">
            <polygon points="70,0 130,0 170,95 30,95" fill="hsl(220, 10%, 15%)" stroke="hsl(220, 10%, 22%)" strokeWidth="1" />
            <motion.polygon
              points="72,2 128,2 168,93 32,93"
              animate={{
                fill: isFullyLit ? "hsl(35, 50%, 22%)" : isLit ? "hsl(35, 30%, 15%)" : hovering ? "hsl(225, 10%, 13%)" : "hsl(220, 10%, 12%)",
              }}
              transition={{ duration: 0.3 }}
            />
            <line x1="30" y1="95" x2="170" y2="95" stroke="hsl(220, 10%, 28%)" strokeWidth="2" />
            <line x1="70" y1="0" x2="130" y2="0" stroke="hsl(220, 10%, 28%)" strokeWidth="1.5" />
          </svg>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-3 h-2 bg-gradient-to-b from-[hsl(220,8%,35%)] to-[hsl(220,8%,25%)] rounded-sm" />
            <motion.div
              className="w-6 h-8 rounded-b-full rounded-t-lg -mt-[1px]"
              animate={
                phase === "flicker"
                  ? {
                      backgroundColor: ["hsl(42, 70%, 45%)", "hsl(220, 5%, 18%)", "hsl(42, 80%, 55%)", "hsl(42, 40%, 30%)", "hsl(42, 90%, 65%)"],
                      boxShadow: ["0 0 15px hsl(42, 70%, 50%, 0.5), 0 0 40px hsl(42, 60%, 45%, 0.2)", "none", "0 0 25px hsl(42, 80%, 55%, 0.7), 0 0 60px hsl(42, 70%, 50%, 0.3)", "0 0 5px hsl(42, 50%, 40%, 0.3)", "0 0 30px hsl(42, 90%, 60%, 0.9), 0 0 80px hsl(42, 80%, 55%, 0.5), 0 0 150px hsl(42, 70%, 50%, 0.2)"],
                    }
                  : {
                      backgroundColor: isFullyLit ? "hsl(42, 90%, 68%)" : "hsl(220, 5%, 18%)",
                      boxShadow: isFullyLit ? "0 0 30px hsl(42, 90%, 60%, 0.9), 0 0 80px hsl(42, 80%, 55%, 0.5), 0 0 150px hsl(42, 70%, 50%, 0.2)" : "none",
                    }
              }
              transition={phase === "flicker" ? { duration: 0.6, times: [0, 0.15, 0.4, 0.6, 1] } : { duration: 0.4 }}
              style={{ border: "1px solid hsl(220, 8%, 25%)" }}
            />
            <motion.div
              className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-4"
              animate={{ opacity: isLit ? 1 : 0.08 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-orange-300/80 to-transparent rotate-[-8deg]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-orange-300/90 to-transparent" />
              <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-orange-300/80 to-transparent rotate-[8deg]" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute top-[100px] left-1/2 -translate-x-1/2 pointer-events-none"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: isFullyLit ? 1 : phase === "flicker" ? 0.4 : 0, scale: phase === "flood" ? 1.3 : 1 }}
          transition={{ duration: phase === "flood" ? 1.2 : 0.5 }}
        >
          <div style={{ width: 0, height: 0, borderLeft: "180px solid transparent", borderRight: "180px solid transparent", borderTop: "500px solid hsl(42, 50%, 70%, 0.05)", filter: "blur(12px)" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: 0, height: 0, borderLeft: "90px solid transparent", borderRight: "90px solid transparent", borderTop: "400px solid hsl(42, 60%, 65%, 0.08)", filter: "blur(6px)" }} />
        </motion.div>

        <motion.div
          className="absolute top-[70px] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFullyLit ? 0.7 : phase === "flicker" ? 0.3 : 0, background: isLit ? "radial-gradient(circle, hsl(42, 70%, 55%, 0.35), transparent 70%)" : "none" }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="relative flex flex-col items-center mt-2 z-20 group">
        <div
          className="absolute bottom-[-0.02em] left-1/2 -translate-x-1/2 flex items-center pointer-events-none select-none text-6xl md:text-8xl font-bold font-sans tracking-tight transition-all duration-700"
          style={{
            color: isFullyLit ? "hsl(42, 80%, 90%)" : "hsl(220, 10%, 25%)",
            textShadow: isFullyLit ? "0 0 30px hsl(42, 80%, 55%, 0.6)" : "none",
          }}
        >
          <div className="pr-[0.28em]"></div>
          <div className="pr-[0.28em]">M</div>
          <div className="pr-[0em]">A</div>
          <div className="pr-[0.33em]"></div>
          <div className="pl-[0.98em] ">E</div>
          <div className="pl-[0.28em]">S</div>
          <div className="pl-[0.28em]">H.</div>
        </div>

        <motion.div
          className="flex flex-col items-center cursor-pointer relative z-10"
          onClick={(e) => { e.stopPropagation(); handlePull(); }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          animate={{ y: phase === "pulling" ? 30 : hovering ? 8 : 0 }}
          transition={phase === "pulling" ? { type: "spring", stiffness: 400, damping: 12, mass: 0.8 } : { type: "spring", stiffness: 250, damping: 18 }}
          whileTap={{ y: 35 }}
        >
          <div className="flex flex-col items-center gap-[3px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] h-[8px] rounded-full border"
                animate={{
                  backgroundColor: isFullyLit ? "hsl(42, 30%, 35%)" : "hsl(220, 8%, 30%)",
                  borderColor: isFullyLit ? "hsl(42, 20%, 42%)" : "hsl(220, 8%, 38%)",
                }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                style={{ opacity: 1 - i * 0.02 }}
              />
            ))}
          </div>
          <motion.div
            className="mt-1 text-6xl md:text-8xl font-bold font-sans tracking-tight leading-none"
            animate={{
              color: isFullyLit ? "hsl(42, 80%, 90%)" : hovering ? "hsl(42, 60%, 55%)" : "hsl(220, 10%, 25%)",
              textShadow: isFullyLit ? "0 0 30px hsl(42, 80%, 55%, 0.6)" : hovering ? "0 0 15px hsl(42, 50%, 40%, 0.4)" : "none",
              scale: hovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="pr-[0.37em] pl-[0.0em]"> N </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: isFullyLit ? 1 : 0, scale: phase === "flood" ? 1.5 : 1 }}
        transition={{ duration: phase === "flood" ? 1.2 : 0.6 }}
      >
        <div className="w-[600px] h-[100px] rounded-[50%]" style={{ background: "radial-gradient(ellipse, hsl(42, 50%, 60%, 0.08), transparent 70%)", filter: "blur(25px)" }} />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none bg-[hsl(42,60%,85%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "flood" ? [0, 0.15, 0] : 0 }}
        transition={{ duration: 1, times: [0, 0.3, 1] }}
      />

      <motion.p
        className="absolute bottom-16 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase text-center w-full px-4"
        style={{ color: "hsl(220, 10%, 40%)" }}
        animate={{ opacity: phase !== "idle" ? 0 : hovering ? 0.9 : [0.2, 0.45, 0.2] }}
        transition={phase !== "idle" ? { duration: 0.2 } : hovering ? { duration: 0.2 } : { duration: 4, repeat: Infinity }}
      >
        {hovering ? "↓ Click the 'N' to enter portfolio" : "Pull the 'N' to illuminate"}
      </motion.p>
    </motion.div>
  );
};

// ==========================================
// 9. Main Application Component
// ==========================================
export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {!revealed && <LampIntro onReveal={() => setRevealed(true)} />}
      </AnimatePresence>

      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}