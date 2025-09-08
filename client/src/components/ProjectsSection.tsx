import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    id: 1,
    name: "SLMS",
    type: "School Learning Management System",
    features: [
      "Java Spring Boot backend for core functionality",
      "JWT-based role authorization for secure access",
      "Kafka for event streaming and async messaging",
      "CQRS pattern to separate commands and queries",
    ],
  },
  {
    id: 2,
    name: "Ntier",
    type: "Financial Trading Platform",
    features: [
      "Java Spring Boot microservices with Ntier architecture",
      "REST APIs optimized with Caffeine cache",
      "Kafka integration for asynchronous messaging",
      "JUnit and Mockito for unit testing reliability",
    ],
  },
  {
    id: 3,
    name: "CoinConvert",
    type: "Currency Conversion System",
    features: [
      "Spring Boot microservices for currency conversion",
      "Eureka naming server enables service discovery",
      "MySQL for optimized data storage and retrieval",
      "High-performance API endpoints with caching",
    ],
  },
  {
    id: 4,
    name: "SocialPulse",
    type: "Social Media Platform",
    features: [
      "Microservices-based backend using Spring Boot",
      "Eureka server for service registry and discovery",
      "Mockito tests ensure code reliability",
      "API Gateway streamlines inter-service communication",
    ],
  },
  {
    id: 5,
    name: "HotelVista",
    type: "Hotel Ratings Management",
    features: [
      "Spring Boot microservices for ratings management",
      "Spring Security ensures secure user authentication",
      "REST APIs for accessing and managing data",
      "Docker & Kubernetes for scalable deployment",
    ],
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="projects-title"
          >
            ls -la projects/
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
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

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: any;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 font-mono text-sm hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-testid={`project-card-${index}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-secondary mb-2">
          {project.name}
        </h3>
        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
          {project.type}
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <span className="json-key">"features"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-bracket">[</span>
        </div>
        {project.features.map((feature: string, featureIndex: number) => (
          <div key={featureIndex} className="ml-4">
            <span className="json-string">"{feature}"</span>
            {featureIndex < project.features.length - 1 && (
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
