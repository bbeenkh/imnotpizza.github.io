import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content: '퀵, 택배접수, 배송현황, 결제현황 등을 처리하고 실시간 배송 현황을 손쉽게 파악할 수 있는 PC/앱 기반 B2B 서비스입니다. 앱의 경우 webview를 통해 컨텐츠를 보여주는 하이브리드 앱 방식입니다.',
  },
  {
    title: '담당 역할',
    content: '투디 웹 서비스 프론트엔드의 전반적인 개발을 담당하였습니다.',
  },
];

export default function Page9() {
  return (
    <SlideLayout subtitle="Projects" title="오늩의 배송 Toodee (투디)">
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
