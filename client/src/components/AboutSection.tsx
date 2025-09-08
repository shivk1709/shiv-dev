import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ExperienceCounter from "./ExperienceCounter";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4x2 mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-8 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="about-title"
          >
            cat about.json
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className={`lg:col-span-2 bg-card border border-border rounded-lg p-8 font-mono text-sm hover-glow section-fade ${
                isVisible ? "visible" : ""
              }`}
              data-testid="about-content"
            >
              <div className="space-y-2">
                <div>
                  <span className="json-bracket">{`{`}</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"name"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">"Shiv Kumar Sharma"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"title"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">"Software Engineer"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"experience"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-value">"4+ years"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"description"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">
                    "Experienced Software Engineer with 4+ years of expertise in designing and delivering scalable Java Spring Boot Microservices and Cloud-native applications. Proficient in RESTful API development, Kafka messaging, Docker containerization, and Kubernetes orchestration. Hands-on experience with AWS services (EC2, S3) and CI/CD pipelines using Jenkins. Strong background in software architecture, backend optimization, and Agile delivery."
                  </span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"strengths"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-bracket">[</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"REST API Development"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Microservices Architecture"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Containerization & DevOps"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Cloud Deployment (AWS)"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Automated Testing & CI/CD"</span>
                </div>
                <div className="ml-4">
                  <span className="json-bracket">]</span>
                </div>
                <div>
                  <span className="json-bracket">{`}`}</span>
                </div>
              </div>
            </div>

            <div
              className={`section-fade ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <ExperienceCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
