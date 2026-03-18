import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Film, Palette, Wand2, Zap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const works = [
  { id: 1, title: 'CINEMATIC REEL', category: 'Film', image: '/images/work-1.jpg' },
  { id: 2, title: 'BRAND STORY', category: 'Commercial', image: '/images/work-2.jpg' },
  { id: 3, title: 'MUSIC VIDEO', category: 'Music', image: '/images/work-3.jpg' },
  { id: 4, title: 'DOCUMENTARY', category: 'Documentary', image: '/images/work-4.jpg' },
];

const software = [
  { name: 'Adobe Premiere Pro', level: 98 },
  { name: 'DaVinci Resolve', level: 95 },
  { name: 'After Effects', level: 92 },
  { name: 'Final Cut Pro', level: 88 },
  { name: 'Cinema 4D', level: 75 },
];

const services = [
  { icon: Film, title: 'Video Editing', desc: 'Professional cutting and sequencing' },
  { icon: Palette, title: 'Color Grading', desc: 'Cinematic color correction' },
  { icon: Wand2, title: 'VFX & Motion', desc: 'Visual effects and animation' },
  { icon: Zap, title: 'Sound Design', desc: 'Audio mixing and mastering' },
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              SERVICES
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive post-production services to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 hover:border-foreground/50 transition-colors group"
              >
                <service.icon className="w-10 h-10 mb-6 text-muted group-hover:text-foreground transition-colors" />
                <h3 className="font-display text-xl tracking-wider mb-2">{service.title}</h3>
                <p className="text-muted text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
                FEATURED WORKS
              </h2>
              <p className="text-muted">Selected projects from our portfolio</p>
            </motion.div>
            <Link
              to="/works"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video overflow-hidden cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-muted text-sm tracking-widest uppercase">{work.category}</span>
                  <h3 className="font-display text-2xl tracking-wider">{work.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Play size={24} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Skills */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              TOOLS & SOFTWARE
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Industry-standard software mastered over years of professional experience
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {software.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted">{item.level}%</span>
                </div>
                <div className="h-1 bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-foreground"
                  />
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
