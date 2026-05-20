/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  GraduationCap, 
  Moon, 
  Sun, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Database,
  Briefcase
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Assets (Using generated images)
const PROFILE_IMG = "/src/assets/images/profile_placeholder_1779205144646.png";
const PROJECT_1_IMG = "/src/assets/images/project_thumbnail_1_1779205163131.png";
const PROJECT_2_IMG = "/src/assets/images/project_thumbnail_2_1779205181791.png";

type Skill = {
  name: string;
  icon: JSX.Element;
  level: number; // 0-100
};

const WEB_SKILLS: Skill[] = [
  { name: "React / Next.js", icon: <Globe className="w-4 h-4" />, level: 90 },
  { name: "TypeScript", icon: <Code2 className="w-4 h-4" />, level: 85 },
  { name: "Tailwind CSS", icon: <Layers className="w-4 h-4" />, level: 95 },
  { name: "Framer Motion", icon: <Terminal className="w-4 h-4" />, level: 80 },
];

const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js / Express", icon: <Cpu className="w-4 h-4" />, level: 85 },
  { name: "PostgreSQL / SQL", icon: <Database className="w-4 h-4" />, level: 80 },
  { name: "REST APIs", icon: <ExternalLink className="w-4 h-4" />, level: 90 },
  { name: "Firebase", icon: <Layers className="w-4 h-4" />, level: 75 },
];

const PROJECTS = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    description: "A full-stack analytics platform for monitoring carbon footprints in real-time. Built with React and PostgreSQL.",
    image: PROJECT_1_IMG,
    tags: ["React", "Express", "D3.js", "SQL"],
    link: "#"
  },
  {
    id: 2,
    title: "Nova Social App",
    description: "A minimalist social media experience focused on high-quality visual content and privacy. Mobile-first design.",
    image: PROJECT_2_IMG,
    tags: ["Next.js", "Firebase", "Motion", "Tailwind"],
    link: "#"
  }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tight"
          >
            AVINASH<span className="text-blue-600 dark:text-blue-400">.</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors opacity-70 hover:opacity-100"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-4">
              <span className="w-8 h-px bg-current"></span>
              <span className="text-sm tracking-widest uppercase">Full Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Avinash <br /> <span className="text-gradient">N Shetty</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mb-8 leading-relaxed">
              Engineering graduate dedicated to crafting high-performance web experiences. 
              Merging technical precision with creative problem-solving.
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold rounded-full shadow-lg shadow-black/10 dark:shadow-white/10 transition-all"
              >
                View Projects
              </motion.button>
              <div className="flex items-center gap-4 ml-2">
                <a href="#" className="p-2 opacity-60 hover:opacity-100 transition-opacity"><Github className="w-6 h-6" /></a>
                <a href="#" className="p-2 opacity-60 hover:opacity-100 transition-opacity"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white dark:border-zinc-800">
              <img 
                src={PROFILE_IMG} 
                alt="Avinash N Shetty" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-3xl -z-10" />
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-10 -left-10 p-4 glass rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <Briefcase className="w-8 h-8 text-blue-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-20 px-6 bg-zinc-100 dark:bg-zinc-900/50 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                With a background in <span className="font-semibold text-zinc-900 dark:text-zinc-100">Engineering</span>, 
                I approach web development with a structured and analytical mindset. I specialize in building 
                robust full-stack applications that are as efficient as they are visually engaging.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My goal is to create digital products that solve real-world problems while delivering 
                exceptional user experiences. Whether it's architecting a complex database or 
                fine-tuning a UI animation, I'm committed to excellence in every layer.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold mb-6">Education</h2>
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="w-16 h-16" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Bachelor of Engineering</h3>
                    <p className="text-sm text-zinc-500 mb-2">Visvesvaraya Technological University</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Focusing on technical systems, software architecture, and engineering principles.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Dev */}
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               viewport={{ once: true }}
               className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
              </div>
              <div className="space-y-6">
                {WEB_SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span>{skill.name}</span>
                      <span className="opacity-60">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-600 dark:bg-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Full Stack */}
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Full Stack Engine</h3>
              </div>
              <div className="space-y-6">
                {BACKEND_SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span>{skill.name}</span>
                      <span className="opacity-60">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-indigo-600 dark:bg-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-2">Featured Projects</h2>
              <p className="text-zinc-500 dark:text-zinc-400">A selection of my recent works.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded-full text-sm">
                      View Case Study <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something <span className="text-gradient">remarkable</span>.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-lg">
              Feel free to reach out for collaborations, project inquiries, or just to say hi!
            </p>
            
            <form className="space-y-4 text-left p-8 glass rounded-3xl shadow-lg border border-zinc-200 dark:border-zinc-800">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-zinc-100 dark:bg-zinc-800/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-zinc-100 dark:bg-zinc-800/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Your Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-zinc-100 dark:bg-zinc-800/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold rounded-xl shadow-lg mt-4"
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap justify-center gap-8">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" /> avinash@example.com
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-3 glass rounded-full hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="p-3 glass rounded-full hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Avinash N Shetty. Crafted with code and passion.</p>
        </div>
      </footer>
    </div>
  );
}
