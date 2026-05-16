import type { CcnaProgressItem } from "@/types/content";

export const ccnaProgress: CcnaProgressItem[] = [
  {
    id: "routing-switching",
    title: "01. Routing & Switching",
    status: "IN_PROGRESS",
    progress: 85,
    description:
      "Mastering static and dynamic routing (OSPFv2), inter-VLAN routing, and STP configurations for stable loop-free topologies.",
  },
  {
    id: "ip-connectivity",
    title: "02. IP Connectivity & Services",
    status: "IN_PROGRESS",
    progress: 70,
    description:
      "Configuring and verifying IPv4/IPv6 addressing, NAT/PAT, and essential network services like DHCP, DNS, and SNMP.",
  },
  {
    id: "security",
    title: "03. Security Fundamentals",
    status: "IN_PROGRESS",
    progress: 60,
    description:
      "Implementing access control lists (ACLs), port security, and wireless security protocols (WPA2/WPA3) for perimeter defense.",
  },
];
