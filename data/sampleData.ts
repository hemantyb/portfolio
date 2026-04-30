import type { Project } from "@/types";

export const projects: Project[] = [
	{
		id: 1,
		title: "AI-Powered Microservice Fitness Application",
		shortDescription:
			"A full-stack AI fitness application with a microservices architecture.",
		longDescription:
			"Developed a comprehensive full-stack AI fitness application designed to provide personalized workout and nutrition recommendations. The application leverages a robust microservices architecture, enabling scalable and maintainable development. It integrates advanced AI models for intelligent recommendations, handles real-time messaging, and ensures secure data management across various services.",
		technologiesUsed: [
			"Spring Boot",
			"Spring Data JPA",
			"Hibernate",
			"PostgreSQL",
			"MongoDB",
			"RabbitMQ",
			"React",
			"AI/ML",
			"Docker",
			"Kubernetes",
		],
		features: [
			"Personalized AI-driven workout and nutrition plans",
			"Microservices architecture for scalability",
			"RESTful APIs for seamless communication",
			"Secure user authentication and authorization",
			"Real-time messaging for notifications",
			"Service discovery for dynamic service management",
			"Data persistence with SQL and NoSQL databases",
		],
		tags: [
			"Spring Boot",
			"Microservices",
			"AI",
			"React",
			"Full-stack",
			"Docker",
		],
		image: "",
		githubUrl: "https://github.com/hemantyb/fitness-microservices",
		// liveDemoUrl: "https://fitness-app-demo.example.com",
	},
	{
		id: 2,
		title: "Patient Management System",
		shortDescription:
			"An efficient system for managing patient records and information.",
		longDescription:
			"Created a Patient Management System to efficiently manage patient records, appointments, and medical history. The system ensures data integrity and facilitates robust storage and secure communication of sensitive patient information. It features a user-friendly interface for healthcare providers to easily access and update patient data.",
		technologiesUsed: ["Java", "Spring Boot", "gRPC", "Postgres", "React"],
		features: [
			"Secure patient record management",
			"Appointment scheduling and tracking",
			"Medical history logging",
			"Data integrity and validation",
			"gRPC for high-performance communication",
			"Role-based access control",
		],
		tags: ["Java", "Spring Boot", "gRPC", "Postgres", "Healthcare"],
		image: "",
		githubUrl: "https://github.com/hemantyb/patient-management-system",
	},
	{
		id: 3,
		title: "Rate Limitter",
		shortDescription:
			"An API rate limiter to protect backend services from excessive requests.",
		longDescription:
			"Developed an API rate limiter designed to protect backend services from excessive requests and potential abuse. This middleware ensures fair resource allocation, prevents denial-of-service attacks, and maintains API stability by controlling the flow of incoming traffic based on predefined limits. It supports various rate limiting algorithms and can be easily integrated into existing API gateways.",
		technologiesUsed: ["Go", "Redis", "Middleware"],
		features: [
			"Token bucket algorithm implementation",
			"Configurable rate limits per API endpoint",
			"Distributed rate limiting with Redis",
			"Protection against brute-force attacks",
			"High performance and low latency",
			"Easy integration as a middleware",
		],
		tags: ["Go", "Middleware", "Rate Limiting", "API Security"],
		image: "",
		githubUrl: "https://github.com/hemantyb/ratelimiter-go",
	},
];
