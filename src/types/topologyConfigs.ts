// content.ts — add to your types

import { ProjectCategory } from "./content";

export interface TopologyNode {
  icon: string;       // Material icon name
  label: string;
  tier: "primary" | "secondary";
}

export interface TopologyConfig {
  category: ProjectCategory;
  primaryNodes: [TopologyNode, TopologyNode];   // left + right of the dashed line
  secondaryNodes: TopologyNode[];               // bottom row
  terminalLines: string[];                      // cycling terminal messages
}

// ─── Topology configs keyed by category ───────────────────────────────────────
export const topologyConfigs: Record<ProjectCategory, TopologyConfig> = {
  networking: {
    category: "networking",
    primaryNodes: [
      { icon: "router",      label: "GATEWAY",   tier: "primary" },
      { icon: "hub",         label: "CORE-SW",   tier: "primary" },
    ],
    secondaryNodes: [
      { icon: "computer",    label: "HOST-01",   tier: "secondary" },
      { icon: "dns",         label: "NS-01",     tier: "secondary" },
      { icon: "laptop",      label: "CLIENT-02", tier: "secondary" },
    ],
    terminalLines: [
      "> Analyzing packets...",
      "> ICMP Echo Request: Success",
      "> BGP session: ESTABLISHED",
      "> ARP table: 12 entries",
      "> VLAN trunk: UP",
    ],
  },
  lab: {
    category: "lab",
    primaryNodes: [
      { icon: "storage",     label: "HYPERVISOR", tier: "primary" },
      { icon: "lan",         label: "vSWITCH",    tier: "primary" },
    ],
    secondaryNodes: [
      { icon: "terminal",    label: "VM-01",  tier: "secondary" },
      { icon: "memory",      label: "VM-02",  tier: "secondary" },
      { icon: "developer_board", label: "VM-03", tier: "secondary" },
    ],
    terminalLines: [
      "> Spawning VM instance...",
      "> Snapshot: CLEAN_STATE",
      "> vNIC bridged: UP",
      "> CPU pinning: core 2-5",
      "> Memory balloon: 4096 MB",
    ],
  },
  automation: {
    category: "automation",
    primaryNodes: [
      { icon: "smart_toy",   label: "ORCHESTRATOR", tier: "primary" },
      { icon: "settings",    label: "RUNNER",       tier: "primary" },
    ],
    secondaryNodes: [
      { icon: "webhook",     label: "TRIGGER",  tier: "secondary" },
      { icon: "task_alt",    label: "TASK-01",  tier: "secondary" },
      { icon: "event_note",  label: "LOGGER",   tier: "secondary" },
    ],
    terminalLines: [
      "> Pipeline: RUNNING",
      "> Step 3/7: PASSED",
      "> Webhook received: OK",
      "> Artifact stored",
      "> Deployment: SUCCESS",
    ],
  },
  "ai & ml": {
    category: "ai & ml",
    primaryNodes: [
      { icon: "model_training", label: "TRAINER",  tier: "primary" },
      { icon: "analytics",      label: "EVAL",     tier: "primary" },
    ],
    secondaryNodes: [
      { icon: "dataset",      label: "DATASET",  tier: "secondary" },
      { icon: "tune",         label: "TUNER",    tier: "secondary" },
      { icon: "query_stats",  label: "METRICS",  tier: "secondary" },
    ],
    terminalLines: [
      "> Epoch 12/50: loss=0.043",
      "> Accuracy: 94.7%",
      "> Gradient step: OK",
      "> Checkpoint saved",
      "> Eval F1: 0.921",
    ],
  },
  "software engineering": {
    category: "software engineering",
    primaryNodes: [
      { icon: "code",        label: "BUILD",    tier: "primary" },
      { icon: "cloud_upload", label: "DEPLOY",  tier: "primary" },
    ],
    secondaryNodes: [
      { icon: "bug_report",  label: "TEST",    tier: "secondary" },
      { icon: "merge",       label: "CI",      tier: "secondary" },
      { icon: "monitor",     label: "PROD",    tier: "secondary" },
    ],
    terminalLines: [
      "> Build: PASSED (3.2s)",
      "> Tests: 47/47 OK",
      "> Lint: clean",
      "> Container pushed",
      "> Health check: 200 OK",
    ],
  },
};