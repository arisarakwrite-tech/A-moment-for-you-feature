import { useState } from "react";
import BreathingScreen from "./BreathingScreen";
import { EmotionCheckInScreen, EmotionResultScreen, type Emotion } from "./EmotionScreens";
import svgPaths from "./imports/HomeHiFi/svg-6ilehz0p7y";
import imgRectangle from "./imports/HomeHiFi/76c82f706d611aa4e100f686f1cdec96e863c8e2.png";
import imgGrief from "./imports/HomeHiFi/ca849184db7da29b19c385cb4e6098e8c794fc83.png";
import imgObsession from "./imports/HomeHiFi/e3b3170805df71e8c81fd909ff3663a3d4912307.png";
import imgPanic from "./imports/HomeHiFi/d5b1bb78e6e76580658d238109af41a545add203.png";
import imgDepression from "./imports/HomeHiFi/104916961e22da737273be65d9e2f231721303b3.png";
import imgMoodSwing from "./imports/HomeHiFi/67414974110acadb0b88129e01400eb2576d0d97.png";
import imgStressed from "./imports/HomeHiFi/bfe67edbf751a1e5f4353f6ea15e7781ee9d42b6.png";

// ─── SVG icon helpers ────────────────────────────────────────────────────────

function MockLogo() {
  return (
    <div className="relative flex flex-row items-center">
      <span className="font-['Inter:Bold',sans-serif] font-bold text-[26px] tracking-[-1.3px] text-[#00c4b3]">oo</span>
      <span className="font-['Inter:Bold',sans-serif] font-bold text-[26px] text-[#1f77df]">C</span>
      <span className="font-['Inter:Bold',sans-serif] font-bold text-[26px] text-[#00c4b3]">a</span>
    </div>
  );
}

function SubscriptionType() {
  return (
    <div className="bg-[#eef9f8] flex gap-[6px] items-center px-[12px] py-[6px] rounded-[20px] border border-[#3dbdb3]">
      <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
        <path d={svgPaths.p7821e72} stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
      </svg>
      <span className="font-['Inter:Medium',sans-serif] font-medium text-[#3dbdb3] text-[12px]">Standard</span>
    </div>
  );
}

function NotificationBell() {
  return (
    <div className="bg-[#eef9f8] flex items-center justify-center rounded-[16px] size-[32px]">
      <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
        <path d={svgPaths.p13cb380} stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="flex h-[36px] items-center justify-between w-full">
      <MockLogo />
      <div className="flex gap-[8px] items-center">
        <SubscriptionType />
        <NotificationBell />
      </div>
    </div>
  );
}

// ─── Mooca character (simplified pass-through from imports) ──────────────────

function Mooca() {
  return (
    <div className="h-[105px] overflow-clip relative w-[135px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-0.5px)] top-[calc(50%-0.1px)]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-6.89px)] top-[calc(50%-32.17px)]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.762px] left-[calc(50%-6.89px)] top-[calc(50%-33.62px)] w-[40.06px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="35.762" preserveAspectRatio="none" viewBox="0 0 40.0602 35.762" width="40.0602">
              <path d={svgPaths.p2e63a00} fill="#FDDED5" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.6px] left-[calc(50%-6.01px)] top-[calc(50%-30.04px)] w-[31.13px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="28.6004" preserveAspectRatio="none" viewBox="0 0 31.1304 28.6004" width="31.1304">
              <path d={svgPaths.p2c9ec900} fill="#FEF6A7" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25.72px] left-[calc(50%-4.1px)] top-[calc(50%-25.7px)] w-[22.869px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="25.7201" preserveAspectRatio="none" viewBox="0 0 22.8694 25.7201" width="22.8694">
              <path d={svgPaths.p1c731180} fill="#B1E0E7" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+17.89px)] top-[calc(50%+3.47px)]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[30.995px] left-[calc(50%+16.8px)] top-[calc(50%+35.13px)] w-[31.924px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="30.9948" preserveAspectRatio="none" viewBox="0 0 31.9245 30.9948" width="31.9245">
              <path d={svgPaths.p3424ec00} fill="white" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25.231px] left-[calc(50%+17.4px)] top-[calc(50%+23.67px)] w-[44.734px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="25.2313" preserveAspectRatio="none" viewBox="0 0 44.7344 25.2313" width="44.7344">
              <path d={svgPaths.p611c400} fill="#E8A523" />
              <path d={svgPaths.p33d72d80} fill="white" />
              <path d={svgPaths.p31348d00} fill="white" />
              <path d={svgPaths.p1cef7d00} fill="white" />
              <path d={svgPaths.p7af2270} fill="white" />
              <path d={svgPaths.p6598c00} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero card ───────────────────────────────────────────────────────────────

function HeroCard() {
  return (
    <div className="bg-[#e8f7f6] flex h-[196px] items-start overflow-clip rounded-[20px] w-full">
      {/* Left */}
      <div className="flex flex-col gap-[8px] h-full items-start pl-[20px] pr-[10px] py-[20px] w-[180px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#555] text-[13px]">How are you today, Belle?</p>
        <div className="bg-[#3dbdb3] flex gap-[6px] items-center px-[14px] py-[8px] rounded-[20px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white">Let's talk</span>
          <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
            <path d={svgPaths.p104715c0} stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <Mooca />
      </div>
      {/* Right */}
      <div className="flex flex-col gap-[8px] h-full items-end pl-[8px] pr-[16px] py-[16px] w-[178px]">
        <div className="flex flex-col gap-[4px] items-end w-full font-['Inter:Medium',sans-serif] font-medium text-[12px]">
          <p className="text-[#444] w-full text-right">These 4 listerners</p>
          <p className="text-[#2d8982] w-full text-right">ready to listen to you</p>
        </div>
        <div className="bg-white flex flex-col items-start overflow-clip rounded-[14px] w-[130px]">
          <div className="h-[80px] w-[130px]">
            <img alt="" className="w-full h-full object-cover" src={imgRectangle} />
          </div>
          <div className="flex flex-col gap-[2px] items-start pb-[8px] pt-[6px] px-[8px] w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#333] text-[10px] overflow-hidden text-ellipsis w-full whitespace-nowrap">Ms. Orat...</p>
            <div className="bg-[#3dbdb3] flex gap-[4px] items-center justify-center px-[10px] py-[5px] rounded-[12px] w-full">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] text-white">Talk now</span>
              <svg width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path d={svgPaths.p7bf80} stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── A moment for you ────────────────────────────────────────────────────────

const ACTIVITIES = [
  {
    collapsedTitle: "Take a moment to wind down",
    collapsedDuration: "2 min",
    collapsedStyle: "two-line" as const,
    expandedTitle: "Just Breathe",
    expandedSubtitle: "▶  Video",
    expandedDuration: "2 min",
    gradient: "linear-gradient(135deg, #5ba4a0 0%, #7ec8c5 30%, #c5ddd8 55%, #d4c4b8 80%, #e0b898 100%)",
  },
  {
    collapsedTitle: "Know you emotions",
    collapsedDuration: "2 - 5 min",
    collapsedStyle: "one-line" as const,
    expandedTitle: "Explore your feelings",
    expandedSubtitle: "♡  Let's check in with yourself",
    expandedDuration: "2 - 5 min",
    gradient: "linear-gradient(135deg, #f5c842 0%, #e8a832 30%, #7bafd4 65%, #5b8ec4 100%)",
  },
  {
    collapsedTitle: "Your Daily meditation",
    collapsedDuration: "2 - 20 min",
    collapsedStyle: "one-line" as const,
    expandedTitle: "Rest beneath the twilight sky",
    expandedSubtitle: "🔊  Guided meditation",
    expandedDuration: "2 - 20 min",
    gradient: "linear-gradient(58deg, rgb(0,0,0) 0%, rgb(96,70,114) 35%, rgb(159,90,119) 60%, rgb(223,120,89) 83%, rgb(246,198,104) 107%)",
  },
];

function SeeMoreIcon() {
  return (
    <div className="bg-[#efd3ba] flex flex-col items-center justify-center rounded-[12px] size-[24px] flex-shrink-0">
      <span className="font-['Gotham_Rounded:Bold',sans-serif] text-[10px] text-black tracking-[1.1px] leading-none">...</span>
    </div>
  );
}

function MomentForYou({ activeIndex, onSelect, onStartActivity }: { activeIndex: number; onSelect: (i: number) => void; onStartActivity: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[24px] text-black">A moment for you</p>

      <div className="flex flex-col gap-[16px] w-full">
        {ACTIVITIES.map((activity, i) => {
          const isActive = i === activeIndex;
          const dotFilled = i === activeIndex;

          return (
            <div key={i} className="flex gap-[17px] items-center w-full">
              {/* Dot */}
              <div className="flex-shrink-0 size-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill={dotFilled ? "#000000" : "#E3E3E3"} />
                </svg>
              </div>

              {/* Card */}
              <button
                className="flex-1 min-w-0 text-left rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300"
                onClick={() => isActive ? onStartActivity(i) : onSelect(i)}
                style={isActive ? { background: activity.gradient } : { background: "#e3e3e3" }}
              >
                {isActive ? (
                  /* Expanded */
                  <div className="flex flex-col gap-[8px] items-start px-[14px] py-[10px] min-h-[140px] justify-center">
                    <div className="flex items-start justify-between w-full gap-[10px]">
                      <p className="font-['Gotham_Rounded:Medium',sans-serif] text-[#f6f6f6] text-[24px] leading-tight flex-1">{activity.expandedTitle}</p>
                      <SeeMoreIcon />
                    </div>
                    <p className="font-['Gotham_Rounded:Book',sans-serif] text-[#f6f6f6] text-[14px]">{activity.expandedSubtitle}</p>
                    <p className="font-['Gotham_Rounded:Book',sans-serif] text-[#f6f6f6] text-[14px]">{activity.expandedDuration}</p>
                  </div>
                ) : (
                  /* Collapsed */
                  <div className="flex flex-col items-start px-[14px] py-[10px]">
                    {activity.collapsedStyle === "two-line" ? (
                      <>
                        <p className="font-['Gotham_Rounded:Book',sans-serif] text-black text-[18px]">{activity.collapsedTitle}</p>
                        <p className="font-['Gotham_Rounded:Book',sans-serif] text-black text-[16px] mt-[11px]">{activity.collapsedDuration}</p>
                      </>
                    ) : (
                      <div className="flex gap-[18px] items-center whitespace-nowrap">
                        <p className="font-['Gotham_Rounded:Book',sans-serif] text-black text-[18px]">{activity.collapsedTitle}</p>
                        <p className="font-['Gotham_Rounded:Bold',sans-serif] text-black text-[16px]">·</p>
                        <p className="font-['Gotham_Rounded:Medium',sans-serif] text-[#4d4d4d] text-[18px]">{activity.collapsedDuration}</p>
                      </div>
                    )}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Your Recent Activity ────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
      <path d={svgPaths.p2145d0f0} stroke="#F4A93E" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function ContentRowItem({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white flex h-[72px] items-center justify-between overflow-clip px-[16px] py-[14px] rounded-[16px] shadow-[0px_1px_6.9px_0px_rgba(0,0,0,0.16)] w-full">
      <div className="flex gap-[12px] items-center w-[200px]">
        <div className="bg-[#e8f7f6] flex items-center justify-center rounded-[22px] size-[44px]">
          <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
            <path d={svgPaths.p1756ca80} stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#222] text-[13px] whitespace-nowrap">{name}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#888] text-[11px] whitespace-nowrap">{role}</p>
        </div>
      </div>
      <div className="flex gap-[4px] items-center">
        <StarIcon />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#333] text-[12px] whitespace-nowrap">4.9</p>
      </div>
    </div>
  );
}

function YourRecentActivity() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <div className="overflow-clip size-[24px] relative">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p122ed140} fill="#3DBDB3" />
              <path d={svgPaths.p2abc4500} fill="#3DBDB3" />
            </svg>
          </div>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[24px] text-black whitespace-nowrap">Your Recent Activity</p>
        </div>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path d="M6 12L10 8L6 4" stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        <ContentRowItem name="Dr. Atnatong Ph..." role="General Psychiatrist" />
        <ContentRowItem name="Assoc. Prof. Dr. Sup..." role="Psychiatrist" />
      </div>
    </div>
  );
}

// ─── Our Services ────────────────────────────────────────────────────────────

function ServiceCard({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="bg-[#e8f7f6] flex flex-col h-[124px] items-center justify-center overflow-clip pb-[14px] pt-[18px] px-[10px] rounded-[16px] shadow-[0px_0px_15px_1px_rgba(0,0,0,0.1)] w-[102px]">
      {children}
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#3dbdb3] text-[11px] text-center mt-[8px] whitespace-pre-wrap">{label}</p>
    </div>
  );
}

function OurServices() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p8c44400} stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[24px] text-black whitespace-nowrap">Our Services</p>
        </div>
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path d="M6 12L10 8L6 4" stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex items-center justify-between w-full">
          <ServiceCard label={"Mental\nHealth"}>
            <div className="bg-white rounded-[24px] size-[48px] flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d={svgPaths.p1ec1a300} fill="#3DBDB3" />
              </svg>
            </div>
          </ServiceCard>
          <ServiceCard label={"Get\nPrescription"}>
            <div className="bg-white rounded-[24px] size-[48px] flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M0.75 0.75V9.75" stroke="black" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </ServiceCard>
          <ServiceCard label={"Your\nAppointments"}>
            <div className="bg-white rounded-[24px] size-[48px] flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d={svgPaths.p34497780} fill="#555" />
              </svg>
            </div>
          </ServiceCard>
        </div>
        <div className="flex items-center justify-between w-full">
          <ServiceCard label={"Mooca\nChat"}>
            <div className="bg-white rounded-[26px] size-[52px] flex items-center justify-center">
              <svg width="23" height="23" fill="none" viewBox="0 0 23 23">
                <path d={svgPaths.p35784880} stroke="black" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </ServiceCard>
          <ServiceCard label={"Self\nAssessments"}>
            <div className="bg-white rounded-[26px] size-[52px] flex items-center justify-center">
              <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                <path d={svgPaths.pc948a98} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </ServiceCard>
          <ServiceCard label="All">
            <div className="bg-white rounded-[26px] size-[52px] flex items-center justify-center">
              <svg width="29" height="29" fill="none" viewBox="0 0 29 29">
                <path d={svgPaths.p2ff029f0} stroke="black" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}

// ─── We're here to help ──────────────────────────────────────────────────────

function EmotionChip({ bg, color, src, label }: { bg: string; color: string; src: string; label: string }) {
  return (
    <div className="rounded-[20px] flex items-center gap-[10px] px-[14px] py-[10px]" style={{ background: bg }}>
      <img src={src} alt="" className="size-[22px] object-cover flex-shrink-0" />
      <p className="font-['Gotham_Rounded:Medium',sans-serif] text-[20px] whitespace-nowrap" style={{ color }}>{label}</p>
    </div>
  );
}

function WeAreHereToHelp() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p8c44400} stroke="#3DBDB3" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <div className="font-['Gotham_Rounded:Bold',sans-serif] text-[24px] text-black">
            <p>Weighing on you?</p>
            <p>We're here to help</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] overflow-hidden w-full">
        <div className="flex gap-[8px] items-center overflow-hidden">
          <EmotionChip bg="#ffedcc" color="#cf800f" src={imgStressed} label="Stress" />
          <EmotionChip bg="#e0f2d4" color="#6aa540" src={imgMoodSwing} label="Mood Swing" />
          <EmotionChip bg="#ffe2cc" color="#f0672c" src={imgObsession} label="Obsession" />
        </div>
        <div className="flex gap-[8px] items-center overflow-hidden">
          <EmotionChip bg="#e6effa" color="#4379cb" src={imgDepression} label="Depression" />
          <EmotionChip bg="#fff0f5" color="#dc569c" src={imgPanic} label="Panic" />
          <EmotionChip bg="#f2f2f2" color="#727272" src={imgGrief} label="Grief" />
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Navigation ───────────────────────────────────────────────────────

function BottomNav() {
  return (
    <div className="bg-white rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-2px_6.7px_0px_rgba(0,0,0,0.1)] w-full flex-shrink-0">
      <div className="flex items-end justify-between pb-[42px] pt-[16px] px-[13px]">
        {/* Home - active */}
        <div className="flex flex-col items-center gap-[8px] w-[30px]">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path d={svgPaths.p1ec1a300} fill="#3DBDB3" />
          </svg>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[#3dbdb3] text-[10px] text-center whitespace-nowrap">Home</p>
        </div>
        {/* Find Providers */}
        <div className="flex flex-col items-center gap-[8px] w-[74px]">
          <svg width="22" height="22" fill="none" viewBox="0 0 22.004 22.006">
            <path d={svgPaths.p11242e00} fill="#C9D8E2" />
          </svg>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[#c9d8e2] text-[10px] text-center whitespace-nowrap">Find Providers</p>
        </div>
        {/* Mooca Chat */}
        <div className="flex flex-col items-center gap-[4px] w-[61px]">
          <div className="h-[36px] w-[49px] relative">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 37.532 36">
              <ellipse cx="18.766" cy="18" fill="#DFF8F5" rx="18.766" ry="18" />
            </svg>
            <div className="absolute inset-[8.33%_0]">
              <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 49 30">
                <path d={svgPaths.pefbba30} fill="white" />
                <path d={svgPaths.p3eecea00} fill="#A2EFE8" />
                <path d={svgPaths.pf55900} fill="#A2EFE8" />
                <path d={svgPaths.p2c5c8900} fill="#A2EFE8" />
                <path d={svgPaths.p3d961300} fill="#A2EFE8" />
                <path d={svgPaths.p173be780} fill="#EFF2F8" />
                <path d={svgPaths.p28769d00} fill="#EFF2F8" />
                <path d={svgPaths.p15b34e00} fill="#EFF2F8" />
                <path d={svgPaths.p3708e040} fill="#EFF2F8" />
                <path d={svgPaths.p3f45bdc0} fill="#EFF2F8" />
                <path d={svgPaths.p2d24f700} fill="#EFF2F8" />
                <path d={svgPaths.pd7c6f00} fill="#EFF2F8" />
                <path d={svgPaths.p5008b00} fill="#EFF2F8" />
                <path d={svgPaths.p17dbc8c0} stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.27651" />
                <path d={svgPaths.p1f263e00} stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.27651" />
              </svg>
            </div>
          </div>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[#c9d8e2] text-[10px] text-center whitespace-nowrap">Mooca Chat</p>
        </div>
        {/* Appointments */}
        <div className="flex flex-col items-center gap-[8px] w-[73px]">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path d={svgPaths.p34497780} fill="#C9D8E2" />
          </svg>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[#c9d8e2] text-[10px] text-center whitespace-nowrap">Appointments</p>
        </div>
        {/* Account */}
        <div className="flex flex-col items-center gap-[8px] w-[42px]">
          <div className="size-[22px] relative overflow-clip">
            <div className="absolute inset-[18.75%_28.13%_37.5%_28.13%]">
              <svg className="block size-full" fill="none" viewBox="0 0 11.125 11.125">
                <path d={svgPaths.p3efc5180} stroke="#C9D8E2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="absolute bottom-[13.02%] left-[21.2%] right-[21.2%] top-3/4">
              <svg className="block size-full" fill="none" viewBox="0 0 14.1738 4.13646">
                <path d={svgPaths.p7f3e940} stroke="#C9D8E2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <p className="font-['Gotham_Rounded:Bold',sans-serif] text-[#c9d8e2] text-[10px] text-center whitespace-nowrap">Account</p>
        </div>
      </div>
    </div>
  );
}

// ─── Status Bar ──────────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div className="flex items-center justify-between pb-[11.33px] pt-[13.67px] px-4 w-full">
      <div className="flex items-center justify-center w-[129.5px]">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[17px] text-black leading-[22px]">9:41</p>
      </div>
      <div className="bg-black h-[37px] rounded-[100px] w-[125px]" />
      <div className="flex items-center justify-center pr-px w-[129.5px]">
        <svg width="85.33" height="13" fill="none" viewBox="0 0 85.329 13">
          <path d={svgPaths.p9888ec0} fill="black" />
          <path clipRule="evenodd" d={svgPaths.p246ea700} fill="black" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1b665d80} fill="black" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeActivity, setActiveActivity] = useState(0);
  const [screen, setScreen] = useState<"home" | "breathe" | "emotion-checkin" | "emotion-result">("home");
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);

  const handleStartActivity = (i: number) => {
    if (i === 0) setScreen("breathe");
    if (i === 1) setScreen("emotion-checkin");
  };

  if (screen === "breathe") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <BreathingScreen onClose={() => setScreen("home")} />
      </div>
    );
  }

  if (screen === "emotion-checkin") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <EmotionCheckInScreen
          onBack={() => setScreen("home")}
          onSet={(em) => { setSelectedEmotion(em); setScreen("emotion-result"); }}
        />
      </div>
    );
  }

  if (screen === "emotion-result" && selectedEmotion) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <EmotionResultScreen emotion={selectedEmotion} onDone={() => setScreen("home")} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div
        className="relative flex flex-col overflow-hidden rounded-[40px] w-[390px] h-[844px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(204,239,239) 6.73%, rgb(245,250,250) 21.16%, rgb(255,255,255) 65.39%, rgb(204,239,239) 88.94%)",
        }}
      >
        {/* Status bar — fixed visually at top */}
        <div className="flex-shrink-0 w-full">
          <StatusBar />
        </div>

        {/* Header — fixed below status bar */}
        <div className="flex-shrink-0 px-[22px] pb-[8px]">
          <Header />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
          <div className="flex flex-col gap-[24px] items-start pb-[24px] px-[22px]">
            <HeroCard />

            {/* A moment for you — with dashed timeline line */}
            <div className="relative w-full">
              {/* Dashed vertical line */}
              <div
                className="absolute left-[30px] top-[74px] bottom-[60px] w-[4px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, #CBCFE9 0, #CBCFE9 8px, transparent 8px, transparent 16px)",
                  width: "4px",
                }}
              />
              <MomentForYou activeIndex={activeActivity} onSelect={setActiveActivity} onStartActivity={handleStartActivity} />
            </div>

            <YourRecentActivity />
            <OurServices />
            <WeAreHereToHelp />
          </div>
        </div>

        {/* Bottom navigation — pinned */}
        <div className="flex-shrink-0">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
