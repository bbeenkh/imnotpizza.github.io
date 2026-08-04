import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 보라색 하이라이트 색상
 * @param param0
 * @returns 
 */
export function HighlightText({ children }: any) {
  return <span className="accent-text">{children}</span>;
}
