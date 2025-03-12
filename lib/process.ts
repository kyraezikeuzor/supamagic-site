export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Identify the Problem Areas",
    description: "We analyze your current site or app to find issues in design, user experience, and functionality."
  },
  {
    number: 2,
    title: "Design & Development",
    description: "Our team creates a custom solution that addresses your specific needs and goals."
  },
  {
    number: 3,
    title: "Launch & Optimize",
    description: "We deploy your solution and continuously optimize for peak performance."
  },
  {
    number: 4,
    title: "Regular Updates",
    description: "We keep your site fresh with regular content updates, security patches, and performance improvements."
  },
  {
    number: 5,
    title: "User Feedback & Iteration",
    description: "We gather user feedback and analytics to make data-driven improvements to your site."
  }
]; 