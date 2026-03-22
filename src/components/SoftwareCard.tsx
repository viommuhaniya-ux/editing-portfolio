import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SoftwareItem {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
  link?: string;
}

interface SoftwareCardProps {
  item: SoftwareItem;
  index: number;
}

export default function SoftwareCard({ item, index }: SoftwareCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <motion.div 
        className="relative bg-card border border-border p-6 h-full transition-all duration-300 overflow-hidden"
        whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
      >
        {/* Cursor glow effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}% ${mousePosition.y}%, ${item.color}12, transparent 50%)`
          }}
        />

        {/* Cursor spotlight border */}
        <motion.div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(250px circle at ${mousePosition.x}% ${mousePosition.y}%, ${item.color}25, transparent 50%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
        />

        {/* Animated corner lines */}
        <div className="absolute top-0 left-0">
          <motion.div 
            className="absolute top-0 left-0 h-px bg-foreground/30"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 24 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute top-0 left-0 w-px bg-foreground/30"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? 24 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <motion.div 
            className="absolute bottom-0 right-0 h-px bg-foreground/30"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 24 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-px bg-foreground/30"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? 24 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link block"
                >
                  <div 
                    className="w-14 h-14 flex items-center justify-center font-display text-xl tracking-wider border transition-all duration-500 relative cursor-pointer"
                    style={{ 
                      borderColor: isHovered ? `${item.color}50` : 'rgba(255,255,255,0.1)',
                      backgroundColor: isHovered ? `${item.color}15` : `${item.color}08`,
                    }}
                  >
                    <span 
                      className="transition-all duration-300"
                      style={{ color: isHovered ? item.color : `${item.color}90` }}
                    >
                      {item.icon}
                    </span>
                    <motion.div
                      className="absolute -top-1 -right-1 opacity-0 group-hover/link:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={12} style={{ color: item.color }} />
                    </motion.div>
                  </div>
                </a>
              ) : (
                <div 
                  className="w-14 h-14 flex items-center justify-center font-display text-xl tracking-wider border transition-all duration-500"
                  style={{ 
                    borderColor: isHovered ? `${item.color}50` : 'rgba(255,255,255,0.1)',
                    backgroundColor: isHovered ? `${item.color}15` : `${item.color}08`,
                  }}
                >
                  <span 
                    className="transition-all duration-300"
                    style={{ color: isHovered ? item.color : `${item.color}90` }}
                  >
                    {item.icon}
                  </span>
                </div>
              )}
              
              {/* Pulse ring on hover */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 border"
                  style={{ borderColor: `${item.color}40` }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Category badge */}
            <motion.span 
              className="text-xs tracking-[0.15em] uppercase px-3 py-1.5 border transition-all duration-300"
              animate={{
                borderColor: isHovered ? `${item.color}40` : 'rgba(255,255,255,0.1)',
                color: isHovered ? item.color : 'rgba(255,255,255,0.4)',
              }}
            >
              {item.category}
            </motion.span>
          </div>

          {/* Name & Level */}
          <div className="mb-6">
            <h3 className="font-display text-xl tracking-wider mb-2 transition-colors duration-300 group-hover:text-white">
              {item.name}
            </h3>
            <div className="flex items-baseline gap-1">
              <motion.span 
                className="font-display text-4xl transition-colors duration-300"
                style={{ color: isHovered ? item.color : 'rgba(255,255,255,0.85)' }}
              >
                {item.level}
              </motion.span>
              <span className="text-muted text-lg">%</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-3">
            <div className="h-px bg-border/40 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                className="h-full relative"
                style={{ backgroundColor: item.color }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`
                  }}
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '200%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.6 }}
                />
              </motion.div>
            </div>

            {/* Skill level indicator */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted tracking-wider uppercase">
                {item.level >= 95 ? 'Master' : item.level >= 90 ? 'Expert' : item.level >= 80 ? 'Advanced' : 'Proficient'}
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <motion.div 
                    key={dot}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + dot * 0.06 }}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: dot <= Math.ceil(item.level / 20) 
                        ? (isHovered ? item.color : 'rgba(255,255,255,0.5)') 
                        : 'rgba(255,255,255,0.1)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom animated line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ backgroundColor: item.color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}
