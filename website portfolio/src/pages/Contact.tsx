import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              CONTACT
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl tracking-wider mb-8">
                GET IN TOUCH
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:hello@reek.studio" className="text-muted hover:text-foreground transition-colors">
                      hello@reek.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted hover:text-foreground transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted">Los Angeles, California</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl tracking-wider mb-4">FOLLOW US</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground hover:bg-foreground hover:text-background transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-12 p-8 bg-card border border-border">
                <h3 className="font-display text-xl tracking-wider mb-4">WORKING HOURS</h3>
                <div className="space-y-2 text-muted">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border border-border"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="font-display text-3xl tracking-wider mb-4">MESSAGE SENT</h2>
                  <p className="text-muted">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2">Project Type</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="" className="bg-background">Select project type</option>
                      <option value="film" className="bg-background">Film / Short Film</option>
                      <option value="commercial" className="bg-background">Commercial / Ad</option>
                      <option value="music" className="bg-background">Music Video</option>
                      <option value="documentary" className="bg-background">Documentary</option>
                      <option value="social" className="bg-background">Social Media Content</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-4 font-medium tracking-wider hover:bg-accent transition-colors flex items-center justify-center gap-2"
                  >
                    SEND MESSAGE <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
