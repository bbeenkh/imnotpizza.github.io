import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '발생한 문제',
    content: '휘릭은 백그라운드에서도 지속적으로 위치를 수집·전송해야 하는 구조로, 다음과 같은 문제가 존재했습니다.\n\n- 백그라운드 위치전송 예외상황 처리 필요\n  위치 권한 거부, GPS 비활성화, 네트워크 단절 등 다양한 예외 상황에서 위치 수집 및 전송의 중단 기준이 명확하지 않았고, 사용자에게 상태를 안내하는 기능이 부족했습니다.\n- 웹뷰에서 위치 수신 및 지도 반영 구조의 불안정성\n  Native에서 수집한 위치 데이터를 WebView로 실시간으로 전달할 수 있는 기능이 필요하였습니다.',
  },
  {
    title: '해결 방법과 선택 이유',
    content: '백그라운드 위치추적의 정책 대응, 안정성, 데이터 흐름 일관성 확보를 목표로 다음과 같은 방향으로 설계했습니다.\n\n1. 사용자 제어 기반 위치 추적 구조 도입\n  위치 추적을 기본 비활성화하고, 사용자가 이를 직접 활성화/비활성화 하도록 하였으며 활성화시 백그라운드 위치추적이 활성화됨을 명시함으로써 착오가 발생하지 않도록 하였습니다.\n2. 예외 상황 대응 중심의 안정성 강화\n  네트워크, 권한, GPS 상태 등 다양한 실패 케이스를 고려한 방어적 구조로 설계했습니다. 위치 수집/전송 실패 시에도 서비스 전체 흐름이 깨지지 않도록 하는 데 목적을 두었습니다.\n3. Web ↔ Native 간 단일 데이터 흐름 구조 확립\n  위치 데이터 전달 경로를 단일화하여 디버깅 및 유지보수 용이성을 확보했습니다. 커스터마이징 및 호환 이슈를 피하기 위해 외부 라이브러리 의존 대신 Android Native에서 직접 구현하기로 하였습니다.',
  },
  {
    title: '해결 과정과 성과',
    content: '백그라운드 위치 전송 기능은 다음과 같은 단계로 구현했습니다.\n\n1. 위치 추적 활성화 및 권한 처리\n  사용자가 기능을 활성화하면 WebView에서 Native로 시작 이벤트를 전달하였고 ACCESS_FINE_LOCATION, ACCESS_BACKGROUND_LOCATION 권한 요청 및 승인 절차를 구성했습니다.\n2. Native 기반 위치 수집 구조 구현\n  Android Native의 FusedLocationProviderClient를 활용하여 GPS 좌표와 나침반 방향정보도 수집하였습니다.\n3. React Native 브릿지를 통한 데이터 전달\n  Native에서 수집한 데이터를 React Native에서 setInterval을 사용하여 주기적으로 폴링하도록 구성했습니다. postMessage를 통해 WebView로 위치 및 방향 데이터를 전달했습니다.\n4. WebView 내 상태 관리 및 지도 반영\n  전달받은 데이터를 파싱하여 지도 컴포넌트에 실시간 위치 표시를 나타내도록 하였습니다.\n5. 예외 상황 대응 로직 적용\n  네트워크 단절, API 호출 실패, 위치 비활성화 등 상황에서 위치 추적을 중단하고 toast, 푸시알림을 통해 사용자가 인지할수 있도록 하였습니다.',
  },
];

export default function Page13() {
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
