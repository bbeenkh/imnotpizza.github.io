import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

/**
 *
 */

const topics = [
  {
    title: '프로젝트 설명',
    content:
      '로테이션 소개팅의 프로필 교환 절차 및 유형 파악을 쉽고 빠르게 하기 위한 앱입니다.',
  },
  {
    title: '담당 역할 및 상과',
    content:
      '오르비츠의 앱 개발자로 참여하여 초기 기획부터 앱 배포, 마켓 심사 대응까지 앱 출시 전 과정에 있어 앱 개발을 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'React Native, TypeScript, Nativewind',
  },
];

export default function Page14() {
  return (
    <SlideLayout subtitle="Side Projects" title="스위프 앱 5기 참여">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 + QR */}
        <div className="w-1/2 flex flex-col gap-3">
          <img
            src="/assets/swyp-1.png"
            alt="스위프 앱 화면"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
          <div className="flex gap-4 justify-center">
            {[
              { src: '/assets/orbits-android-qr.png', label: 'Android' },
              { src: '/assets/orbits-ios-qr.png', label: 'iOS' },
            ].map(({ src, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <img
                  src={src}
                  alt={`오르비츠 ${label} QR`}
                  className="w-20 h-20 rounded"
                  style={{ border: `1px solid ${purple.border}` }}
                />
                <span className="text-xs text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-1/2 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
