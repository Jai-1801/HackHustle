import { ArrowUpRight, Shield, Brain, Sword, Eye, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "FinTech",
    description: "Revolutionize the financial industry with innovative payment systems, blockchain solutions, and smart banking applications.",
    icon: Cpu,
  },
  {
    title: "HealthTech",
    description: "Transform healthcare delivery with telemedicine platforms, AI diagnostics, and patient management systems.",
    icon: Shield,
  },
  {
    title: "EdTech",
    description: "Shape the future of learning with interactive platforms, personalized education tools, and digital classrooms.",
    icon: Brain,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="domains" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
            What We're Building
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            DOMAINS
            <br />
            <span className="text-gradient">& INNOVATION</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body max-w-xl tracking-wide">
            Choose your battlefield and create innovative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 gotham-card hover-lift cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
                <h3 className="text-xl font-display mb-3 group-hover:text-primary transition-colors tracking-wider">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
