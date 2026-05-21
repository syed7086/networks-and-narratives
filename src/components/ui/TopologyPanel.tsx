// components/ui/TopologyPanel.tsx
"use client";

import { useEffect, useState, useId } from "react";
import { topologyConfigs } from "@/types/topologyConfigs";
import type { ProjectCategory } from "@/types/content";
import { MaterialIcon } from "./MaterialIcon"; // adjust if yours is elsewhere



const CATEGORIES = Object.keys(topologyConfigs) as ProjectCategory[];

export function TopologyPanel({ interval = 4000 }: { interval?: number }) {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const rawId = useId(); // stable, SSR-safe
  const renderId = rawId.replace(/:/g, "").slice(0, 7).toUpperCase();

  // Cycle categories
  useEffect(() => {
    const t = setInterval(() => {
      setCategoryIdx((i) => (i + 1) % CATEGORIES.length);
      setLineIdx(0);
    }, interval);
    return () => clearInterval(t);
  }, [interval]);

  // Cycle terminal lines
  useEffect(() => {
    const config = topologyConfigs[CATEGORIES[categoryIdx]];
    const t = setInterval(
      () => setLineIdx((i) => (i + 1) % config.terminalLines.length),
      2000
    );
    return () => clearInterval(t);
  }, [categoryIdx]);

  const config = topologyConfigs[CATEGORIES[categoryIdx]];
  const [nodeA, nodeB] = config.primaryNodes;

  return (
    <div className="relative hidden overflow-hidden rounded border border-outline-variant/10 bg-surface-container-low/50 p-6 lg:flex lg:flex-col">
      <div className="mb-4 select-none font-mono text-[11px] text-primary/40">
        TOPOLOGY_RENDER_ID: {renderId}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 py-8 opacity-60 grayscale transition-all hover:grayscale-0">
        {/* Primary tier */}
        <div className="flex w-full items-center justify-center gap-8 xl:gap-16">
          <div className="flex flex-col items-center gap-1">
            <MaterialIcon name={nodeA.icon} className="text-3xl text-primary xl:text-5xl" />
            <span className="whitespace-nowrap font-mono text-[9px] text-primary/50">{nodeA.label}</span>
          </div>
          <div className="flex-1 max-w-[100px] border-t border-dashed border-outline" />
          <div className="flex flex-col items-center gap-1">
            <MaterialIcon name={nodeB.icon} className="text-3xl text-primary xl:text-5xl" />
            <span className="whitespace-nowrap font-mono text-[9px] text-primary/50">{nodeB.label}</span>
          </div>
        </div>

        {/* Secondary tier */}
        <div className="flex flex-wrap justify-center gap-6 xl:gap-12">
          {config.secondaryNodes.map((node) => (
            <div key={node.label} className="flex flex-col items-center gap-1">
              <MaterialIcon name={node.icon} className="text-2xl text-secondary xl:text-4xl" />
              <span className="whitespace-nowrap font-mono text-[9px] text-secondary/50">{node.label}</span>
            </div>
          ))}
        </div>

        {/* Category label */}
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary/30">
          {config.category}
        </div>

        {/* Cycling terminal lines */}
        <div className="mt-2 min-h-[2.5rem] text-center font-mono text-[11px] text-secondary/60">
          {[0, 1].map((offset) => (
            <div key={offset}>
              {config.terminalLines[(lineIdx + offset) % config.terminalLines.length]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}