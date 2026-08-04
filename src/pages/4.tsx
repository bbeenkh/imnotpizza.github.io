import SlideLayout from '@/layouts/SlideLayout';
import { purple, orange } from '@/styles/theme';
 
type SingleItem = {
  kind?: 'single';
  year: string;
  company: string;
  project: string;
  desc: React.ReactNode;
  extraSpace?: boolean;
};

type PairedItem = {
  kind: 'paired';
  left: Omit<SingleItem, 'kind' | 'extraSpace'>;
  right: Omit<SingleItem, 'kind' | 'extraSpace'>;
  centerLabel?: string;
  sharedHeader?: { year: string; company: string };
  extraSpace?: boolean;
};

type CareerItem = SingleItem | PairedItem;

const career: CareerItem[] = [
  {
    year: '2019 ~ 2020',
    company: '디엘토',
    project: '하이원 서울가요대상 투표앱 어드민',
    desc: <>투표 운영을 위한 백오피스 시스템의 프론트엔드 개발을 담당하면서 프론트엔드 개발에 흥미를 가지게 되었고 본격적으로 커리어를 시작하게 되었습니다.</>,
  },
  {
    kind: 'paired',
    left: {
      year: '2020 ~ 2022',
      company: '미니스쿨',
      project: '땅콩스쿨 & 미니스쿨 에디터',
      desc: <>미니스쿨과 호두랩스와의 협업하에 실시간 화상수업 서비스인 땅콩스쿨의 이슈 대응, 고도화를 담당하였으며 방송 참여자 수 <span className="accent-text font-bold">30명→400명대</span>까지 확보하며 서비스 성장에 기여하였습니다.</>,
    },
    right: {
      year: '2022 ~ 2023',
      company: '케이제이엠테크',
      project: 'VLOC SDK & VLOC Console',
      desc: <>Web3, WebRTC 기반 화상채팅기능을 제공하는 VLOC SDK의 개발과, 토큰 사용량 모니터링 및 결제가 가능한 B2B SaaS 서비스인 VLOC Console의 개발을 담당하였습니다.</>,
    },
    centerLabel: '고용승계',
    extraSpace: true,
  },
  {
    year: '2026-05~2026-07',
    company: '스위프 앱 5기(사이드 프로젝트)',
    project: 'Orbits (오르비츠)',
    desc: <>스위프 앱 5기 참여하여 React Native 기반 앱 개발을 담당하였으며, 기획부터 Android/iOS <span className="accent-text font-bold">양대 마켓 출시</span>까지 전 과정에 참여하였습니다.</>,
  },
  {
    kind: 'paired',
    extraSpace: true,
    sharedHeader: { year: '2023 ~ 2026', company: '오투플러스' },
    left: {
      year: '',
      company: '',
      project: 'Coconuts (코코넛)',
      desc: <>KT M&S와의 협력하에 운영중인 휴대폰 구매 상담과 유통 관리 서비스로 분기 <span className="accent-text font-bold">MAU 7000명대 돌파</span>, <span className="accent-text font-bold">국가산업대상 2년 연속 대상 수상</span> 등에 기여하였습니다.</>,
    },
    right: {
      year: '',
      company: '',
      project: 'My010 (마이공일공)',
      desc: <>통신 유통 과정을 손쉽게 관리하도록 도와주는 B2B SaaS 서비스의 MVP, 베타, 정식까지의 서비스 개발에 참여하였으며, <span className="accent-text font-bold">출시 1달만에 사용자 수 250명 돌파</span>하였습니다.</>,
    },
  },
];

function CardContent({ item }: { item: Omit<SingleItem, 'kind' | 'extraSpace'> }) {
  return (
    <>
      <span className="text-sm font-bold text-white">{item.year}</span>
      <h3 className="text-sm font-semibold mt-[3%]" style={{ color: orange.light }}>{item.company}</h3>
      <p className="text-xs font-bold text-white mt-[2%]">{item.project}</p>
      <p className="text-xs text-gray-300 mt-[3%] leading-relaxed">{item.desc}</p>
    </>
  );
}

function Card({ item }: { item: CareerItem }) {
  const cardStyle = { backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` };

  if (item.kind === 'paired') {
    if (item.sharedHeader) {
      return (
        <div className="rounded-lg px-[4%] py-[4%] w-full text-left flex flex-col gap-[3%]" style={cardStyle}>
          <div>
            <span className="text-sm font-bold text-white">{item.sharedHeader.year}</span>
            <h3 className="text-sm font-semibold mt-[2%]" style={{ color: orange.light }}>{item.sharedHeader.company}</h3>
          </div>
          <div className="flex items-stretch gap-[3%]">
            <div className="flex-1">
              <p className="text-xs font-bold text-white">{item.left.project}</p>
              <p className="text-xs text-gray-300 mt-[3%] leading-relaxed">{item.left.desc}</p>
            </div>
            <div className="w-px" style={{ backgroundColor: purple.border }} />
            <div className="flex-1">
              <p className="text-xs font-bold text-white">{item.right.project}</p>
              <p className="text-xs text-gray-300 mt-[3%] leading-relaxed">{item.right.desc}</p>
            </div>
          </div>
          {item.extraSpace && <div className="pb-[12%]" />}
        </div>
      );
    }

    return (
      <div className="rounded-lg px-[4%] py-[4%] w-full text-left flex flex-col gap-[3%]" style={cardStyle}>
        <div className="flex items-center gap-[3%]">
          <div className="flex-1">
            <CardContent item={item.left} />
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-px flex-1" style={{ backgroundColor: purple.border }} />
            <span className="text-lg" style={{ color: purple.accent }}>→</span>
            {item.centerLabel && (
              <span className="text-xs" style={{ color: purple.accent }}>{item.centerLabel}</span>
            )}
            <div className="w-px flex-1" style={{ backgroundColor: purple.border }} />
          </div>
          <div className="flex-1">
            <CardContent item={item.right} />
          </div>
        </div>
        {item.extraSpace && <div className="pb-[12%]" />}
      </div>
    );
  }

  return (
    <div className="rounded-lg px-[6%] py-[4%] text-left" style={cardStyle}>
      <CardContent item={item} />
      {item.extraSpace && <div className="pb-[12%]" />}
    </div>
  );
}

const YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

export default function Page4() {
  return (
    <SlideLayout title="커리어 타임라인">
      <div className="flex flex-col h-full pt-[2%]">
        {/* Top row: 디엘토(col1), 오투플러스(col5-7) */}
        <div
          className="flex-1 grid items-end pb-3"
          style={{ gridTemplateColumns: 'repeat(7, 1fr)', columnGap: '1%' }}
        >
          <div style={{ gridColumn: '1 / 3' }}>
            <Card item={career[0]} />
          </div>
          <div style={{ gridColumn: '5 / 8' }}>
            <Card item={career[3]} />
          </div>
        </div>

        {/* Timeline: 2019 ~ 2026 */}
        <div className="relative py-1">
          <div
            className="absolute left-0 right-0 h-[2px] top-[6px]"
            style={{ background: `linear-gradient(90deg, ${purple.dark}, ${purple.accent})` }}
          />
          <div className="flex w-full justify-between">
            {YEARS.map((year) => (
              <div key={year} className="flex flex-col items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full z-10 border-2 border-black shrink-0"
                  style={{ backgroundColor: purple.accent }}
                />
                <span className="text-[10px] z-10" style={{ color: purple.light }}>{year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: 미니스쿨+케이제이엠(col2-4), 오르비츠(col5-8) */}
        <div
          className="flex-1 grid items-start pt-3"
          style={{ gridTemplateColumns: 'repeat(7, 1fr)', columnGap: '1%' }}
        >
          <div style={{ gridColumn: '2 / 5' }}>
            <Card item={career[1]} />
          </div>
          <div style={{ gridColumn: '6 / 8' }}>
            <Card item={career[2]} />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
