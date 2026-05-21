// components/ui/TopologyPanel.tsx
"use client";

import { useEffect, useState } from "react";
import { topologyConfigs } from "@/types/topologyConfigs";
import type { ProjectCategory } from "@/types/content";
import { MaterialIcon } from "./MaterialIcon"; // adjust if yours is elsewhere

interface Props {
  category: ProjectCategory;
  interval?: number; // ms between terminal line cycles, default 2400
}

export function TopologyPanel({ category, interval = 2400 }: Props) {
  const config =  topologyConfigs[category];

  const [lineIdx, setLineIdx] = useState(0);
  const [renderId] = useState(
    () =>
      `${Math.floor(Math.random() * 9000 + 1000)}-${String(
        Math.floor(Math.random() * 100)
      ).padStart(2, "0")}`
  );

  useEffect(() => {
    const t = setInterval(
      () => setLineIdx((i) => (i + 1) % config.terminalLines.length),
      interval
    );
    return () => clearInterval(t);
  }, [config.terminalLines.length, interval]);

  const [nodeA, nodeB] = config.primaryNodes;

  return (
    <div className="relative hidden overflow-hidden rounded border border-outline-variant/10 bg-surface-container-low/50 p-6 lg:block">
      <div className="mb-4 select-none font-mono text-[11px] text-primary/40">
        TOPOLOGY_RENDER_ID: {renderId}
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-8 py-8 opacity-60 grayscale transition-all hover:grayscale-0">
        {/* Primary tier */}
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-center gap-1">
            <MaterialIcon name={nodeA.icon} className="text-[48px] text-primary" />
            <span className="font-mono text-[9px] text-primary/50">{nodeA.label}</span>
          </div>
          <div className="w-24 border-t border-dashed border-outline" />
          <div className="flex flex-col items-center gap-1">
            <MaterialIcon name={nodeB.icon} className="text-[48px] text-primary" />
            <span className="font-mono text-[9px] text-primary/50">{nodeB.label}</span>
          </div>
        </div>

        {/* Secondary tier */}
        <div className="flex gap-12">
          {config.secondaryNodes.map((node) => (
            <div key={node.label} className="flex flex-col items-center gap-1">
              <MaterialIcon name={node.icon} className="text-[32px] text-secondary" />
              <span className="font-mono text-[9px] text-secondary/50">{node.label}</span>
            </div>
          ))}
        </div>

        {/* Cycling terminal output */}
        <div className="mt-4 min-h-[2.5rem] text-center font-mono text-[11px] text-secondary/60">
          {[0, 1].map((offset) => {
            const line =
              config.terminalLines[(lineIdx + offset) % config.terminalLines.length];
            return <div key={offset}>{line}</div>;
          })}
        </div>
      </div>
    </div>
  );
}