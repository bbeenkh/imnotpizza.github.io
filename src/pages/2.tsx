import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

const items = [
  { icon: '🎓', label: 'Education', desc: 'Lorem ipsum dolor sit amet consectetur' },
  { icon: '💼', label: 'Experience', desc: 'Sed do eiusmod tempor incididunt ut labore' },
  { icon: '🛠', label: 'Skills', desc: 'Ut enim ad minim veniam quis nostrud' },
  { icon: '🏆', label: 'Awards', desc: 'Duis aute irure dolor in reprehenderit' },
];

export default function Page2() {
  return (
    <SlideLayout subtitle="About" title="Lorem Ipsum Dolor">
      <div className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-[4%] h-full pt-[4%]">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-[8%] flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid ${purple.border}` }}
          >
            <span className="text-[clamp(1.1rem,2.2vw,1.76rem)] mb-[6%]">{item.icon}</span>
            <h3 className="text-lg font-semibold text-white">
              {item.label}
            </h3>
            <p className="text-sm text-gray-300 mt-[4%] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
