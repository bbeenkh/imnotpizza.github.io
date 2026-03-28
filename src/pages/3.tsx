import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';

const softSkills: { title: string; desc: React.ReactNode }[] = [
  {
    title: '복잡한 도메인 분석, 팀간 협업을 통한 UI,UX 설계 경험',
    desc: <>여러 <span className="accent-text font-bold">B2B SaaS 서비스</span>들의 복잡한 비즈니스 도메인을 분석하여 사용자의 니즈와 핵심을 파악하고, 기획·디자인·백엔드와의 협업을 통해 데이터 흐름과 사용자 행동을 기준으로 <span className="accent-text font-bold">UI 설계</span>에 참여하였습니다.</>,
  },
  {
    title: '문서 작성의 습관화로 일관적인 정보전달 및 혼선 방지',
    desc: <><span className="accent-text font-bold">Confluence</span>와 같은 사내위키에 회의 주제와 같은 공유내용을 일관적으로 제공하여 팀 내 정보 전달의 일관성을 유지하고 <span className="accent-text font-bold">커뮤니케이션 비용을 최소화</span>하였습니다.</>,
  },
  {
    title: '팀 개개인의 의견 존중 및 최선의 해결책 모색',
    desc: <>협업 과정에서 관점이 엇갈릴 때도 각자의 입장을 최대한 수렴하여 공통 목표를 정하였고, 의견 조율이 되지 않을 시 객관적 사실을 바탕으로 <span className="accent-text font-bold">시뮬레이션·프로토타입 제작</span>을 통해 최종적으로 의견을 결정하였습니다.</>,
  },
  {
    title: '서비스의 성장과 개선의 본질을 추구합니다.',
    desc: <>개발자가 하는 모든 일들은 결국 <span className="accent-text font-bold">회사와 서비스의 성장</span>에 초점을 맞춰야 한다고 믿고 있으며, 저의 업무 방향도 이러한 점을 중심으로 하고 있습니다.</>,
  },
];

export default function Page3() {
  return (
    <SlideLayout subtitle="핵심 역량" title="Soft Skills">
      <div className="grid grid-cols-2 grid-rows-2 gap-[3%] h-full pt-[4%]">
        {softSkills.map((skill, i) => (
          <div
            key={i}
            className="rounded-xl px-[6%] py-[4%] flex flex-col justify-center"
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
