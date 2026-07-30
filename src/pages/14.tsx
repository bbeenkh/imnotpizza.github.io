import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';
import TopicList from '@/components/TopicList';

const topics = [
  {
    title: '프로젝트 설명',
    content:
      '스위프 앱 5기 프로그램에 참여하여 오르비츠의 React Native 기반 모바일 앱 개발을 담당하였습니다. 기획부터 개발, 마켓 심사 대응까지 앱 출시 전 과정을 경험하였습니다.',
  },
  {
    title: '담당 역할',
    content: 'React Native 앱 개발 전반 및 Android/iOS 마켓 심사 대응을 담당하였습니다.',
  },
  {
    title: '주요 기술 스택',
    content: 'React Native, TypeScript',
  },
  {
    title: '성과',
    content: (
      <>
        <span className="accent-text font-bold">Android, iOS 양대 마켓 출시 완료</span>
        {'\n'}마켓 심사 요구사항을 분석하고 대응하여 정상 출시를 달성하였습니다.
      </>
    ),
  },
];

export default function Page14() {
  return (
    <SlideLayout subtitle="Side Projects" title="스위프 앱 5기 참여">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/assets/swyp-1.png"
            alt="스위프 앱 화면"
            className="w-full rounded-lg"
            style={{ border: `1px solid ${purple.border}` }}
          />
        </div>

        {/* Right — 설명 (2/3) */}
        <div className="w-1/2 flex flex-col justify-start">
          <TopicList topics={topics} />
        </div>
      </div>
    </SlideLayout>
  );
}
