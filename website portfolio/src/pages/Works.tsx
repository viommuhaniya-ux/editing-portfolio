import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';


const categories = ['All', 'Film', 'Commercial', 'Music', 'Documentary'];

const works = [
  { id: 1, title: 'CINEMATIC REEL 2024', category: 'Film', image: '/images/work-1.jpg', description: 'A showcase of cinematic techniques and storytelling' },
  { id: 2, title: 'BRAND STORY - LUXE', category: 'Commercial', image: '/images/work-2.jpg', description: 'Premium brand film for luxury fashion label' },
  { id: 3, title: 'NEON DREAMS', category: 'Music', image: '/images/work-3.jpg', description: 'Music video with vibrant visual effects' },
  { id: 4, title: 'URBAN STORIES', category: 'Documentary', image: '/images/work-4.jpg', description: 'Documentary about city life and culture' },
  { id: 5, title: 'TECH FORWARD', category: 'Commercial', image: '/images/work-5.jpg', description: 'Product launch video for tech startup' },
  { id: 6, title: 'ECHOES', category: 'Film', image: '/images/hero-bg.jpg', description: 'Short film exploring memory and time' },
  { id: 7, title: 'PULSE', category: 'Music', image: '/images/about-bg.jpg', description: 'High-energy music video with dynamic editing' },
  { id: 8, title: 'THE JOURNEY', category: 'Documentary', image: '/images/work-1.jpg', description: 'Travel documentary series' },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-8xl tracking-wider mb-6">
              WORKS
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A curated collection of video editing projects showcasing storytelling, visual effects, and cinematic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-colors ${
                  activeCategory === cat
                    ? 'bg-foreground text-background'
                    : 'border border-border hover:border-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedWork(work)}
                  className="group relative aspect-video overflow-hidden cursor-pointer bg-card"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs tracking-widest uppercase bg-background/80 px-3 py-1">
                      {work.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-xl tracking-wider">{work.title}</h3>
                    <p className="text-muted text-sm mt-1">{work.description}</p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center bg-background/50 backdrop-blur-sm">
                      <Play size={20} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-card border border-border"
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute -top-12 right-0 p-2 text-muted hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="aspect-video relative">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center bg-background/50 backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} className="ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <span className="text-muted text-sm tracking-widest uppercase">{selectedWork.category}</span>
                <h2 className="font-display text-3xl tracking-wider mt-2 mb-4">{selectedWork.title}</h2>
                <p className="text-muted">{selectedWork.description}</p>
                
                <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-muted text-xs tracking-widest uppercase">Role</span>
                    <p className="font-medium">Editor & Colorist</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs tracking-widest uppercase">Software</span>
                    <p className="font-medium">Premiere Pro, DaVinci</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs tracking-widest uppercase">Duration</span>
                    <p className="font-medium">3:45</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
