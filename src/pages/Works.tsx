import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Calendar, Maximize, Volume2, VolumeX } from 'lucide-react';

const categories = ['All', 'Film', 'Commercial', 'Music', 'Documentary'];

const works = [
  { id: 1, title: 'CINEMATIC REEL 2024', category: 'Film', image: '/images/work-1.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', description: 'A showcase of cinematic techniques and storytelling', duration: '04:32', year: '2024' },
  { id: 2, title: 'BRAND STORY - LUXE', category: 'Commercial', image: '/images/work-2.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', description: 'Premium brand film for luxury fashion label', duration: '01:45', year: '2024' },
  { id: 3, title: 'NEON DREAMS', category: 'Music', image: '/images/work-3.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', description: 'Music video with vibrant visual effects', duration: '03:28', year: '2023' },
  { id: 4, title: 'URBAN STORIES', category: 'Documentary', image: '/images/work-4.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', description: 'Documentary about city life and culture', duration: '12:15', year: '2024' },
  { id: 5, title: 'TECH FORWARD', category: 'Commercial', image: '/images/work-5.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: 'Product launch video for tech startup', duration: '02:30', year: '2023' },
  { id: 6, title: 'ECHOES', category: 'Film', image: '/images/hero-bg.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', description: 'Short film exploring memory and time', duration: '08:45', year: '2024' },
  { id: 7, title: 'PULSE', category: 'Music', image: '/images/about-bg.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', description: 'High-energy music video with dynamic editing', duration: '03:52', year: '2023' },
  { id: 8, title: 'THE JOURNEY', category: 'Documentary', image: '/images/work-1.jpg', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', description: 'Travel documentary series', duration: '18:20', year: '2024' },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedWork]);

  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-foreground/30" 
              />
              <span className="text-muted text-sm tracking-[0.3em] uppercase">Portfolio</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-foreground/30" 
              />
            </div>
            
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
      <section className="py-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-background'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-foreground"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedWork(work);
                  }}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group cursor-pointer"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-card">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Scan lines effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)'
                      }}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xs tracking-[0.2em] uppercase bg-background/70 backdrop-blur-sm px-3 py-1.5 border border-border/50"
                      >
                        {work.category}
                      </motion.span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-background/70 backdrop-blur-sm px-3 py-1.5 text-xs tracking-wider">
                      <Clock size={12} className="text-muted" />
                      {work.duration}
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: hoveredId === work.id ? 1 : 0.8, 
                          opacity: hoveredId === work.id ? 1 : 0.5 
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        {/* Pulse ring */}
                        {hoveredId === work.id && (
                          <motion.div
                            className="absolute inset-0 rounded-full border border-foreground/50"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                        
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-foreground/40 group-hover:border-foreground flex items-center justify-center backdrop-blur-sm bg-background/30 group-hover:bg-background/50 transition-all duration-300">
                          <Play size={20} className="ml-0.5" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner frames */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-foreground/0 group-hover:border-foreground/40 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-foreground/0 group-hover:border-foreground/40 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-foreground/0 group-hover:border-foreground/40 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-foreground/0 group-hover:border-foreground/40 transition-all duration-500" />
                  </div>

                  {/* Info */}
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg md:text-xl tracking-wider group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-muted text-sm mt-1 line-clamp-1">{work.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-muted text-xs">
                      <Calendar size={12} />
                      {work.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Close */}
              <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center pointer-events-none">
                <div className="flex gap-2">
                  <div className="bg-background/40 backdrop-blur-md px-3 py-1 border border-white/10">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">{selectedWork.category}</span>
                  </div>
                </div>
                <div className="flex gap-2 pointer-events-auto">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 bg-background/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button 
                    onClick={() => {
                      if (videoRef.current?.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }}
                    className="w-10 h-10 bg-background/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                    title="Fullscreen"
                  >
                    <Maximize size={18} />
                  </button>
                  <button 
                    onClick={() => setSelectedWork(null)}
                    className="w-10 h-10 bg-background/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={selectedWork.videoUrl}
                  className="w-full h-full"
                  autoPlay
                  controls
                  muted={isMuted}
                  playsInline
                />
              </div>

              {/* Info Section */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-accent text-xs tracking-[0.2em] font-medium uppercase">{selectedWork.year}</span>
                      <div className="w-1 h-1 bg-border rounded-full" />
                      <span className="text-muted text-xs tracking-[0.2em] uppercase">{selectedWork.duration}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-4xl tracking-wider">{selectedWork.title}</h2>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      {selectedWork.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                    <div className="min-w-[120px]">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted block mb-1">Role</span>
                      <p className="text-sm font-medium">Lead Editor</p>
                    </div>
                    <div className="min-w-[120px]">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-muted block mb-1">Software</span>
                      <p className="text-sm font-medium">Premiere, DaVinci</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 opacity-30" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
