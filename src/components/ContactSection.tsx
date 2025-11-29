import { ArrowUpRight, Radio, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import batSignal from "@/assets/bat-signal.jpg";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={batSignal} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
              The Signal
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
              CALL THE
              <br />
              <span className="text-gradient">DARK KNIGHT</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12 max-w-md tracking-wide">
              When Gotham needs its guardian, light the signal. 
              I'll be watching from the shadows.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Radio size={24} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-body text-muted-foreground block tracking-wider uppercase">Frequency</span>
                  <span className="font-body text-foreground group-hover:text-primary transition-colors tracking-wider">GCPD ROOFTOP</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-body text-muted-foreground block tracking-wider uppercase">Location</span>
                  <span className="font-body text-foreground group-hover:text-primary transition-colors tracking-wider">GOTHAM CITY</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6 gotham-card p-8">
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.2em] uppercase">Codename</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors tracking-wide"
                  placeholder="Commissioner Gordon"
                />
              </div>
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.2em] uppercase">Secure Channel</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors tracking-wide"
                  placeholder="gcpd@gotham.gov"
                />
              </div>
              <div>
                <label className="text-xs font-body text-muted-foreground mb-2 block tracking-[0.2em] uppercase">Intelligence Report</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none tracking-wide"
                  placeholder="Report suspicious activity..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 bg-primary text-primary-foreground font-display text-lg tracking-[0.2em] transition-all duration-300 glow-gold"
                whileHover={{ scale: 1.02, boxShadow: "0 0 60px hsl(45 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                LIGHT THE SIGNAL
                <ArrowUpRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
