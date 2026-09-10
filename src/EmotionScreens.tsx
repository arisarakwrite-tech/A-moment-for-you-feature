import { useState } from "react";

// ─── Emotion data ─────────────────────────────────────────────────────────────

export type Emotion = {
  id: string;
  label: string;
  bg: string;
  positive: boolean;
  icon: React.ReactNode;
};

const emotions: Emotion[] = [
  {
    id: "happy",
    label: "Happy",
    bg: "#F5C842",
    positive: true,
    icon: <HappyIcon />,
  },
  {
    id: "sleepy",
    label: "Sleepy",
    bg: "#E07B2E",
    positive: false,
    icon: <SleepyIcon />,
  },
  {
    id: "tired",
    label: "Tired",
    bg: "#7BA7D4",
    positive: false,
    icon: <TiredIcon />,
  },
  {
    id: "depressed",
    label: "Depressed",
    bg: "#8C8C8C",
    positive: false,
    icon: <DepressedIcon />,
  },
  {
    id: "euphoria",
    label: "Euphoria",
    bg: "#F0A0B0",
    positive: true,
    icon: <EuphoriaIcon />,
  },
  {
    id: "bored",
    label: "Bored",
    bg: "#5A8C3A",
    positive: false,
    icon: <BoredIcon />,
  },
  {
    id: "overwhelmed",
    label: "Overwhelmed",
    bg: "#4A6A2A",
    positive: false,
    icon: <OverwhelmedIcon />,
  },
  {
    id: "shy",
    label: "Shy",
    bg: "#E07B2E",
    positive: false,
    icon: <ShyIcon />,
  },
  {
    id: "unsure",
    label: "I'm not sure...",
    bg: "#F0C8B0",
    positive: false,
    icon: <UnsureIcon />,
  },
];

// ─── Emotion icon SVGs ────────────────────────────────────────────────────────

function HappyIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Eyes */}
      <circle cx="20" cy="22" r="3.5" fill="#222" />
      <circle cx="36" cy="22" r="3.5" fill="#222" />
      {/* Smile */}
      <path d="M18 32 Q28 42 38 32" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SleepyIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Closed eyes */}
      <path d="M16 22 Q20 18 24 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M32 22 Q36 18 40 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Open mouth - O shape */}
      <ellipse cx="28" cy="34" rx="5" ry="6" fill="#222" />
      {/* ZZZ text */}
      <text x="33" y="14" fontSize="8" fontWeight="bold" fill="white" fontFamily="sans-serif">zzz</text>
    </svg>
  );
}

function TiredIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Flat/sad eyes */}
      <rect x="16" y="20" width="8" height="4" rx="2" fill="#222" />
      <rect x="32" y="20" width="8" height="4" rx="2" fill="#222" />
      {/* Flat mouth */}
      <rect x="20" y="34" width="16" height="3" rx="1.5" fill="#222" />
    </svg>
  );
}

function DepressedIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Dog/bear ears */}
      <ellipse cx="16" cy="10" rx="7" ry="9" fill="#555" />
      <ellipse cx="40" cy="10" rx="7" ry="9" fill="#555" />
      {/* Teardrop streams */}
      <path d="M20 30 L16 44" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 30 L40 44" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sad eyes */}
      <path d="M16 24 Q20 20 24 24" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" transform="scale(1,-1) translate(0,-48)" />
      <circle cx="20" cy="25" r="2.5" fill="#222" />
      <circle cx="36" cy="25" r="2.5" fill="#222" />
      {/* Frown */}
      <path d="M20 37 Q28 32 36 37" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function EuphoriaIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Squinting happy eyes */}
      <path d="M15 22 Q20 16 25 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M31 22 Q36 16 41 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Blush circles */}
      <ellipse cx="16" cy="30" rx="5" ry="3.5" fill="#FF8FAA" fillOpacity="0.6" />
      <ellipse cx="40" cy="30" rx="5" ry="3.5" fill="#FF8FAA" fillOpacity="0.6" />
      {/* Big smile */}
      <path d="M17 32 Q28 44 39 32" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BoredIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Half-closed eyes */}
      <rect x="15" y="22" width="10" height="5" rx="2.5" fill="#222" />
      <rect x="31" y="22" width="10" height="5" rx="2.5" fill="#222" />
      {/* Lines above eyes (drooping lids) */}
      <line x1="14" y1="20" x2="26" y2="20" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="20" x2="42" y2="20" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      {/* Flat mouth */}
      <path d="M20 36 Q28 33 36 36" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function OverwhelmedIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* X eyes */}
      <line x1="15" y1="18" x2="23" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="23" y1="18" x2="15" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="18" x2="41" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="41" y1="18" x2="33" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Wavy mouth */}
      <path d="M16 36 Q20 32 24 36 Q28 40 32 36 Q36 32 40 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ShyIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Big round eyes */}
      <circle cx="19" cy="24" r="7" fill="white" />
      <circle cx="37" cy="24" r="7" fill="white" />
      <circle cx="19" cy="24" r="4" fill="#222" />
      <circle cx="37" cy="24" r="4" fill="#222" />
      <circle cx="20" cy="22" r="1.5" fill="white" />
      <circle cx="38" cy="22" r="1.5" fill="white" />
      {/* Small flat mouth */}
      <rect x="22" y="37" width="12" height="3" rx="1.5" fill="#222" />
    </svg>
  );
}

function UnsureIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      {/* Small dot eyes */}
      <circle cx="21" cy="24" r="3" fill="#555" />
      <circle cx="35" cy="24" r="3" fill="#555" />
      {/* Tiny mouth dot */}
      <circle cx="28" cy="36" r="2.5" fill="#555" />
    </svg>
  );
}

// ─── Mooca standing character (happy) ────────────────────────────────────────

function MoocaHappy() {
  return (
    <svg width="180" height="230" viewBox="0 0 180 230" fill="none">
      {/* Body (legs) */}
      <rect x="68" y="160" width="18" height="36" rx="9" fill="white" />
      <rect x="94" y="160" width="18" height="36" rx="9" fill="white" />
      {/* Scarf */}
      <ellipse cx="90" cy="155" rx="32" ry="10" fill="#E8A523" />
      <rect x="58" y="150" width="64" height="12" rx="4" fill="#E8A523" />
      <rect x="80" y="158" width="20" height="18" rx="4" fill="#D4931A" />
      {/* Body */}
      <ellipse cx="90" cy="138" rx="38" ry="32" fill="white" />
      {/* Arms */}
      <ellipse cx="52" cy="142" rx="12" ry="8" fill="white" transform="rotate(-30 52 142)" />
      <ellipse cx="128" cy="142" rx="12" ry="8" fill="white" transform="rotate(30 128 142)" />
      {/* Cloud head */}
      <ellipse cx="90" cy="95" rx="42" ry="40" fill="white" />
      <ellipse cx="60" cy="105" rx="22" ry="20" fill="white" />
      <ellipse cx="120" cy="105" rx="22" ry="20" fill="white" />
      <ellipse cx="70" cy="82" rx="20" ry="20" fill="white" />
      <ellipse cx="110" cy="82" rx="20" ry="20" fill="white" />
      <ellipse cx="90" cy="72" rx="22" ry="22" fill="white" />
      {/* Pink cheeks */}
      <ellipse cx="65" cy="108" rx="9" ry="6" fill="#FFB3C6" fillOpacity="0.7" />
      <ellipse cx="115" cy="108" rx="9" ry="6" fill="#FFB3C6" fillOpacity="0.7" />
      {/* Happy eyes */}
      <path d="M76 100 Q82 94 88 100" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M92 100 Q98 94 104 100" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Big smile */}
      <path d="M72 112 Q90 126 108 112" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── Mooca standing character (sad) ──────────────────────────────────────────

function MoocaSad() {
  return (
    <svg width="180" height="230" viewBox="0 0 180 230" fill="none">
      {/* Body (legs) */}
      <rect x="68" y="160" width="18" height="36" rx="9" fill="white" />
      <rect x="94" y="160" width="18" height="36" rx="9" fill="white" />
      {/* Scarf - blue */}
      <ellipse cx="90" cy="155" rx="32" ry="10" fill="#4A7FC0" />
      <rect x="58" y="150" width="64" height="12" rx="4" fill="#4A7FC0" />
      <rect x="80" y="158" width="20" height="18" rx="4" fill="#3A6BB0" />
      {/* Body */}
      <ellipse cx="90" cy="138" rx="38" ry="32" fill="white" />
      {/* Arms (drooping) */}
      <ellipse cx="52" cy="148" rx="12" ry="8" fill="white" transform="rotate(20 52 148)" />
      <ellipse cx="128" cy="148" rx="12" ry="8" fill="white" transform="rotate(-20 128 148)" />
      {/* Cloud head */}
      <ellipse cx="90" cy="95" rx="42" ry="40" fill="white" />
      <ellipse cx="60" cy="105" rx="22" ry="20" fill="white" />
      <ellipse cx="120" cy="105" rx="22" ry="20" fill="white" />
      <ellipse cx="70" cy="82" rx="20" ry="20" fill="white" />
      <ellipse cx="110" cy="82" rx="20" ry="20" fill="white" />
      <ellipse cx="90" cy="72" rx="22" ry="22" fill="white" />
      {/* Gray shadow under eyes */}
      <ellipse cx="72" cy="105" rx="8" ry="5" fill="#B0C4D8" fillOpacity="0.5" />
      <ellipse cx="108" cy="105" rx="8" ry="5" fill="#B0C4D8" fillOpacity="0.5" />
      {/* Sad eyes (downturned) */}
      <path d="M76 100 Q82 106 88 100" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M92 100 Q98 106 104 100" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Frown */}
      <path d="M74 118 Q90 110 106 118" stroke="#3060A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Tears */}
      <ellipse cx="70" cy="112" rx="3" ry="5" fill="#7AAAD8" fillOpacity="0.8" />
      <ellipse cx="110" cy="112" rx="3" ry="5" fill="#7AAAD8" fillOpacity="0.8" />
      <path d="M70 115 Q68 122 70 126" stroke="#7AAAD8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M110 115 Q112 122 110 126" stroke="#7AAAD8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── Result copy ──────────────────────────────────────────────────────────────

const resultContent: Record<string, { primary: string; secondary: string }> = {
  happy: {
    primary: "I'm glad you feel happy today.",
    secondary: "It's wonderful to have moments like this. Remember to enjoy this feeling and let yourself appreciate the little things that bring you joy.",
  },
  sleepy: {
    primary: "I'm sorry you feel tired today.",
    secondary: "Rest is important. Give yourself permission to slow down and take care of your body and mind.",
  },
  tired: {
    primary: "I'm sorry you feel tired today.",
    secondary: "Sometimes we all need a moment to pause. Be gentle with yourself and take things one step at a time.",
  },
  depressed: {
    primary: "I'm sorry you feel like this today.",
    secondary: "Dealing with sadness can be tough. But remember that you're not alone — a lot of people face this from time to time. And this feeling... will pass.",
  },
  euphoria: {
    primary: "It sounds like you're feeling really good today!",
    secondary: "What a wonderful feeling to carry with you. Take a moment to soak it in and share that energy with the world around you.",
  },
  bored: {
    primary: "I'm sorry you feel this way today.",
    secondary: "Sometimes our minds need a new direction. Give yourself space to explore something small and new — even a tiny change can shift your mood.",
  },
  overwhelmed: {
    primary: "I'm sorry you feel this way today.",
    secondary: "Feeling overwhelmed is real. Take a slow breath, and remember: you don't have to handle everything at once. One thing at a time.",
  },
  shy: {
    primary: "I'm sorry you feel this way today.",
    secondary: "It's okay to take your time with people and situations. Be kind to yourself — feeling shy is a normal part of being human.",
  },
  unsure: {
    primary: "It's okay not to know how you feel.",
    secondary: "Sometimes feelings are hard to name. Whatever is going on inside, you don't have to figure it all out right now. You showed up, and that matters.",
  },
};

// ─── Check-in Screen ──────────────────────────────────────────────────────────

export function EmotionCheckInScreen({
  onBack,
  onSet,
}: {
  onBack: () => void;
  onSet: (emotion: Emotion) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col w-[390px] h-[844px] overflow-hidden rounded-[40px] bg-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-[14px] pb-[4px] flex-shrink-0">
        <span className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[17px] text-black leading-[22px]">9:41</span>
        <div className="bg-black h-[37px] rounded-[100px] w-[125px]" />
        <div className="flex gap-[5px] items-center">
          <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
            <rect x="0" y="7" width="3" height="5" rx="0.5" fill="black" />
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="black" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="black" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="black" opacity="0.3" />
          </svg>
          <svg width="16" height="12" fill="none" viewBox="0 0 16 12">
            <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="black" />
            <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1 3.5a10.5 10.5 0 0 1 14 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg width="25" height="12" fill="none" viewBox="0 0 25 12">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="black" strokeOpacity="0.35" />
            <rect x="2" y="2" width="17" height="8" rx="2" fill="black" />
            <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="black" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Back button */}
      <div className="flex items-center px-5 pt-[8px] pb-[4px] flex-shrink-0">
        <button onClick={onBack} className="flex items-center justify-center size-[36px]" aria-label="Back">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 16L7 10L13 4" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="px-6 pb-[20px] flex-shrink-0">
        <h1 className="font-['Gotham_Rounded:Bold',sans-serif] text-[26px] text-black font-bold leading-tight">
          How are you today?
        </h1>
      </div>

      {/* Emotion grid */}
      <div className="flex-1 overflow-y-auto px-5">
        <div className="grid grid-cols-3 gap-x-[14px] gap-y-[20px] pb-[8px]">
          {emotions.map((em) => {
            const isSelected = selected === em.id;
            return (
              <button
                key={em.id}
                onClick={() => setSelected(em.id)}
                className="flex flex-col items-center gap-[8px]"
              >
                <div
                  className="flex items-center justify-center rounded-[20px] transition-all duration-200"
                  style={{
                    background: em.bg,
                    width: "92px",
                    height: "92px",
                    transform: isSelected ? "scale(1.08)" : "scale(1)",
                    boxShadow: isSelected
                      ? `0 0 0 3px white, 0 0 0 5px ${em.bg}`
                      : "none",
                  }}
                >
                  {em.icon}
                </div>
                <span
                  className="font-['Inter:Regular',sans-serif] text-[12px] text-center leading-tight"
                  style={{ color: isSelected ? "#222" : "#555", fontWeight: isSelected ? 600 : 400 }}
                >
                  {em.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Set button */}
      <div className="px-5 pb-[40px] pt-[16px] flex-shrink-0">
        <button
          onClick={() => {
            const em = emotions.find((e) => e.id === selected);
            if (em) onSet(em);
          }}
          disabled={!selected}
          className="w-full py-[18px] rounded-[32px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white transition-all duration-200"
          style={{
            background: selected ? "#3DBDB3" : "#B0D8D5",
            cursor: selected ? "pointer" : "default",
          }}
        >
          Set
        </button>
      </div>
    </div>
  );
}

// ─── Result Screen ────────────────────────────────────────────────────────────

export function EmotionResultScreen({
  emotion,
  onDone,
}: {
  emotion: Emotion;
  onDone: () => void;
}) {
  const isPositive = emotion.positive;
  const bg = isPositive ? "#F5C932" : "#BACED8";
  const waveFill = isPositive ? "#FFF0C0" : "#D0E4F0";
  const content = resultContent[emotion.id] ?? resultContent.happy;

  return (
    <div
      className="relative flex flex-col w-[390px] h-[844px] overflow-hidden rounded-[40px]"
      style={{ background: bg }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-[14px] pb-[4px] flex-shrink-0">
        <span className="font-['SF_Pro:Semibold',sans-serif] font-semibold text-[17px] text-black leading-[22px]">9:41</span>
        <div className="bg-black h-[37px] rounded-[100px] w-[125px]" />
        <div className="flex gap-[5px] items-center">
          <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
            <rect x="0" y="7" width="3" height="5" rx="0.5" fill="black" />
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill="black" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="black" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="black" opacity="0.3" />
          </svg>
          <svg width="16" height="12" fill="none" viewBox="0 0 16 12">
            <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="black" />
            <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1 3.5a10.5 10.5 0 0 1 14 0" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg width="25" height="12" fill="none" viewBox="0 0 25 12">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="black" strokeOpacity="0.35" />
            <rect x="2" y="2" width="17" height="8" rx="2" fill="black" />
            <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="black" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Back arrow */}
      <div className="flex items-center px-5 pt-[8px] pb-[4px] flex-shrink-0">
        <button onClick={onDone} className="flex items-center justify-center size-[36px]" aria-label="Back">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 16L7 10L13 4" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="px-8 pt-[8px] pb-0 flex-shrink-0 text-center">
        <h1 className="font-['Gotham_Rounded:Bold',sans-serif] text-[28px] text-black font-bold leading-tight">
          Hooray! You checked in today!
        </h1>
      </div>

      {/* Mooca illustration area */}
      <div className="flex-1 flex flex-col items-center justify-end relative min-h-0">
        {/* Mooca — subtle nod animation */}
        <div
          className="flex-shrink-0"
          style={{ animation: "nod 3s ease-in-out infinite" }}
        >
          {isPositive ? <MoocaHappy /> : <MoocaSad />}
        </div>

        {/* Wave curve */}
        <div className="w-full flex-shrink-0" style={{ marginBottom: "-2px" }}>
          <svg
            width="390"
            height="80"
            viewBox="0 0 390 80"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 60 Q97.5 0 195 40 Q292.5 80 390 20 L390 80 L0 80 Z"
              fill={waveFill}
            />
          </svg>
        </div>
      </div>

      {/* Message card */}
      <div
        className="flex-shrink-0 px-6 pb-[40px] pt-[24px]"
        style={{ background: waveFill }}
      >
        <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#333] text-center mb-[12px] font-medium">
          {content.primary}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#555] text-center leading-relaxed mb-[28px]">
          {content.secondary}
        </p>

        {/* Done button */}
        <button
          onClick={onDone}
          className="w-full py-[18px] bg-white rounded-[32px] font-['Gotham_Rounded:Bold',sans-serif] font-bold text-[18px] text-black shadow-sm"
        >
          Done
        </button>
      </div>

      <style>{`
        @keyframes nod {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-3deg); }
          40% { transform: rotate(3deg); }
          60% { transform: rotate(-2deg); }
          80% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
