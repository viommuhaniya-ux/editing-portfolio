import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Target } from 'lucide-react';

import AnimatedCounter from '../components/AnimatedCounter';

const team = [
  { name: 'Alex Reek', role: 'Founder & Lead Editor', image: '/images/team-1.jpg' },
  { name: 'Jordan Cole', role: 'Senior Colorist', image: '/images/team-2.jpg' },
  { name: 'Sam Rivera', role: 'Motion Designer', image: '/images/team-3.jpg' },
];

const timeline = [
  { year: '2016', title: 'The Beginning', desc: 'Started as a freelance editor with a passion for storytelling' },
  { year: '2018', title: 'First Major Project', desc: 'Collaborated with top brands on commercial campaigns' },
  { year: '2020', title: 'Studio Founded', desc: 'Established REEK as a full-service post-production studio' },
  { year: '2022', title: 'Award Recognition', desc: 'Won multiple industry awards for creative excellence' },
  { year: '2024', title: 'Global Reach', desc: 'Working with clients worldwide on diverse projects' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'We pursue perfection in every frame' },
  { icon: Users, title: 'Collaboration', desc: 'Your vision, our expertise' },
  { icon: Clock, title: 'Efficiency', desc: 'Timely delivery without compromise' },
  { icon: Target, title: 'Precision', desc: 'Attention to the finest details' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-bg.jpg"
            alt="About"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-8xl tracking-wider mb-6">
              OUR STORY
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              REEK is a premium video editing studio dedicated to transforming raw footage into compelling visual narratives. We blend technical expertise with creative vision to deliver cinematic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={150} suffix="+" label="Projects" />
            <AnimatedCounter end={8} suffix="+" label="Years" />
            <AnimatedCounter end={50} suffix="+" label="Clients" />
            <AnimatedCounter end={12} label="Awards" />
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              THE JOURNEY
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From humble beginnings to a recognized studio
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className={`max-w-md ${i % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <span className="font-display text-4xl text-muted">{item.year}</span>
                    <h3 className="font-display text-2xl tracking-wider mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              OUR VALUES
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-8 hover:border-foreground/50 transition-colors text-center"
              >
                <value.icon className="w-10 h-10 mx-auto mb-4 text-muted" />
                <h3 className="font-display text-xl tracking-wider mb-2">{value.title}</h3>
                <p className="text-muted text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-4">
              THE TEAM
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Meet the creative minds behind REEK
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl tracking-wider">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              READY TO COLLABORATE?
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's bring your vision to life with professional video editing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-medium tracking-wider hover:bg-accent transition-colors"
            >
              GET IN TOUCH <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
