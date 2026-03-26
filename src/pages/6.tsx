import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const projects = [
  {
    name: 'My010',
    desc: '',
    topics: [
      {
        title: '해결 과정과 성과',
        content: 'axios 환경에서도 Next.js Data Cache를 활용하기 위해 최신 버전으로 업데이트 후, 다음과 같은 옵션을 적용하였습니다.',
      },
      {
        title: '',
        content: '또한 통신사별 데이터 차이를 반영하기 위해 tag에 통신사 정보를 포함시켜 캐시를 분리하고, revalidateTag로 refetch를 수행하는 API endpoint 를 추가하여 관리자 페이지에서 추가, 수정, 삭제 발생시 이를 호출하도록 하였습니다.',
      },
      {
        title: '',
        content: '그 결과, 반복 호출되던 API를 대부분 캐시로 대체하여 호출 수를 약 99% 이상 감소시켰고, 트래픽, 비용 절감 효과 또한 얻게 되었습니다.',
      },
      {
        title: '',
        content: '100명 유저가 접근하여 무작위 휴대폰 10개 선택시\n  - Before: 항상 100 X (1+10): 1100회\n  - After\n    - 최선의 경우(모든 사용자가 동일한 휴대폰 선택 시): (1 X (1+10))+(99 X (0+0)): 11회',
      },
    ],
  },
];

export default function Page6() {
  const project = projects[0];

  return (
    <SlideLayout subtitle="Projects" title="My010">
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
            {project.topics.map((topic, i) => (
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
