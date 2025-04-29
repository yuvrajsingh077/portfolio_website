
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Professional certification for designing distributed systems on AWS",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "2023",
    description: "Advanced certification in modern web development technologies",
    url: "https://www.coursera.org/professional-certificates/meta-full-stack-engineer"
  },
  {
    id: 3,
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2023",
    description: "Certification in Agile project management and Scrum frameworks",
    url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification"
  },
  {
    id: 4,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    description: "Expertise in designing, building, and maintaining data processing systems",
    url: "https://cloud.google.com/certification/data-engineer"
  },
  {
    id: 5,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    description: "Advanced certification in Kubernetes cluster administration and management",
    url: "https://www.cncf.io/certification/cka/"
  },
  {
    id: 6,
    title: "Advanced React Development Certification",
    issuer: "Udacity",
    date: "2023",
    description: "In-depth certification covering advanced React.js development techniques",
    url: "https://www.udacity.com/course/react-nanodegree--nd019"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="glass group hover:-translate-y-2 transition-transform duration-300" data-aos>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-primary" />
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary mb-2">{cert.issuer}</p>
                <p className="text-sm text-foreground/80 mb-2">{cert.description}</p>
                <p className="text-sm text-foreground/60 mb-4">{cert.date}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Certificate <ExternalLink className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
