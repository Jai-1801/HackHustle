import { motion } from "framer-motion";

export const BatSignal = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Bat signal light beam */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, transparent 45%, hsl(45 100% 50% / 0.1) 50%, transparent 55%)`,
        }}
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] animate-bat-signal" />
      
      {/* Lightning flash */}
      <motion.div
        className="absolute inset-0 bg-primary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.3, 0, 0.1, 0] }}
        transition={{ duration: 10, repeat: Infinity, times: [0, 0.4, 0.42, 0.44, 0.46, 1] }}
      />
    </div>
  );
};
