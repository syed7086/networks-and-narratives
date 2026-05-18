import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "ai-medical-diagnosis-tool",
    title: "AI Medical Diagnosis Tool",
    category: "ai & ml",
    status: "complete",
    tools: ["Python", "FastAPI", "Streamlit"],
    summary:
      "End-to-end AI assistant with Streamlit frontend and FastAPI backend integrated with Google Gemini for structured medical query processing and validated JSON responses.",
    bullets: [
    "Developed a full-stack AI assistant using Streamlit and FastAPI",
    "Integrated Google Gemini for structured medical query analysis and response generation",
    "Implemented parsing and re-validation pipeline to ensure JSON consistency and schema accuracy"
    ],
    links: {
      github: "https://github.com/syed7086/ai-medical-diagnosis.git",
      demo: null,
    },
    featured: true,
  },
  {
    id: "dsa-python",
    title: "Data Structures & Algorithms in Python",
    category: "lab",
    status: "in_progress",
    tools: ["Python", "Algorithms", "Data Structures"],
    summary:
      "Collection of Python implementations for essential data structures and algorithms focused on problem-solving practice and technical interview preparation.",
    bullets: [
    "Implemented core data structures including arrays, linked lists, stacks, queues, trees, and graphs",
    "Solved algorithmic problems covering sorting, searching, recursion, and dynamic programming",
    "Built as an ongoing reference repository for interview preparation and DSA practice",
    ],
    links: {
      github: "https://github.com/syed7086/Python_DSA.git",
      demo: null,
    },
    featured: true,
  },
  {
    id: "dhcp-dns-services",
    title: "DHCP & DNS Services Lab",
    category: "networking",
    status: "complete",
    tools: ["Packet Tracer", "DHCP", "DNS"],
    summary:
      "End-to-end IP services lab with DHCP pools, DNS resolution, and NAT/PAT edge routing.",
    bullets: [
      "Centralized DHCP with excluded addresses for static hosts",
      "Internal DNS records for service discovery",
      "NAT overload on edge router for outbound connectivity",
    ],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    featured: false,
  },
];
