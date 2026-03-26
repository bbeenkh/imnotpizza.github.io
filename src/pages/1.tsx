import SlideLayout from '@/layouts/SlideLayout';
import { purple } from '@/styles/theme';

export default function Page1() {
  return (
    <SlideLayout subtitle="Portfolio" title="Lorem Ipsum">
      <div className="flex flex-col justify-end h-full">
        <p className="text-sm text-gray-300 max-w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div
          className="mt-[3%] px-[3%] py-[1.2%] rounded-full text-sm font-semibold text-white w-fit"
          style={{ backgroundColor: purple.dark }}
        >
          Lorem Ipsum
        </div>
      </div>
    </SlideLayout>
  );
}
