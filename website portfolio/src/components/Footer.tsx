import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl tracking-wider mb-4">REEK</h2>
            <p className="text-muted max-w-md">
              Premium video editing and post-production services. Transforming raw footage into cinematic masterpieces.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl tracking-wider mb-4">NAVIGATION</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
              <Link to="/works" className="text-muted hover:text-foreground transition-colors">Works</Link>
              <Link to="/about" className="text-muted hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl tracking-wider mb-4">CONNECT</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">© 2024 REEK. All rights reserved.</p>
          <p className="text-muted text-sm">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}
