
import { Progress } from "@/components/ui/progress";

// Skill sets
const frontendSkills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 92 }
];

const designSkills = [
  { name: "UI/UX Design", level: 88 },
  { name: "Figma", level: 85 },
  { name: "Adobe XD", level: 75 },
  { name: "Illustration", level: 70 }
];

const otherSkills = [
  { name: "Backend Development", level: 75 },
  { name: "Git & Version Control", level: 85 },
  { name: "Responsive Design", level: 95 },
  { name: "Performance Optimization", level: 80 }
];

const SkillCard = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => {
  return (
    <div className="glass rounded-xl p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground/90">{skill.name}</span>
              <span className="text-primary font-semibold">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I specialize in frontend development and UI/UX design, with a strong foundation 
            in various technologies and tools that enable me to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} />
          <SkillCard title="Design" skills={designSkills} />
          <SkillCard title="Other Skills" skills={otherSkills} />
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Technologies I work with</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Figma', 'Node.js', 'Git', 'Redux'].map((tech) => (
              <div 
                key={tech}
                className="glass px-6 py-3 rounded-full text-foreground/90 hover:text-primary hover:shadow-lg transition-all" 
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






