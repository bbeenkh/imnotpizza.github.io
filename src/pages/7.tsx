import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content: '코코넛은 KT M&S와의 협력하에 운영중인 휴대폰 구매 상담과 유통 관리 기능을 담고 있는 서비스입니다.',
  },
  {
    title: '담당 역할',
    content: '코코넛 신규기능, 유지보수, 이슈대응 작업에 대한 팀원 업무 분배, 일정 조율 등 전반적 팀 운영관리를 하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'Vue.js 기반 SPA 프로젝트이며, Module Federation을 사용한 React 모듈이 부분적으로 포함된 방식으로 구성되어있습니다.',
  },
];

export default function Page7() {
  return (
    <SlideLayout subtitle="Projects" title="Coconuts">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 (1/3) */}
        <div className="w-1/3 flex items-center">
          <div
            className="w-full aspect-video rounded-lg"
            style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-2/3 flex flex-col justify-center">
          <div className="flex flex-col gap-[6%]">
            {topics.map((topic, i) => (
              <div key={i}>
                {topic.title && (
                  <h4 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h4>
                )}
                <p className="text-sm text-gray-300 mt-[2%] leading-relaxed whitespace-pre-line">
                  {topic.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
