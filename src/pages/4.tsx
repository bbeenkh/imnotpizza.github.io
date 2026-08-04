import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const metrics = [
  { label: 'UI 퍼블리싱 소요시간', value: '80%', unit: '단축' },
  { label: 'API 스펙 업데이트', value: '100%', unit: '자동화' },
  { label: '테스트·버그 리포트', value: '100%', unit: '자동화' },
];

const tools = [
  { name: 'Claude Code', desc: '자동화 파이프라인의 주력 도구. UI 개발·API 연동·타입 선언 자동화' },
  { name: 'ODS MCP (자체 제작)', desc: '사내 디자인시스템(ODS)에 MCP 서버를 직접 제작·배포. Claude Code가 디자인시스템 컴포넌트를 정확히 사용하도록 하여 UI 작업공수 및 온보딩 시간 단축' },
  { name: 'Figma MCP', desc: '디자인 컴포넌트를 코드로 직접 변환, 퍼블리싱 자동화로 작업 소요시간 80% 단축' },
  { name: 'Jira MCP', desc: '이슈 기반 API 스펙 업데이트 100% 자동화' },
  { name: 'Playwright MCP', desc: '실제 환경 기준 E2E 테스트 자동화 및 API 버그 리포트 작성 100% 자동화' },
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
      <style>{`
        .gemini-title {
          background: linear-gradient(90deg, #4285F4, #A855F7, #EA4393, #FA7B17);
          background-size: 200% auto;
          animation: gemini-shift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Title with sparkle */}
      <div className="shrink-0 mb-2">
        <p className="accent-text text-[clamp(0.495rem,0.88vw,0.77rem)] uppercase tracking-[0.25em] mb-[0.4em]">
          AI
        </p>
        <h1 className="text-[clamp(0.99rem,2.42vw,1.98rem)] font-bold leading-tight">
          <span className="gemini-title">AI 활용 경험</span>
          <SparkleIcon />
        </h1>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-4 pt-[2%]">
        {/* 상단 지표 3칸 */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-4 flex flex-col gap-1 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
            >
              <p className="text-xs text-gray-400">{m.label}</p>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-2xl font-bold" style={{ color: purple.accent }}>{m.value}</p>
              <p className="text-sm text-gray-300">{m.unit}</p>
            </div>
            </div>
          ))}
        </div>

        {/* 본문 설명 */}
        <div>
          <p className="text-lg font-bold text-white">Claude Code 기반 업무 프로세스 자동화</p>
          <p className="text-sm text-gray-300 mt-1">
            기존 SOLID 원칙 기반 설계에 AI 활용 자동화를 더해, 변경 요구에 더 신속히 대응 가능한 개발환경 조성
          </p>
        </div>

        {/* 주요 활용 도구 테이블 */}
        <div>
          <p className="text-sm font-semibold text-white mb-2">주요 활용 도구</p>
          <table className="text-sm w-full" style={{ borderCollapse: 'collapse', border: `1px solid ${purple.border}` }}>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.name} style={{ borderBottom: `1px solid ${purple.border}` }}>
                  <td
                    className="accent-text whitespace-nowrap align-middle py-2 pr-6"
                    style={{ background: purple.muted, paddingLeft: '0.5rem', width: '1%' }}
                  >
                    {tool.name}
                  </td>
                  <td className="text-gray-300 py-2 px-3">{tool.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}
