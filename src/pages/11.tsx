import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '프로젝트 설명',
    content: '휘릭은 화물 운송 기사를 위한 WebView 기반 하이브리드 앱으로, 지도를 통해 자신의 위치와 목적지파악, 오더 탐색부터 운송 완료까지의 현황을 실시간으로 확인, 진행할 수 있습니다.',
  },
  {
    title: '담당 역할',
    content: 'Webview, React Native의 설계 및 개발을 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'React 18, React Native, TypeScript, Create React App, framer-motion',
  },
  {
    title: '발생한 문제',
    content: (<>휘릭은 백그라운드에서도 지속적으로 위치를 수집·전송해야 하는 구조로, 다음과 같은 문제가 존재했습니다.{'\n\n'}<span className="accent-text font-bold">- 백그라운드 위치전송 예외상황 처리 필요</span>{'\n'}  위치 권한 거부, GPS 비활성화, 네트워크 단절 등 다양한 예외 상황에서 위치 수집 및 전송의 중단 기준이 명확하지 않았고, 사용자에게 상태를 안내하는 기능이 부족했습니다.{'\n'}<span className="accent-text font-bold">- 웹뷰에서 위치 수신 및 지도 반영 구조의 불안정성</span>{'\n'}  Native에서 수집한 위치 데이터를 WebView로 실시간으로 전달할 수 있는 기능이 필요하였습니다.</>),
  },
];

export default function Page11() {
  return (
    <SlideLayout subtitle="Projects" title="휘릭">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex flex-row items-center justify-center gap-[4%]">
          <img
            src="/assets/whirik-1-1.png"
            alt="휘릭 화면 1-1"
            className="w-1/2 rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <img
            src="/assets/whirik-1-2.png"
            alt="휘릭 화면 1-2"
            className="w-1/2 rounded-lg"
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
