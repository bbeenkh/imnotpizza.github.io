import SlideLayout from '@/layouts/SlideLayout';
import ExternalLink from '@/components/ExternalLink';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

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

        {/* Right — 설명 */}
        <div className="w-1/2 flex flex-col justify-start">
          <TopicList topics={topics} />
          <div className="mt-12 flex flex-col gap-2 text-sm">
            <ExternalLink href="https://drive.google.com/file/d/1HR7ksampNmweSE9j0iIbc_qM2OIEvBi8/view">오르비츠 발표자료</ExternalLink>
            <ExternalLink href="https://drive.google.com/file/d/1G20md2hAi0dsviLa0VT4SGGFHjDx0ejh/view?usp=sharing">스위프 수료증</ExternalLink>
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.swyp.rotationdatingapp">Google Play</ExternalLink>
            <ExternalLink href="https://apps.apple.com/kr/app/%EC%98%A4%EB%A5%B4%EB%B9%84%EC%B8%A0-%EB%8C%80%ED%99%94%EB%A5%BC-%EC%97%AC%EB%8A%94-%ED%94%84%EB%A1%9C%ED%95%84-%EC%B9%B4%EB%93%9C/id6784271334">App Store</ExternalLink>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
