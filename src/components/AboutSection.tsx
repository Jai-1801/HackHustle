import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import batmanLogo from "@/assets/batman-logo.png";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
              The Event
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-8">
              HACK HUSTLE
              <br />
              <span className="text-gradient">CODE KNIGHT</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6 tracking-wide">
              Join us for an epic 24-hour hackathon where innovation meets competition. 
              Battle across three cutting-edge domains and create solutions that shape the future.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed tracking-wide">
              Choose your battlefield—FinTech, HealthTech, or EdTech—and compete for exciting 
              prizes while building the next generation of technology.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-none bg-gradient-to-br from-bat-dark to-bat-black overflow-hidden relative group gotham-card">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Batman logo center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px hsl(45 100% 50% / 0.2)",
                      "0 0 80px hsl(45 100% 50% / 0.4)",
                      "0 0 40px hsl(45 100% 50% / 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img 
                    src={batmanLogo} 
                    alt="Batman Symbol" 
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
