import batmanLogo from "@/assets/batman-logo.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Prizes", href: "#prizes" },
  { name: "Domains", href: "#domains" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const allies = [
  { name: "Sponsors", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Organizers", href: "#" },
  { name: "Volunteers", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-bat-black to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={batmanLogo} alt="Hack Hustle" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-3xl font-display tracking-[0.15em] text-foreground leading-none">HACK HUSTLE</span>
                <span className="text-xs font-body tracking-[0.1em] text-primary/80 mt-1">Code Knight</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body max-w-sm tracking-wide leading-relaxed">
              Join us for an epic 24-hour hackathon. Compete across three domains 
              and create innovative solutions that shape the future.
            </p>
          </div>
          
          <div>
            <span className="text-xs font-body text-primary tracking-[0.3em] mb-4 block uppercase">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-body text-foreground hover:text-primary transition-colors link-underline tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-xs font-body text-primary tracking-[0.3em] mb-4 block uppercase">
              Community
            </span>
            <ul className="space-y-2">
              {allies.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-body text-foreground hover:text-primary transition-colors link-underline tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10 gap-4">
          <span className="text-xs font-body text-muted-foreground tracking-wider">
            © Hack Hustle 2026. Saveetha Engineering College.
          </span>
          <span className="text-xs font-body text-primary/60 tracking-[0.2em]">
            CODE THE FUTURE
          </span>
        </div>
      </div>
    </footer>
  );
};
