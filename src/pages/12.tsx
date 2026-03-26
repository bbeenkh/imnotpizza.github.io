import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 개요',
    content: '휘릭은 화물 운송 기사를 위한 WebView 기반 하이브리드 앱으로, 지도를 통해 자신의 위치와 목적지파악, 오더 탐색부터 운송 완료까지의 현황을 실시간으로 확인, 진행할 수 있습니다.',
  },
  {
    title: '담당 역할 및 업무 범위',
    content: 'Webview, React Native의 설계 및 개발을 담당하였습니다.',
  },
];

export default function Page12() {
  return (
    <SlideLayout subtitle="Projects" title="휘릭">
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
