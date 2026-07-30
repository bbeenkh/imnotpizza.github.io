import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '해결 방법과 선택 이유',
    content: (<>백그라운드 위치추적의 <span className="accent-text font-bold">정책 대응, 안정성, 데이터 흐름 일관성 확보</span>를 목표로 다음과 같은 방향으로 설계했습니다.{'\n\n'}<span className="accent-text font-bold">1. 사용자 제어 기반 위치 추적 구조 도입</span>{'\n'}  - 위치 추적을 기본 비활성화하고, 사용자가 이를 직접 활성화/비활성화 하도록 하였으며 의도치 않게 위치추적 활성화를 방지하였으며, 예기치 못하게 위치전송 실패 시 피드백을 구현하였습니다.{'\n'}<span className="accent-text font-bold">2. Web ↔ Native 간 단일 데이터 흐름 구조 확립</span>{'\n'}  - 위치 데이터 전달 경로를 단일화하여 디버깅 및 유지보수 용이성을 확보했습니다.{'\n'}  - 커스터마이징 및 호환 이슈를 피하기 위해 외부 라이브러리 의존 대신 Android Native에서 직접 구현하기로 하였습니다.</>),
  },
  {
    title: '해결 과정과 성과',
    content: (<><span className="accent-text font-bold">백그라운드 위치 전송 기능은 다음과 같은 단계로 구현했습니다.</span>{'\n\n'}1. 사용자가 기능을 활성화하면 WebView에서 Native로 시작 이벤트를 전달하였고 <span className="accent-text font-bold">ACCESS_FINE_LOCATION</span>, <span className="accent-text font-bold">ACCESS_BACKGROUND_LOCATION</span> 권한 요청 및 승인 절차를 구성했습니다.{'\n'}2. Android Native의 <span className="accent-text font-bold">FusedLocationProviderClient</span>를 활용하여 GPS 좌표와 나침반 방향정보도 수집하였습니다.{'\n'}3. Native에서 수집한 데이터를 React Native에서 setInterval을 사용하여 주기적으로 <span className="accent-text font-bold">postMessage</span>를 통해 WebView로 위치 및 방향 데이터를 전달했습니다.{'\n'}4. 전달받은 데이터를 파싱하여 지도 컴포넌트에 실시간 위치 표시를 나타내도록 하였습니다.</>),
  },
];

export default function Page13() {
  return (
    <SlideLayout subtitle="Projects" title="휘릭">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex items-start">
          <img
            src="/assets/whirik-2.png"
            alt="휘릭 화면 2"
            className="w-full h-[500px] object-contain rounded-lg"
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
