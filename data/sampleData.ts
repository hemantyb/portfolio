import { BlogPost, Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Patient Management System",
    description:
      "Created a Patient Management System to efficiently manage patient records. The system ensures data integrity and facilitates robust storage and communication of patient information.",
    tags: ["Java", "Spring Boot", "gRPC", "Postgres"],
    image: "",
  },
  {
    id: 2,
    title: "Rate Limitter",
    description:
      "Developed an API rate limiter to protect backend services from excessive requests. It ensures fair resource allocation, prevents abuse, and maintains API stability by controlling traffic flow.",
    tags: ["Go", "Middleware"],
    image: "",
  },
  {
    id: 3,
    title: "Archive-rs",
    description:
      "Developed a utility to efficiently compress and decompress files. It currently handles gzip archives, with future plans to expand support for other common compression formats like tar and zip.",
    tags: ["Rust"],
    image: "",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components",
    content:
      "React Hooks revolutionized how we write React components by allowing us to use state and lifecycle features in functional components. The useState hook lets you add state to functional components, while useEffect replaces lifecycle methods like componentDidMount and componentDidUpdate. Other useful hooks include useContext for accessing context, useReducer for more complex state logic, and useCallback/useMemo for performance optimization.",
    date: "2025-06-20",
    readTime: "2 min read",
  },
];
