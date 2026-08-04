import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';

const tools = [
  {
    name: 'Claude Code',
    desc: 'UI 개발, API 연동, 타입 선언 자동화. Figma MCP와 연동하여 UI 퍼블리싱 소요시간 80% 단축.',
  },
  {
    name: 'Figma MCP',
    desc: '디자인 컴포넌트를 코드로 직접 변환. Claude Code와 함께 퍼블리싱 파이프라인을 구성하여 반복 작업 제거.',
  },
  {
    name: 'ODS MCP (자체 제작)',
    desc: 'O2플러스 디자인시스템(ODS)에 MCP 서버를 직접 제작·배포. Claude Code가 디자인시스템 컴포넌트를 정확히 사용하도록 하여 UI 작업공수 및 온보딩 시간 단축.',
  },
  {
    name: 'Playwright MCP',
    desc: 'E2E 테스트 시나리오를 자연어로 기술하여 자동화. 반복적인 QA 작업을 줄이고 테스트 커버리지 확보.',
  },
  {
    name: '개발 모니터링·디버깅 툴',
    desc: '상태 및 컴포넌트 구조 시각화 툴을 AI로 추가하여 디버깅 효율 향상.',
  },
];

const results = [
  { label: 'UI 퍼블리싱 소요시간', value: '80%', unit: '단축' },
  { label: '동일 이슈 재발생률', value: '80%', unit: '감소' },
];

function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block ml-2 align-middle">
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="url(#gemini-sparkle)"
      />
      <path
        d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z"
        fill="url(#gemini-sparkle)"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="gemini-sparkle" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#A855F7" />
          <stop offset="70%" stopColor="#EA4393" />
          <stop offset="100%" stopColor="#FA7B17" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Page3() {
  return (
    <SlideLayout subtitle="AI" title="AI 활용 경험" hideTitle>
      {/* Gemini gradient background glow */}
      <style>{`
        .gemini-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          padding: 1px;
          background: linear-gradient(135deg, #4285F4, #A855F7, #EA4393, #FA7B17, #4285F4);
          background-size: 300% 300%;
          animation: gemini-shift 6s ease infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          pointer-events: none;
        }
        .gemini-title {
          background: linear-gradient(90deg, #4285F4, #A855F7, #EA4393, #FA7B17);
          background-size: 200% auto;
          animation: gemini-shift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Custom title with sparkle */}
      <div className="shrink-0 mb-2">
        <p className="accent-text text-[clamp(0.495rem,0.88vw,0.77rem)] uppercase tracking-[0.25em] mb-[0.4em]">
          AI
        </p>
        <h1 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold leading-tight">
          <SparkleIcon />
          <span className="gemini-title ml-2">AI 활용 경험</span>
        </h1>
      </div>

      <div className="flex gap-[4%] flex-1 min-h-0 pt-[2%] relative">
        {/* Gemini gradient border */}

        {/* Left — 성과 카드 */}
        <div className="w-1/3 flex flex-col gap-[4%] justify-start p-[2%]">
          {results.map((r) => (
            <div
              key={r.label}
              className="rounded-xl px-[8%] py-[6%] flex flex-col gap-1"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
            >
              <p className="text-xs text-gray-400">{r.label}</p>
              <p className="text-3xl font-bold" style={{ color: purple.accent }}>{r.value}</p>
              <p className="text-sm text-gray-300">{r.unit}</p>
            </div>
          ))}
          <div
            className="rounded-xl px-[8%] py-[6%] flex flex-col gap-2"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
          >
            <p className="text-xs text-gray-400">주요 활용 도구</p>
            {['Claude Code', 'Figma MCP', 'ODS MCP', 'Playwright MCP'].map((tool) => (
              <span
                key={tool}
                className="text-xs px-2 py-0.5 rounded w-fit"
                style={{ backgroundColor: 'rgba(168,85,247,0.15)', color: orange.light }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Right — 도구별 설명 */}
        <div className="w-2/3 flex flex-col gap-[3%] justify-start p-[2%]">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl px-[5%] py-[3%]"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: orange.light }}>{tool.name}</p>
              <p className="text-xs text-gray-300 leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
