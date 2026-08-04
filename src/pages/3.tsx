import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';

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

export default function Page3() {
  return (
    <SlideLayout subtitle="핵심 역량" title="Soft Skills">
      <div className="grid grid-cols-2 grid-rows-2 gap-[3%] h-full pt-[4%]">
        {softSkills.map((skill, i) => (
          <div
            key={i}
            className="rounded-xl px-[4%] py-[3%] flex flex-col justify-start"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
          >
            <p className="text-xs font-semibold mb-[3%]" style={{ color: orange.light }}>
              {skill.title}
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
