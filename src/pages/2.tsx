import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const skillCategories = [
  { label: 'Core Library & Framework', items: [] },
  { label: 'State Management', items: [] },
  { label: 'Micro Frontend', items: [] },
  { label: 'Bundler', items: [] },
  { label: 'Styling', items: [] },
  { label: 'Deployment & DevOps', items: [] },
  { label: 'Testing', items: [] },
  { label: 'AI', items: [] },
];

const highlights = [
  'React, Nextjs(v15 App Router), Vue.js, Typescript를 메인 스택으로 한 서비스 개발경험과 React Native+SPA Web 기반의 하이브리드 앱 제작 등의 모바일 개발 경험을 가지고 있습니다.',
  'React Devtools 의 프로파일링과 Network Waterfall을 활용해 렌더링 및 페이지 로드 성능 향상 경험, Web Vitals 지표 개선 경험을 가지고 있습니다.',
  'SOLID 원칙을 기반으로 재사용 가능하며 확장가능한 UI 설계에 관심이 많으며, 이러한 원칙을 컴포넌트 및 비즈니스 로직에 적용하여 UI 작업공수 감소, 에러 재발생률 감소 등의 성과를 내었습니다.',
  'PlayWright, Vitest, MSW 를 사용하여 단위테스트, e2e 시나리오테스트를 프로젝트에 적용하였습니다. 테스트 대상의 우선순위를 적용하여 test coverage에 집중하기 보다는 핵심 코드를 철저히 테스트 할수 있도록 하였습니다.',
  {
    title: 'Claude Code 를 사용한 코드 자동화',
    desc: 'Claude Code 를 도입하여 UI 작업 등 단순작업을 자동화하였고, 디자인시스템에 Skill 사용하여 정확성과 토큰 사용량을 최적화하였습니다.',
  },
];

export default function Page2() {
  return (
    <SlideLayout subtitle="About" title="Lorem Ipsum Dolor">
      <div className="grid grid-cols-2 gap-[4%] h-full pt-[4%]">
        {/* 좌측: 스킬 카테고리 */}
        <div className="grid grid-cols-2 gap-x-[6%] gap-y-[4%] content-start">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold" style={{ color: purple.light }}>
                {category.label}
              </h3>
            </div>
          ))}
        </div>

        {/* 우측: 하이라이트 카드 */}
        <div className="flex flex-col gap-[3%] overflow-y-auto">
          {highlights.map((item, i) => {
            const isObj = typeof item === 'object';
            return (
              <div
                key={i}
                className="rounded-xl px-[6%] py-[4%]"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
              >
                {isObj && (
                  <p className="text-xs font-semibold mb-[3%]" style={{ color: purple.light }}>
                    {item.title}
                  </p>
                )}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {isObj ? item.desc : item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
