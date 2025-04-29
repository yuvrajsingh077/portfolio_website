
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary mb-4 opacity-0 animate-fade-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
              <span className="text-gradient">Yuvraj Singh   </span>
              <br />
              <span >
                <Typewriter
                  words={['Developer', 'UI/UX Enthusiast', 'Software Tester']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl opacity-0 animate-fade-up animation-delay-400">
              I craft visually stunning digital experiences with a focus on motion,
              interaction, and cutting-edge web technologies.
            </p>
            <div className="space-x-4 opacity-0 animate-fade-up animation-delay-600">
              <a href="https://github.com/yuvrajsingh077" target="_blank">
                <Button className="bg-primary hover:bg-primary/90 text-lg py-6 px-8">
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="text-lg py-6 px-8 border-white/10 hover:bg-white/5">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-up animation-delay-400">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 max-w-sm mx-auto">
              <img
                src="img.jpeg"
                alt="Yuvraj Singh"
                className="w-full h-auto object-cover scale-95 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg bg-primary/30 -z-10 animate-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-primary/30 -z-10 animate-glow glow-animation"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

