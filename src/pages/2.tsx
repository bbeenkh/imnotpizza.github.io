import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';

const skillCategories = [
  { label: 'Core Library & Framework', items: ['React', 'Next.js (Page/App Router)', 'Vue.js', 'TypeScript', 'React Native'] },
  { label: 'State Management', items: ['Zustand', 'React Query', 'Recoil', 'Redux', 'Pinia'] },
  { label: 'Micro Frontend', items: ['Turborepo', 'Module Federation'] },
  { label: 'Bundler', items: ['Vite', 'Rollup', 'Webpack'] },
  { label: 'Styling', items: ['Tailwind CSS', 'styled-components', 'framer-motion'] },
  { label: 'Deployment & DevOps', items: ['Vercel', 'GitHub Packages', 'Docker'] },
  { label: 'Testing', items: ['Playwright', 'Vitest', 'MSW'] },
  { label: 'AI', items: ['Claude Code'] },
];

const highlights: { title: string; desc: React.ReactNode }[] = [
  {
    title: '프레임워크 & 모바일 프로젝트 설계&운용',
    desc: <><span className="accent-text font-bold">React, Next.js, Vue.js, TypeScript</span>를 메인 스택으로 한 서비스 개발경험과 <span className="accent-text font-bold">React Native+SPA Web 기반의 하이브리드 앱</span> 제작 등의 모바일 개발 경험을 가지고 있습니다.</>,
  },
  {
    title: '성능 최적화',
    desc: <><span className="accent-text font-bold">React Devtools</span> 프로파일링과 Network Waterfall을 활용해 렌더링 및 페이지 로드 성능 향상 경험, <span className="accent-text font-bold">Web Vitals 지표 개선</span> 경험을 가지고 있습니다.</>,
  },
  {
    title: '수정에 용이하고 확장 가능한 UI 설계',
    desc: <><span className="accent-text font-bold">SOLID 원칙</span>을 기반으로 재사용 가능하며 확장가능한 UI 설계에 관심이 많으며, 이를 적용하여 <span className="accent-text font-bold">UI 작업공수 감소, 에러 재발생률 감소</span> 등의 성과를 내었습니다.</>,
  },
  {
    title: '테스트 자동화 구축',
    desc: <><span className="accent-text font-bold">Playwright, Vitest, MSW</span>를 사용하여 단위테스트, e2e 시나리오테스트를 적용하였습니다. test coverage보다 <span className="accent-text font-bold">핵심 코드를 철저히 테스트</span>하는 것을 우선시하였습니다.</>,
  },
  {
    title: 'AI 자동화를 통한 생산성 향상',
    desc: <><span className="accent-text font-bold">Claude Code, MCP</span>를 도입하여 UI 작업 등 단순작업을 자동화하였고, 디자인시스템에 Skill을 적용하여 <span className="accent-text font-bold">정확성과 토큰 사용량을 최적화</span>하였습니다.</>,
  },
];

export default function Page2() {
  return (
    <SlideLayout subtitle="핵심 역량" title="Hard Skills">
      <div className="grid grid-cols-3 gap-[4%] h-full pt-[4%]">
        {/* 좌측 1/3: 스킬 카테고리 */}
        <div className="grid grid-cols-2 gap-x-[4%] gap-y-[4%] content-start">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold accent-text">
                {category.label}
              </h3>
              {category.items.length > 0 && (
                <ul className="mt-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-xs text-gray-300 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 우측 2/3: 하이라이트 카드 2xn 그리드 */}
        <div className="col-span-2 grid grid-cols-2 gap-[3%] overflow-y-auto content-start">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-xl px-[6%] py-[4%]"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
            >
              <p className="text-xs font-semibold mb-[3%]" style={{ color: orange.light }}>
                {item.title}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
