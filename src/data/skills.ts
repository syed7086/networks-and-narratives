import type { Skill } from "@/types/content";

export const skills: Skill[] = [
  { id: "ospf", code: "PROT::01", label: "OSPF / EIGRP", level: "strong" },
  { id: "packet-tracer", code: "TOOL::01", label: "Packet Tracer", level: "full" },
  { id: "wireshark", code: "TOOL::02", label: "Wireshark", level: "full" },
  { id: "python", code: "LANG::01", label: "Python", level: "strong" },
  { id: "linux", code: "OS::01", label: "Linux / CLI", level: "full" },
  { id: "vlans", code: "STRUC::01", label: "VLANs / Trunk", level: "full" },
];
