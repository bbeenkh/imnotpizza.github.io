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

const hardSkills: { title: string; desc: React.ReactNode }[] = [
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
];

const softSkills: { title: string; desc: React.ReactNode }[] = [
  {
    title: '프론트엔드 리드 경험 — 팀 운영 및 도메인 재편',
    desc: <>프론트엔드 리드로서 <span className="accent-text font-bold">팀원 2명의 일정 및 R&R 관리</span>를 담당하였습니다. 도메인 단위로 담당을 재편하여 불필요한 도메인 학습시간을 줄이고 작업 배분을 명료화하여 <span className="accent-text font-bold">팀 전체의 개발 리드타임을 단축</span>하였습니다.</>,
  },
  {
    title: '비효율적 회의 구조 개선 — 소요시간 66% 감소',
    desc: <>회의 룰 및 프레임워크를 작성하여 불필요한 논의를 줄이고 <span className="accent-text font-bold">회의 소요시간을 66% 감소</span>시켰습니다. Confluence 기반 사내위키에 공유 내용을 일관되게 기록하여 커뮤니케이션 비용을 최소화하였습니다.</>,
  },
  {
    title: '스크럼 방법론 도입 — 사후 대응 이슈 80% 감소',
    desc: <>스크럼 기반 <span className="accent-text font-bold">일일 이슈 공유 체계</span>와 스프린트 범위 조정 프로세스를 도입하여 이슈를 사전에 파악하고 일정 차질을 방지하였습니다. 그 결과 사후 대응 이슈 비율이 <span className="accent-text font-bold">80% 가량 감소</span>하였습니다.</>,
  },
  {
    title: '복잡한 도메인 분석 및 팀간 협업을 통한 UI/UX 설계',
    desc: <>여러 <span className="accent-text font-bold">B2B SaaS 서비스</span>의 복잡한 비즈니스 도메인을 분석하여 사용자 니즈를 파악하고, 기획·디자인·백엔드와의 협업을 통해 데이터 흐름과 사용자 행동을 기준으로 <span className="accent-text font-bold">UI/UX 설계</span>에 직접 참여하였습니다.</>,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest mb-[3%]" style={{ color: purple.light }}>
      {children}
    </p>
  );
}

function SkillCard({ title, desc }: { title: string; desc: React.ReactNode }) {
  return (
    <div
      className="rounded-xl px-[5%] py-[4%]"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
    >
      <p className="text-xs font-semibold mb-[3%]" style={{ color: orange.light }}>
        {title}
      </p>
      <p className="text-xs text-gray-300 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function Page2() {
  return (
    <SlideLayout subtitle="skills" title="Skills">
      <div className="grid grid-cols-2 gap-[3%] h-full pt-[3%]">
        {/* 좌: Tech Stack 태그 뱃지 (주석 처리)
        <div className="flex flex-col gap-[5%] overflow-hidden">
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="flex flex-col gap-[6%]">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <p className="text-xs font-semibold accent-text mb-1">{cat.label}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] text-gray-300 px-1.5 py-0.5 rounded"
                      style={{ border: `1px solid ${purple.border}`, backgroundColor: 'rgba(168,85,247,0.08)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* 좌: Hard Skills 카드 2x2 */}
        <div className="flex flex-col">
          <SectionLabel>Hard Skills</SectionLabel>
          <div className="grid grid-cols-1 gap-[4%] content-start">
            {hardSkills.map((item, i) => (
              <SkillCard key={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        {/* 우: Soft Skills 카드 2x2 */}
        <div className="flex flex-col">
          <SectionLabel>Soft Skills</SectionLabel>
          <div className="grid grid-cols-1 gap-[4%] content-start">
            {softSkills.map((item, i) => (
              <SkillCard key={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
