import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';

const hardSkills: { title: string; desc: React.ReactNode }[] = [
  {
    title: '복잡한 도메인 분석 기반 설계',
    desc: (
      <>
        정책 변경이 잦은 통신 유통 도메인에서 오류의 상당수가 도메인 간 side
        effect에서 발생하는 문제를 극복하기 위해 요금계산·단말기·결합상품 로직을{' '}
        <span className="accent-text font-bold">SOLID 원칙</span> 기반으로
        분리해 변경의 영향 범위를 좁히고,{' '}
        <span className="accent-text font-bold">
          동일 이슈 재발생률 80% 감소
        </span>
        를 달성함.
      </>
    ),
  },
  {
    title: '프레임워크 & 모바일 프로젝트 설계·운용',
    desc: (
      <>
        <span className="accent-text font-bold">
          React, Next.js(Page Router, v15 App Router), TypeScript
        </span>
        를 메인 스택으로 다수의 서비스를 개발 및 유지. 주로 대규모 Form,
        대시보드, 에디터, 테이블, 차트 등 대규모 데이터 시각화 및 갱신에 대한
        UI를 주로 작업함. 또한{' '}
        <span className="accent-text font-bold">React Native + WebView</span>
        기반 하이브리드 앱 제작 및 모바일 반응형 UI에 대한 작업 경험 있음
      </>
    ),
  },
  {
    title: '성능 최적화',
    desc: (
      <>
        <span className="accent-text font-bold">React Devtools</span>{' '}
        프로파일링과 Network Waterfall로 병목 지점을 특정한 뒤 개선 순서를
        정하는 방식을 택함. Code Splitting, 렌더링 최적화 등을 통해{' '}
        <span className="accent-text font-bold">프레임 드랍 85% 감소</span> 및{' '}
        <span className="accent-text font-bold">Web Vitals 지표를 개선</span>함.
      </>
    ),
  },
  {
    title: '테스트 자동화 구축',
    desc: (
      <>
        <span className="accent-text font-bold">Playwright, Vitest, MSW</span>를
        사용해 단위 테스트와 e2e 시나리오 테스트를 구축함. coverage 수치보다{' '}
        <span className="accent-text font-bold">핵심 코드를 철저히 검증</span>
        하는 것을 우선 기준으로 삼고,{' '}
        <span className="accent-text font-bold">Sentry</span> 기반 이슈 추적과
        함께 운영해 회귀를 관리함.
      </>
    ),
  },
];

const softSkills: { title: string; desc: React.ReactNode }[] = [
  {
    title: '프론트엔드 리드 — 팀 운영 및 도메인 재편',
    desc: (
      <>
        팀원들의 일정 관리와 R&R 분배, 기술적 의사결정을 담당함. 도메인 단위로
        담당을 재편해 불필요한 도메인 학습시간을 줄이고 작업 배분을 명료화하여{' '}
        <span className="accent-text font-bold">
          팀 전체의 개발 리드타임을 단축
        </span>
        함.
      </>
    ),
  },
  {
    title: '회의 구조 & 스크럼 도입 — 소요시간 66%↓ · 사후 이슈 80%↓',
    desc: (
      <>
        회의 룰 및 프레임워크를 작성해{' '}
        <span className="accent-text font-bold">회의 소요시간을 66% 감소</span>
        시키고, 스크럼 기반{' '}
        <span className="accent-text font-bold">일일 이슈 공유 체계</span>를
        도입하여 사후 대응 이슈를{' '}
        <span className="accent-text font-bold">80% 감소</span>시킴.
      </>
    ),
  },
  {
    title: '직군 간 협업 — 공통 기준 수립',
    desc: (
      <>
        디자이너와는 UI 시각화, 백엔드와는 데이터 근거를 기준으로{' '}
        <span className="accent-text font-bold">합의하는 방식을 정착</span>시킴.
        기획을 상세 UI로 옮기는 설계에 직접 참여하고, 피드백과 지표를 근거로{' '}
        <span className="accent-text font-bold">유저 플로우를 개선</span>함.
      </>
    ),
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-[3%]"
      style={{ color: purple.light }}
    >
      {children}
    </p>
  );
}

function SkillCard({ title, desc }: { title: string; desc: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: `1px solid ${purple.border}`,
      }}
    >
      <p
        className="text-xs font-semibold mb-[3%]"
        style={{ color: orange.light }}
      >
        {title}
      </p>
      <p className="text-xs text-gray-300 leading-relaxed">{desc}</p>
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
