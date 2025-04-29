
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-foreground/80 mb-6 text-lg">
            Hey there! I’m Yuvraj Singh, a curious, creative, and solution-oriented Computer Science Engineering student currently pursuing my B.Tech from Lovely Professional University. My journey into tech began with a fascination for how things work — from the logic behind algorithms to the design of intuitive user interfaces — and has since evolved into a passion for building impactful digital solutions.

I specialize in both development and analytics, which allows me to bridge the gap between data and design. With programming skills in Python, Java, and R, and experience in SQL, Tableau, Excel, and tools like Firebase and R Studio, I love bringing ideas to life through a combination of logic and creativity. I’m also comfortable with HTML and CSS, and always looking to refine my full-stack development skills.

What sets me apart is my ability to adapt quickly, work collaboratively, and lead with empathy — whether I’m managing a project, learning a new framework, or collaborating with a team. I’ve completed certifications from Coding Blocks, Coursera, NeoColab, and NPTEL, which have helped me stay up-to-date with evolving technologies and best practices.
          </p>
            
            <p className="text-foreground/80 mb-8 text-lg">
            I'm also a huge believer in balance. Outside of tech, I'm an avid sports enthusiast. I’ve represented my school and region in national-level football and state-level basketball, and those experiences have taught me the value of teamwork, discipline, and resilience — qualities I bring into every line of code I write.

My goal is simple: keep learning, keep building, and keep contributing to projects that solve real-world problems. Whether it's a data-driven decision-making tool or a sleek, responsive website, I'm always excited to take on new challenges and grow from them.

If you’re someone who loves to innovate, collaborate, or just chat about tech, I’d love to connect!
             </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              {/* <div>
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">30+</h3>
                <p className="text-foreground/70">Happy Clients</p>
              </div> */}
            </div>
            
            <a href="Yuvraj Final CV.pdf" download>
  <Button className="bg-primary hover:bg-primary/90">Download CV</Button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
