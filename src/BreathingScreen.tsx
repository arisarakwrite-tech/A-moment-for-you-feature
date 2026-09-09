import { useEffect, useState, useRef } from "react";

// Animation phases: in(4s) → hold(4s) → out(4s), repeat 2 cycles
type Phase = "in" | "hold" | "out" | "done";

const PHASE_DURATION = 4000; // ms per phase
const TOTAL_CYCLES = 2;

export default function BreathingScreen({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>("in");
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase === "done") return;

    timerRef.current = setTimeout(() => {
      if (phase === "in") {
        setPhase("hold");
      } else if (phase === "hold") {
        setPhase("out");
      } else if (phase === "out") {
        const nextCycle = cycle + 1;
        if (nextCycle >= TOTAL_CYCLES) {
          setPhase("done");
        } else {
          setCycle(nextCycle);
          setPhase("in");
        }
      }
    }, PHASE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, cycle]);

  const cloudScale = phase === "in" || phase === "hold" ? 1 : 0.62;
  const phaseLabel = phase === "in" ? "Breathe in" : phase === "hold" ? "Hold" : phase === "out" ? "Breathe out" : "Well done";
  const phaseSubtitle =
    phase === "in" ? "Fill yourself with calm" :
    phase === "hold" ? "Stay with this feeling" :
    phase === "out" ? "Let go of what feels heavy" :
    "You did great ✨";

  const transitionStyle = phase === "in" || phase === "out"
    ? { transition: `transform ${PHASE_DURATION}ms cubic-bezier(0.45, 0.05, 0.55, 0.95)` }
    : { transition: "transform 0.6s ease" };

  return (
    <div
      className="relative flex flex-col w-[390px] h-[844px] overflow-hidden rounded-[40px]"
      style={{
        background: "linear-gradient(180deg, #b8d8ec 0%, #cce2ef 18%, #dbeaf5 35%, #eaf0f5 55%, #f0dfd0 75%, #f5d9c0 90%, #f2cdb0 100%)",
      }}
    >
      {/* Status bar safe area */}
      <div className="flex items-center justify-between px-5 pt-[14px] pb-[10px] flex-shrink-0">
        <span className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[17px] text-[#1a2e4a] leading-[22px]">9:41</span>
        <div className="bg-black h-[37px] rounded-[100px] w-[125px]" />
        <div className="flex gap-[5px] items-center">
          {/* signal bars */}
          <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
            <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#1a2e4a" />
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="#1a2e4a" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#1a2e4a" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#1a2e4a" opacity="0.3" />
          </svg>
          {/* wifi */}
          <svg width="16" height="12" fill="none" viewBox="0 0 16 12">
            <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="#1a2e4a" />
            <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="#1a2e4a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1 3.5a10.5 10.5 0 0 1 14 0" stroke="#1a2e4a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {/* battery */}
          <svg width="25" height="12" fill="none" viewBox="0 0 25 12">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#1a2e4a" strokeOpacity="0.35" />
            <rect x="2" y="2" width="17" height="8" rx="2" fill="#1a2e4a" />
            <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="#1a2e4a" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pb-2 flex-shrink-0 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-full size-[40px] shadow-sm"
          aria-label="Close"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path d="M11 14L6 9L11 4" stroke="#1a2e4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Title */}
        <div className="absolute inset-x-0 flex flex-col items-center pointer-events-none">
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[20px] text-[#1a2e4a] font-bold">Just Breathe</p>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4a6e8a] mt-[2px]">A little space for a calmer you</p>
        </div>

        {/* Spacer to balance layout */}
        <div className="size-[40px]" />
      </div>

      {/* Cloud + animation */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Background cloud shapes for depth */}
        <svg
          className="absolute opacity-40"
          style={{ width: "180px", top: "10%", right: "5%" }}
          viewBox="0 0 180 100"
          fill="none"
        >
          <ellipse cx="90" cy="70" rx="80" ry="40" fill="white" />
          <ellipse cx="60" cy="55" rx="45" ry="35" fill="white" />
          <ellipse cx="120" cy="55" rx="45" ry="35" fill="white" />
          <ellipse cx="90" cy="40" rx="38" ry="32" fill="white" />
        </svg>
        <svg
          className="absolute opacity-30"
          style={{ width: "140px", bottom: "15%", left: "2%" }}
          viewBox="0 0 140 80"
          fill="none"
        >
          <ellipse cx="70" cy="55" rx="60" ry="32" fill="white" />
          <ellipse cx="45" cy="42" rx="35" ry="28" fill="white" />
          <ellipse cx="95" cy="42" rx="35" ry="28" fill="white" />
          <ellipse cx="70" cy="30" rx="28" ry="25" fill="white" />
        </svg>

        {/* Main animated cloud */}
        <div
          style={{
            transform: `scale(${cloudScale})`,
            ...transitionStyle,
            transformOrigin: "center center",
          }}
        >
          <CloudSVG glowing={phase === "in" || phase === "hold"} />
        </div>
      </div>

      {/* Bottom text */}
      <div className="flex flex-col items-center pb-[48px] flex-shrink-0 px-6">
        <p
          key={phase}
          className="font-['Gotham_Rounded:Bold',sans-serif] text-[36px] text-[#1a2e4a] font-bold text-center"
          style={{
            animation: "fadeInUp 0.5s ease forwards",
          }}
        >
          {phaseLabel}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#4a6e8a] mt-[6px] text-center">
          {phaseSubtitle}
        </p>

        {/* Divider */}
        <div className="w-[40px] h-[2px] bg-[#4a6e8a]/30 rounded-full mt-[14px] mb-[20px]" />

        {/* Cycle progress dots */}
        {phase !== "done" && (
          <div className="flex gap-[8px] items-center">
            {Array.from({ length: TOTAL_CYCLES * 3 }).map((_, i) => {
              const totalPhaseIndex = cycle * 3 + (phase === "in" ? 0 : phase === "hold" ? 1 : 2);
              return (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === totalPhaseIndex ? "20px" : "8px",
                    height: "8px",
                    background: i === totalPhaseIndex ? "#3dbdb3" : "rgba(74,110,138,0.3)",
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Done state restart */}
        {phase === "done" && (
          <button
            onClick={() => { setCycle(0); setPhase("in"); }}
            className="bg-[#3dbdb3] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] px-[32px] py-[12px] rounded-[24px] mt-[8px]"
          >
            Breathe again
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function CloudSVG({ glowing }: { glowing: boolean }) {
  return (
    <div className="relative" style={{ width: "260px", height: "220px" }}>
      {/* Glow ring */}
      {glowing && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
            transform: "scale(1.1)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
      )}

      {/* Sparkle lines around cloud */}
      <svg
        className="absolute inset-0"
        width="260"
        height="220"
        viewBox="0 0 260 220"
        fill="none"
        style={{ opacity: glowing ? 1 : 0.4, transition: "opacity 1s ease" }}
      >
        {/* Top-left sparkle */}
        <line x1="52" y1="72" x2="44" y2="64" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="80" x2="36" y2="78" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        {/* Top-right sparkle */}
        <line x1="208" y1="72" x2="216" y2="64" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="212" y1="80" x2="224" y2="78" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bottom-left sparkle */}
        <line x1="52" y1="158" x2="44" y2="166" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="150" x2="36" y2="152" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bottom-right sparkle */}
        <line x1="208" y1="158" x2="216" y2="166" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="212" y1="150" x2="224" y2="152" stroke="#b8cde0" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Cloud body SVG */}
      <svg
        width="260"
        height="220"
        viewBox="0 0 260 220"
        fill="none"
        className="absolute inset-0 drop-shadow-[0_8px_32px_rgba(180,210,230,0.6)]"
      >
        {/* Shadow / base layer */}
        <ellipse cx="130" cy="178" rx="85" ry="14" fill="rgba(100,150,190,0.12)" />

        {/* Cloud main body - overlapping circles */}
        {/* Bottom base */}
        <ellipse cx="130" cy="160" rx="85" ry="40" fill="white" />
        {/* Left lower bump */}
        <ellipse cx="72" cy="140" rx="48" ry="42" fill="white" />
        {/* Right lower bump */}
        <ellipse cx="188" cy="140" rx="48" ry="42" fill="white" />
        {/* Left upper bump */}
        <ellipse cx="90" cy="115" rx="44" ry="44" fill="white" />
        {/* Right upper bump */}
        <ellipse cx="170" cy="115" rx="44" ry="44" fill="white" />
        {/* Top center bump */}
        <ellipse cx="130" cy="95" rx="50" ry="50" fill="white" />

        {/* Subtle inner shading for 3D puffiness */}
        <ellipse cx="110" cy="100" rx="28" ry="20" fill="rgba(220,235,245,0.4)" />
        <ellipse cx="155" cy="98" rx="22" ry="16" fill="rgba(220,235,245,0.3)" />

        {/* Eyes — closed peaceful arcs */}
        {/* Left eye */}
        <path
          d="M106 138 Q112 133 118 138"
          stroke="#2d5a7a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right eye */}
        <path
          d="M142 138 Q148 133 154 138"
          stroke="#2d5a7a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Smile */}
        <path
          d="M115 152 Q130 162 145 152"
          stroke="#2d5a7a"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1.05); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
