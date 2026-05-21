import { ccnaProgress } from "@/data/ccnaProgress";
import { profile } from "@/data/profile";
// import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { TopologyPanel } from "../ui/TopologyPanel";



export function NetworkingDashboard() {
  return (
    <section
      id="networking"
      className="relative bg-surface-container-lowest px-4 py-24 md:px-16 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-secondary">
              Network Control Panel
            </span>
            <h2 className="font-headline-md">Systems Infrastructure</h2>
          </div>
          <div className="inline-block self-start border border-primary/20 px-3 py-1 font-mono text-[10px] text-primary/60 sm:text-[12px]">
            {profile.terminalBanner}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-outline-variant/30 bg-[#0f0d0a] shadow-2xl">
          <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-highest px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
              ccna-progress-monitor
            </div>
            <div className="w-12" />
          </div>

          <div className="relative p-5 md:p-12">
            <div className="scanline" />
            <div className="grid grid-cols-1 gap-12 font-mono lg:grid-cols-2">
              <div className="space-y-10">
                {ccnaProgress.map((item) => (
                  <div key={item.id}>
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <span className="text-[14px] text-primary">
                        {item.title}
                      </span>
                      <span className="w-fit border border-secondary/20 bg-secondary/10 px-2 py-0.5 text-[11px] text-secondary sm:text-[12px]">
                        STATUS: {item.status}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-high">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <TopologyPanel interval={5000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
