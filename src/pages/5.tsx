import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content: 'my010은 대리점, 판매점의 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스입니다.',
  },
  {
    title: '담당 역할',
    content: '프론트엔드 리드 역할을 맡아 업무 분배, 일정관리, 아키텍처 정하기 디자인 팀의 업무 과중때문에 기획에 따라 상세 UI를 직접 설계',
  },
  {
    title: '주요 기술 스택',
    content: 'Next.js(15, App Router), React 19, ….',
  },
];

export default function Page5() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex items-center">
          <div
            className="w-full aspect-video rounded-lg"
            style={{ backgroundColor: purple.muted, border: `1px solid ${purple.border}` }}
          />
        </div>
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
