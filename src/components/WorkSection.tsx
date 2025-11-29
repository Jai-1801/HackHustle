import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import gothamRooftop from "@/assets/gotham-rooftop.jpg";
import batSignal from "@/assets/bat-signal.jpg";
import batmanHero from "@/assets/batman-hero.jpg";

const projects = [
  {
    title: "Registration Opens",
    category: "01st October 2024",
    year: "Start",
    image: gothamRooftop,
  },
  {
    title: "Hackathon Starts",
    category: "08th November 2024",
    year: "24 Hours",
    image: batSignal,
  },
  {
    title: "Final Presentations",
    category: "09th November 2024",
    year: "Winners",
    image: batmanHero,
  },
];

export const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
              Event Schedule
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TIMELINE
              <br />
              <span className="text-gradient">& MILESTONES</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-body font-semibold link-underline self-start tracking-wider"
          >
            Register Now
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer gotham-card"
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bat-black via-bat-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-primary/0 group-hover:border-primary/60 transition-colors duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-body text-primary/80 tracking-[0.2em] uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-body text-muted-foreground tracking-wider">
                    {project.year}
                  </span>
                </div>
                
                <div className="flex items-end justify-between">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-display tracking-wider group-hover:text-primary transition-colors"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="w-12 h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight 
                      size={20} 
                      className="text-primary group-hover:text-primary-foreground transition-colors" 
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
