import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Gift, TrendingUp, Code, Heart, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const prizes = [
  { 
    amount: "₹20,000", 
    title: "Grand Winner", 
    description: "The ultimate champion takes home the grand prize. Recognition, glory, and rewards await.",
    icon: Trophy,
    color: "primary",
    size: "large"
  },
  { 
    amount: "₹15,000", 
    title: "First Runner-Up", 
    description: "Excellence deserves recognition. Second place earns significant rewards.",
    icon: Award,
    color: "primary",
    size: "large"
  },
  { 
    amount: "Special", 
    title: "FinTech Champion", 
    description: "Best innovation in financial technology. Leading the future of finance.",
    icon: TrendingUp,
    color: "gotham-blue",
    size: "medium"
  },
  { 
    amount: "Special", 
    title: "HealthTech Champion", 
    description: "Revolutionary healthcare solutions. Making a difference in medical technology.",
    icon: Heart,
    color: "gotham-blue",
    size: "medium"
  },
  { 
    amount: "Special", 
    title: "EdTech Champion", 
    description: "Transforming education through technology. Empowering the next generation.",
    icon: GraduationCap,
    color: "gotham-blue",
    size: "medium"
  },
  { 
    amount: "Swags", 
    title: "All Participants", 
    description: "Exclusive merchandise, t-shirts, stickers, and goodies for everyone who participates.",
    icon: Gift,
    color: "primary",
    size: "small"
  },
];

export const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px] bg-primary/5 blur-[200px]" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[600px] bg-gotham-blue/10 blur-[150px]" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] mb-4 block uppercase">
            The Rewards
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6">
            PRIZES &amp;
            <br />
            <span className="text-gradient">RECOGNITION</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto tracking-wide text-lg">
            Compete for exciting prizes and recognition across all domains. 
            Top performers will be celebrated and rewarded for their innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const isLarge = prize.size === "large";
            const isMedium = prize.size === "medium";
            
            return (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden bg-card/60 backdrop-blur-sm border-2 rounded-lg p-8 hover:bg-card/80 transition-all duration-500 hover-lift",
                  prize.color === "primary" ? "border-primary/30 hover:border-primary/60" : "border-gotham-blue/30 hover:border-gotham-blue/60",
                  isLarge && "md:col-span-1"
                )}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  prize.color === "primary" ? "bg-gradient-to-br from-primary/5 to-transparent" : "bg-gradient-to-br from-gotham-blue/5 to-transparent"
                )} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn(
                      "p-4 border-2 rounded-lg",
                      prize.color === "primary" ? "bg-primary/10 border-primary/40" : "bg-gotham-blue/10 border-gotham-blue/40"
                    )}>
                      <Icon className={cn(
                        "w-8 h-8",
                        prize.color === "primary" ? "text-primary" : "text-gotham-blue"
                      )} />
                    </div>
                    
                    <div className="text-right">
                      <div className={cn(
                        "text-3xl md:text-4xl font-display font-bold tracking-wider",
                        prize.color === "primary" ? "text-primary" : "text-gotham-blue"
                      )}>
                        {prize.amount}
                      </div>
                      {isLarge && (
                        <div className="text-xs text-muted-foreground font-body tracking-wider mt-1">
                          CASH PRIZE
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className={cn(
                    "font-display mb-3 tracking-wide",
                    isLarge ? "text-2xl md:text-3xl" : isMedium ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                  )}>
                    {prize.title}
                  </h3>
                  
                  <p className="text-foreground/70 font-body tracking-wide leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                {/* Hover Line Effect */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                  prize.color === "primary" ? "bg-gradient-to-r from-primary to-primary/50" : "bg-gradient-to-r from-gotham-blue to-gotham-blue/50"
                )} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
