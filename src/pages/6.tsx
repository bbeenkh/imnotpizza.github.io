import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

export default function Page6() {
  return (
    <SlideLayout subtitle="Contact" title="Lorem Ipsum Dolor Sit">
      <div className="flex flex-col justify-end h-full">
        <p className="text-sm text-gray-300 max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </p>
        <div className="flex gap-[3%] mt-[5%]">
          {['lorem@ipsum.com', 'github.com/lorem', 'linkedin.com/in/lorem'].map((link) => (
            <span
              key={link}
              className="px-[2.5%] py-[1%] rounded-lg text-sm text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${purple.border}` }}
            >
              {link}
            </span>
          ))}
        </div>
        <div
          className="mt-[5%] w-[40%] h-[1px]"
          style={{ background: `linear-gradient(90deg, transparent, ${purple.accent}, transparent)` }}
        />
        <p className="text-sm text-gray-400 mt-[3%]">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </SlideLayout>
  );
}
