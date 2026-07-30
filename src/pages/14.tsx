import SlideLayout from '@/layouts/SlideLayout';

const topics = [
  {
    title: '프로젝트 설명',
    content:
      '스위프 앱 5기 프로그램에 참여하여 React Native 기반 모바일 앱 개발을 담당하였습니다. 기획부터 개발, 마켓 심사 대응까지 앱 출시 전 과정을 경험하였습니다.',
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
    <SlideLayout subtitle="Projects" title="스위프 앱 5기">
      <div className="flex gap-[4%] h-full pt-[4%]">
        {/* Left — 이미지 영역 (추후 추가 예정) */}
        <div className="w-1/3" />

        {/* Right — 설명 (2/3) */}
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
