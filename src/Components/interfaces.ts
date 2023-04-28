// Interfaces
interface BreakPoints {
  [key: number]: { slidesPerView: number; gap: number };
}

interface SliderLayout {
  slidesPerView: number;
  gap: number;
}

interface SliderProps {
  breakPoints?: BreakPoints;
  slidesPerView: number;
  gap: number;
  pagination: boolean;
  stopOnLastSlide: boolean;
  children: React.ReactNode;
}

export { SliderLayout, BreakPoints, SliderProps };
