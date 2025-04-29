
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Portfolio
            </a>
            <p className="text-foreground/60 mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <p>© {currentYear} Yuvraj Singh. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
