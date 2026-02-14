export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Spring Boot backend and React frontend. Features include user authentication, product catalog, shopping cart, and payment integration with Stripe API.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Stripe API"],
    githubUrl: "https://github.com/raseeth/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced task tracking. Built with microservices architecture and deployed on AWS.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "AWS", "WebSocket"],
    githubUrl: "https://github.com/raseeth/task-management"
  },
  {
    id: 3,
    title: "Cloud-Based File Storage",
    description: "A secure file storage and sharing platform with user authentication, file versioning, and access control. Implemented with cloud-native architecture using AWS services.",
    technologies: ["Java", "Spring Cloud", "React", "AWS S3", "Lambda", "DynamoDB"],
    githubUrl: "https://github.com/raseeth/cloud-storage"
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "An interactive dashboard for visualizing business metrics and KPIs. Features real-time data processing, custom charts, and automated report generation.",
    technologies: ["Spring Boot", "React", "D3.js", "Apache Kafka", "Redis", "MySQL"],
    githubUrl: "https://github.com/raseeth/analytics-dashboard"
  },
  {
    id: 5,
    title: "API Gateway & Microservices",
    description: "A scalable microservices architecture with API gateway, service discovery, and distributed monitoring. Containerized with Docker and orchestrated using Kubernetes.",
    technologies: ["Spring Boot", "Spring Cloud Gateway", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/raseeth/microservices-gateway"
  }
];