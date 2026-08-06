import SlideLayout from '@/layouts/SlideLayout';
import { HighlightText } from '@/lib/utils';
import { purple } from '@/styles/theme';

const metrics = [
  { label: 'UI 퍼블리싱 소요시간', value: '80%', unit: '단축' },
  { label: 'API 스펙 업데이트 소요시간', value: '93%', unit: '단축' },
  { label: 'API 버그 리포트 작성 및 보고', value: '100%', unit: '자동화' },
];

const tools = [
  {
    name: 'Claude Code',
    desc: '자동화 파이프라인의 주력 도구. UI 개발·API 연동·타입 선언 자동화',
  },
  {
    name: 'ODS MCP',
    desc: (
      <>
        <HighlightText>@modelcontextprotocol/sdk</HighlightText> 사용하여 디자인
        시스템 적용 자동화하는 MCP server 제작,{' '}
        <HighlightText>
          기존 프롬프트 정리와 주입 소요시간 및 파편화 이슈
        </HighlightText>{' '}
        해결
      </>
    ),
  },
  {
    name: 'Figma MCP',
    desc: (
      <>
        디자인 컴포넌트를 코드로 직접 변환, 퍼블리싱 자동화로{' '}
        <HighlightText>UI 작업 소요시간 단축</HighlightText>
      </>
    ),
  },
  { name: 'Jira MCP', desc: '이슈 기반 API 스펙 업데이트 93% 자동화' },
  {
    name: 'Playwright MCP',
    desc: '실제 환경 기준 E2E 테스트 자동화 및 API 버그 리포트 작성 100% 자동화',
  },
];

function SparkleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block ml-2 align-middle"
    >
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

      <div className="flex-1 min-h-0 flex gap-6 flex items-start">
        {/* 좌측 콘텐츠 (3/4) */}
        <div className="flex flex-col gap-6" style={{ flex: 3 }}>
          {/* 본문 설명 */}
          <div>
            <p className="text-lg font-bold text-white">
              <HighlightText>Claude Code 기반</HighlightText> 업무 프로세스
              자동화
            </p>
            <p className="text-sm text-gray-300 mt-1">
              기존 SOLID 원칙 기반 설계에 AI 자동화를 더해,{' '}
              <HighlightText>더 높은 우선순위의 업무에 집중</HighlightText>할 수
              있는 개발환경을 조성하였습니다.
            </p>
          </div>
          {/* 상단 지표 3칸 */}
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-4 flex flex-col gap-1 text-center"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${purple.border}`,
                }}
              >
                <p className="text-xs text-gray-400">{m.label}</p>
                <div className="flex gap-2 justify-center items-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: purple.accent }}
                  >
                    {m.value}
                  </p>
                  <p className="text-sm text-gray-300">{m.unit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 주요 활용 도구 테이블 */}
          <div>
            <p className="text-sm font-semibold text-white mb-2">
              주요 활용 도구
            </p>
            <table
              className="text-sm w-full"
              style={{
                borderCollapse: 'collapse',
                border: `1px solid ${purple.border}`,
              }}
            >
              <tbody>
                {tools.map((tool) => (
                  <tr
                    key={tool.name}
                    style={{ borderBottom: `1px solid ${purple.border}` }}
                  >
                    <td
                      className="accent-text whitespace-nowrap align-middle py-2 pr-6"
                      style={{
                        background: purple.muted,
                        paddingLeft: '0.5rem',
                        width: '1%',
                      }}
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

        {/* 우측 MCP 다이어그램 (1/4) */}
        <div
          className="flex flex-col items-center justify-center gap-2"
          style={{ flex: 1 }}
        >
          <p className="text-sm font-semibold text-white">
            <HighlightText>ODS MCP 순서도</HighlightText>
          </p>
          <img
            src="/assets/ai-mcp-diagram.png"
            alt="ODS MCP 순서도"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
