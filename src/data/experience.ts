import type { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    id: "fulltime-role",
    role: "Software Test Engineer",
    company: "Vidya Mantra Edusystems Pvt. Ltd.",
    period: "Dec 2025 – Present",
    bullets: [
      "Developed and executed test cases for an in-house SaaS application, validated SQL queries for data integrity, and performed performance testing using JMeter.",
      "Utilised Charles Proxy and Fiddler to monitor, analyse, and modify network traffic for verifying server-side validations and configured virtual hosts on Linux systems for web hosting.",
      "Collaborated cross-functionally with development teams on business decisions during the SaaS application lifecycle, ensuring product reliability and quality.",

    ],
  },
  {
    id: "intern",
    role: "Research Intern",
    company: "CDAC, Pune",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "As part of the project, our team needed a diverse Urdu language corpus to train an ASR model; existing datasets lacked sufficient diversity in linguistic styles and contexts.",
      "Led the creation of the Urdu corpus, strategically sourcing text from social media, books, and other relevant resources.",
      "Used Python and Pandas to clean, preprocess, and structure the data for further processing and implemented a pipeline to ensure consistency"
    ],
  },
];
