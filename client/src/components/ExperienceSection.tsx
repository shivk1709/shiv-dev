import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Contemi Trading Solutions Pvt. Ltd.",
    location: "Noida, Uttar Pradesh, India",
    duration: "Apr 2024 - Present",
    current: true,
    responsibilities: [
      "Developed 7+ Java Spring Boot microservices for a core financial platform",
      "Built and optimized REST APIs using Spring Boot, JPA, and Caffeine cache",
      "Migrated legacy business logic from VB/C++ to Java, improving maintainability",
      "Implemented Kafka for asynchronous communication across services",
      "Containerized services using Docker and managed them with Kubernetes",
      "Utilized AWS EC2 and S3 for deployment and storage requirements",
      "Wrote unit tests with Mockito, improving test coverage and code quality",
    ],
  },
  {
    id: 2,
    title: "Application Development Analyst",
    company: "Accenture Solutions",
    location: "Noida, Uttar Pradesh, India",
    duration: "Feb 2021 – Apr 2024",
    current: false,
    responsibilities: [
      "Built and maintained 12+ Java Spring Boot microservices for enterprise applications",
      "Improved microservice performance via API Gateway and optimized communication",
      "Resolved 98% of bugs reported in QA and UAT, improving product quality",
      "Containerized and deployed services using Docker and Kubernetes",
      "Integrated CI/CD pipelines using Jenkins and ensured seamless deployments",
      "Worked with Kafka for event-driven architecture and async messaging",
      "Maintained high unit test coverage using Mockito and JUnit",
    ],
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="experience-title"
          >
            grep -r "experience" career.json
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: any;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-8 font-mono text-sm hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      data-testid={`experience-card-${index}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-secondary">
            {experience.title}
          </h3>
          <p className="text-accent">{experience.company}</p>
          <p className="text-muted-foreground">{experience.location}</p>
        </div>
        <span
          className={`px-3 py-1 rounded text-xs flex-shrink-0 ${
            experience.current
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
          data-testid={`experience-duration-${index}`}
        >
          {experience.duration}
        </span>
      </div>

      <div className="space-y-2">
        <div>
          <span className="json-key">"responsibilities"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-bracket">[</span>
        </div>
        {experience.responsibilities.map((resp: string, respIndex: number) => (
          <div key={respIndex} className="ml-4">
            <span className="json-string">"{resp}"</span>
            {respIndex < experience.responsibilities.length - 1 && (
              <span className="json-bracket">,</span>
            )}
          </div>
        ))}
        <div>
          <span className="json-bracket">]</span>
        </div>
      </div>
    </div>
  );
}
