import type { CcnaProgressItem } from "@/types/content";

export const ccnaProgress: CcnaProgressItem[] = [
  {
    id: "network-fundamentals",
    title: "01. Network Fundamentals",
    status: "IN_PROGRESS",
    progress: 45,
    description:
      "Studying core CCNA concepts including networking models, TCP/IP, OSI layers, Ethernet fundamentals, cabling, switches, and IPv4 subnetting.",
  },
  {
    id: "switching-basics",
    title: "02. Switching & VLAN Basics",
    status: "IN_PROGRESS",
    progress: 25,
    description:
      "Learning MAC address tables, switch operations, VLAN concepts, trunking, and basic inter-VLAN communication.",
  },
  {
    id: "ip-addressing",
    title: "03. IP Addressing & Subnetting",
    status: "IN_PROGRESS",
    progress: 55,
    description:
      "Practicing IPv4 addressing, subnet calculations, CIDR notation, default gateways, and foundational IPv6 concepts.",
  },
  {
    id: "routing-introduction",
    title: "04. Routing Fundamentals",
    status: "PLANNED",
    progress: 0,
    description:
      "Preparing to study router operations, static routing, default routes, and dynamic routing protocols like OSPF.",
  },
  {
    id: "network-security-basics",
    title: "05. Security Fundamentals",
    status: "PLANNED",
    progress: 0,
    description:
      "Upcoming topics include ACLs, device hardening, port security, and wireless security fundamentals.",
  },
];
