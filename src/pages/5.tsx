import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content:
      'my010은 대리점, 판매점의 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스입니다.',
  },
  {
    title: '담당 역할',
    content:
      '프론트엔드 리드 역할을 맡아 업무 분배, 일정관리 및 기획에 따라 상세 UI 설계에 참여하였습니다. 특히 리베이트(보조금) 등록 및 개통 기능에 중점적으로 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content:
      'Next.js(v15), React19, typescript, React Query, Zustand, Vercel, tailwindcss',
  },
];

export default function Page5() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex flex-col items-center justify-center gap-[4%]">
          <img
            src="/assets/my010-1.png"
            alt="My010 화면 1"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/my010-1-2.png"
            alt="My010 화면 1-2"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>
        <div className="w-2/3 flex flex-col justify-start">
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
