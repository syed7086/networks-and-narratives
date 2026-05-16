import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "ospf-lab",
    title: "3-Router OSPF Lab",
    category: "networking",
    status: "complete",
    tools: ["Packet Tracer", "OSPFv2", "VLANs"],
    summary:
      "Multi-router OSPF topology with inter-VLAN routing and loop-free switching design.",
    bullets: [
      "Configured Area 0 backbone with two ABRs",
      "Verified neighbor adjacencies and route propagation",
      "Implemented inter-VLAN routing on distribution layer",
    ],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    featured: true,
  },
  {
    id: "acl-security-lab",
    title: "ACL & Port Security Lab",
    category: "lab",
    status: "in_progress",
    tools: ["Cisco IOS", "ACLs", "Wireshark"],
    summary:
      "Perimeter hardening lab using extended ACLs, port security, and traffic verification.",
    bullets: [
      "Standard and extended ACLs for inbound/outbound filtering",
      "Port security on access switches with violation modes",
      "Captured and analyzed denied traffic in Wireshark",
    ],
    links: {
      github: null,
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
    featured: true,
  },
];
