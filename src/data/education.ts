import type { EducationEntry } from "@/types/content";

export const education: EducationEntry[] = [
  {
    id: "diploma",
    degree: "Diploma in Computer Science & Engineering",
    school: "Galgotias University",
    period: "2019 – 2022",
    highlights: [
      "Coursework: computer networks, data structures & algorithms, database management systems",
      "Porject focussed on building a Hand Sign Language Recognition System using machine learning techniques.",
    ],
  },
  {
    id: "btech",
    degree: "B.Tech Computer Engineering",
    school: "Bharati Vidyapeeth University",
    period: "2022 – 2025",
    highlights: [
      "Coursework: computer networks, routing protocols, network security",
      "Worked on a capstone project centered around building an EHR platform for universities dental college. The project also received a university grant in recognition of its potential impact and innovation.",
    ],
  },
  {
    id: "ccna-prep",
    degree: "CCNA Certification (In Progress)",
    school: "Cisco Networking Academy",
    period: "2026 – Present",
    highlights: [
      "Routing & switching fundamentals, IP services, security basics",
      "Hands-on labs in Packet Tracer and practice exams",
    ],
  },
];
