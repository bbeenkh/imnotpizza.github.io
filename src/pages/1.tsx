import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

export default function Page1() {
  return (
    <SlideLayout hideTitle>
      <div className="flex flex-col justify-start h-full">
        <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-tight">
          Lorem Ipsum
        </h1>
        <p className="text-sm text-gray-300 max-w-[60%] mt-[2%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div
          className="mt-[3%] px-[3%] py-[1.2%] rounded-full text-sm font-semibold text-white w-fit"
          style={{ backgroundColor: purple.dark }}
        >
          Lorem Ipsum
        </div>
        <div className="flex gap-[3%] mt-auto">
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
      </div>
    </SlideLayout>
  );
}
