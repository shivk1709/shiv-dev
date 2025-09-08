import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skillCategories = [
  {
    id: 1,
    title: "Backend Development",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Microservices", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Kafka", level: 80 },
    ],
  },
  {
    id: 2,
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS (EC2, S3)", level: 75 },
      { name: "Jenkins (CI/CD)", level: 70 },
    ],
  },
  {
    id: 3,
    title: "Frontend Development",
    skills: [
      { name: "React", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Bootstrap", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "AJAX", level: 55 },
    ],
  },
  {
    id: 4,
    title: "Other Skills",
    skills: [
      { name: "Teamwork", level: 85 },
      { name: "Critical Thinking", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Agile Development", level: 80 },
      { name: "Client Communication", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills((prev) => new Set(prev).add(`${category.id}-${skillIndex}`));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="skills-title"
          >
            cat skills.json | jq '.'
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategory
                key={category.id}
                category={category}
                categoryIndex={categoryIndex}
                isVisible={isVisible}
                animatedSkills={animatedSkills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  categoryIndex,
  isVisible,
  animatedSkills,
}: {
  category: any;
  categoryIndex: number;
  isVisible: boolean;
  animatedSkills: Set<string>;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-8 hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${categoryIndex * 200}ms` }}
      data-testid={`skill-category-${categoryIndex}`}
    >
      <h3 className="text-xl font-semibold text-secondary mb-6 font-mono">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillBar
            key={skillIndex}
            skill={skill}
            categoryId={category.id}
            skillIndex={skillIndex}
            isAnimated={animatedSkills.has(`${category.id}-${skillIndex}`)}
          />
        ))}
      </div>
    </div>
  );
}

function SkillBar({
  skill,
  categoryId,
  skillIndex,
  isAnimated,
}: {
  skill: any;
  categoryId: number;
  skillIndex: number;
  isAnimated: boolean;
}) {
  return (
    <div data-testid={`skill-${categoryId}-${skillIndex}`}>
      <div className="flex justify-between mb-2">
        <span className="json-key font-mono text-sm">{skill.name}</span>
        <span className="json-value font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="bg-muted rounded-full h-2">
        <div
          className="skill-bar"
          style={{
            width: isAnimated ? `${skill.level}%` : "0%",
          }}
          data-testid={`skill-bar-${categoryId}-${skillIndex}`}
        />
      </div>
    </div>
  );
}
