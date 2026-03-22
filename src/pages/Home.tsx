import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Film, Palette, Wand2, Zap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import SoftwareCard from '../components/SoftwareCard';

const works = [
  { id: 1, title: 'CINEMATIC REEL', category: 'Film', image: '/images/work-1.jpg' },
  { id: 2, title: 'BRAND STORY', category: 'Commercial', image: '/images/work-2.jpg' },
  { id: 3, title: 'MUSIC VIDEO', category: 'Music', image: '/images/work-3.jpg' },
  { id: 4, title: 'DOCUMENTARY', category: 'Documentary', image: '/images/work-4.jpg' },
];

const software = [
  { name: 'Adobe Premiere Pro', level: 98, category: 'Editing', icon: 'Pr', color: '#9999FF', link: 'https://www.adobe.com/products/premiere.html' },
  { name: 'DaVinci Resolve', level: 95, category: 'Color', icon: 'Da', color: '#FF6B6B', link: 'https://www.blackmagicdesign.com/products/davinciresolve' },
  { name: 'After Effects', level: 92, category: 'Motion', icon: 'Ae', color: '#9999FF', link: 'https://www.adobe.com/products/aftereffects.html' },
  { name: 'Final Cut Pro', level: 88, category: 'Editing', icon: 'Fc', color: '#FFFFFF', link: 'https://www.apple.com/final-cut-pro/' },
  { name: 'Cinema 4D', level: 75, category: '3D', icon: 'C4', color: '#4ECDC4', link: 'https://www.maxon.net/en/cinema-4d' },
  { name: 'Audition', level: 85, category: 'Audio', icon: 'Au', color: '#00D4AA', link: 'https://www.adobe.com/products/audition.html' },
];

const services = [
  { icon: Film, title: 'Video Editing', desc: 'Professional cutting, sequencing, and narrative structure for compelling storytelling', features: ['Timeline Assembly', 'Multi-cam Editing', 'Pacing & Rhythm'] },
  { icon: Palette, title: 'Color Grading', desc: 'Cinematic color correction and creative looks that define your visual identity', features: ['Color Correction', 'LUT Creation', 'HDR Mastering'] },
  { icon: Wand2, title: 'VFX & Motion', desc: 'Visual effects, motion graphics, and dynamic animations that captivate', features: ['Compositing', '3D Integration', 'Title Design'] },
  { icon: Zap, title: 'Sound Design', desc: 'Audio mixing, mastering, and sound design for immersive experiences', features: ['Audio Mixing', 'Foley & SFX', 'Music Sync'] },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-9xl tracking-wider mb-6">
              REEK
            </h1>
            <p className="text-muted text-lg md:text-xl tracking-widest uppercase mb-8">
              Video Editor & Post-Production
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-medium tracking-wider hover:bg-accent transition-colors"
            >
              <Play size={18} />
              VIEW WORKS
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-4 font-medium tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-foreground/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <AnimatedCounter end={150} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={8} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Happy Clients" />
            <AnimatedCounter end={12} label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/50" 
              />
              <span className="text-muted text-sm tracking-[0.3em] uppercase">What We Do</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/50" 
              />
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              SERVICES
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive post-production services to bring your vision to life
            </p>
          </motion.div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* Top border line with animation */}
                {i === 0 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-0 right-0 h-px bg-border origin-left"
                  />
                )}
                
                <div className="relative py-8 md:py-12 cursor-pointer">
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.02] transition-colors duration-500" />
                  
                  {/* Animated line on hover */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-px bg-foreground origin-top"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start px-4 md:px-8">
                    {/* Number */}
                    <div className="md:col-span-1 flex items-center gap-4">
                      <span className="font-display text-3xl md:text-4xl text-muted/30 group-hover:text-muted/60 transition-colors">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="md:col-span-3 flex items-center gap-4">
                      <div className="w-12 h-12 border border-border group-hover:border-foreground/50 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl tracking-wider">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-muted text-sm md:text-base leading-relaxed">{service.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="md:col-span-3 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="text-xs tracking-wider uppercase px-3 py-1 border border-border/50 text-muted group-hover:border-foreground/30 group-hover:text-foreground/70 transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-1 flex justify-end items-center">
                      <motion.div 
                        className="w-10 h-10 border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom border line with animation */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-foreground/20" />
              <span className="text-muted text-sm tracking-widest uppercase">End-to-end production</span>
              <div className="w-2 h-2 bg-foreground/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-border/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-border/30" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-px bg-foreground/50" 
                />
                <span className="text-muted text-sm tracking-[0.3em] uppercase">Portfolio</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-2">
                FEATURED WORKS
              </h2>
              <p className="text-muted">Selected projects from our portfolio</p>
            </motion.div>
            <Link
              to="/works"
              className="mt-6 md:mt-0 group inline-flex items-center gap-3 text-sm tracking-widest uppercase border border-border px-6 py-3 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View All 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative cursor-pointer"
              >
                {/* Main container */}
                <div className="relative aspect-video overflow-hidden bg-background">
                  {/* Image */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Scan line effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                    }}
                  />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer ring - animated */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border border-foreground/30"
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      
                      {/* Main play button */}
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-foreground/50 group-hover:border-foreground flex items-center justify-center backdrop-blur-sm bg-background/20 group-hover:bg-background/40 transition-all duration-300">
                        <Play size={24} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {work.category === 'Film' ? '04:32' : work.category === 'Commercial' ? '01:45' : work.category === 'Music' ? '03:28' : '02:15'}
                  </div>

                  {/* Corner frame accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-foreground/0 group-hover:border-foreground/50 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-foreground/0 group-hover:border-foreground/50 transition-all duration-500" />
                </div>

                {/* Info section */}
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs tracking-[0.2em] uppercase text-muted">{work.category}</span>
                      <span className="w-1 h-1 bg-muted/50 rounded-full" />
                      <span className="text-xs text-muted">2024</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl tracking-wider group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                  </div>
                  
                  {/* Index number */}
                  <span className="font-display text-3xl text-muted/20 group-hover:text-muted/40 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom line animation */}
                <motion.div 
                  className="h-px bg-border mt-5 origin-left"
                  initial={{ scaleX: 0.3 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Skills */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/30" 
              />
              <span className="text-muted text-sm tracking-[0.3em] uppercase">Expertise</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/30" 
              />
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              TOOLS & SOFTWARE
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Industry-standard software mastered over years of professional experience
            </p>
          </motion.div>

          {/* Software Grid with cursor tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((item, i) => (
              <SoftwareCard
                key={item.name}
                item={item}
                index={i}
              />
            ))}
          </div>

          {/* Additional skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-8">
              <span className="text-muted text-xs tracking-[0.3em] uppercase">Also Proficient In</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Photoshop', color: '#31A8FF' },
                { name: 'Lightroom', color: '#31A8FF' },
                { name: 'Figma', color: '#A259FF' },
                { name: 'Blender', color: '#F5792A' },
                { name: 'Logic Pro', color: '#FFFFFF' },
                { name: 'Pro Tools', color: '#7AC4E5' },
                { name: 'Mocha Pro', color: '#FF6B6B' },
                { name: 'RED Giant', color: '#FF4444' },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ 
                    y: -3,
                    borderColor: `${skill.color}50`,
                  }}
                  className="px-5 py-2.5 border border-border text-sm tracking-wider text-muted hover:text-foreground transition-all duration-300 cursor-pointer"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
              {[
                { value: '10K+', label: 'Hours Editing' },
                { value: '500+', label: 'Projects Done' },
                { value: '50TB', label: 'Footage Cut' },
                { value: '∞', label: 'Creativity' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 text-center group cursor-default"
                >
                  <motion.div 
                    className="font-display text-3xl md:text-4xl tracking-wider mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted text-xs tracking-[0.2em] uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/30" 
              />
              <span className="text-muted text-sm tracking-[0.3em] uppercase">Showcase</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-foreground/30" 
              />
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              CINEMATIC REELS
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Explore our latest high-end productions and creative edits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Cinematic Reel 2024', 
                category: 'Production', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                desc: 'A compilation of our best cinematic moments from the past year.'
              },
              { 
                title: 'Commercial Edit', 
                category: 'Advertising', 
                url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
                desc: 'High-energy commercial editing for modern lifestyle brands.'
              },
              { 
                title: 'Music Video Visuals', 
                category: 'Music', 
                url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
                desc: 'Experimental visual storytelling and dynamic rhythmic editing.'
              },
            ].map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="relative aspect-video bg-card border border-border/50 overflow-hidden group-hover:border-foreground/30 transition-all duration-500">
                  {/* Video Iframe */}
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.url}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  ></iframe>

                  {/* Glass Overlay (Visible when not playing/hovering) */}
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-foreground/20 group-hover:border-foreground/50 transition-all duration-500" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-foreground/20 group-hover:border-foreground/50 transition-all duration-500" />
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">{video.category}</span>
                    <div className="h-px flex-1 bg-border/30" />
                  </div>
                  <h3 className="font-display text-xl tracking-wider group-hover:text-accent transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              LET'S CREATE TOGETHER
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your raw footage into a cinematic masterpiece? Let's discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-medium tracking-wider hover:bg-accent transition-colors"
            >
              START A PROJECT <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
