import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const topics = [
  {
    title: '발생한 문제',
    content: 'My010의 가장 핵심적인 기능 중 하나는 통신 사업자들이 휴대폰 구매시 지급될 리베이트(보조금) 금액을 업로드 및 관리하는 기능입니다.',
  },
  {
    title: '',
    content: '이 과정에서 휴대폰 목록/상세 정보와 요금제 목록/상세 정보에 대한 api가 여러군데에서 사용되었으나 이 정보들은 변동이 몇 달에 한번정도 발생하는 데이터여서 불필요한 api 호출이란 문제가 있었습니다.',
  },
  {
    title: '해결 방법과 선택 이유',
    content: '이러한 문제를 해결하기 위해 Next.js 의 서버 기능 중 하나인 Data Cache 기능에 주목하였습니다. Data Cache 를 통해 얻고자 하는 효과는 다음과 같았습니다.',
  },
  {
    title: '',
    content: '1. 반복적인 API 호출을 캐시로 대체하여 불필요한 트래픽 감소, 브라우저단의 캐시와는 다르게 접속 유저가 몇명이라도 한번 캐시된 데이터를 제공하기 때문에 캐시 효과 극대화 가능\n2. 응답 지연을 줄여 비용 절감 및 응답속도 및 UX 향상',
  },
  {
    title: '',
    content: '그리고 스터디를 통해 Data Cache를 적용할 수 있는 조건을 다음과 같이 정리하였습니다.',
  },
  {
    title: '',
    content: '1. 유저에 관계없이 동일한 데이터를 반환하는 API일 것\n2. 변경 주기가 길어 실시간 갱신이 필요하지 않은 데이터일 것',
  },
  {
    title: '',
    content: '따라서 휴대폰, 요금제 데이터는 두가지 사항을 모두 만족하여 Data Cache를 사용하기로 결정하였습니다.',
  },
];

export default function Page6() {
  return (
    <SlideLayout subtitle="Projects" title="My010">
      <div className="flex gap-[4%] h-full pt-[4%]">
        <div className="w-1/3 flex items-center">
          <img
            src="/assets/my010-2.png"
            alt="My010 화면 2"
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
