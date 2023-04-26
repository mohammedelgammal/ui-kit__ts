// Interfaces
interface BreakPoint {
  [key: number]: { slidesPerView: number; gap: number };
}

// Utils
const objectNotEmpty = (obj: object): boolean => Object.keys(obj).length > 0;
const getSliderLayout = (breakPoints: BreakPoint[]): BreakPoint => {
  const ascSortedBreakPoints: BreakPoint[] = breakPoints.sort(
    (a: BreakPoint, b: BreakPoint) =>
      Number(Object.keys(a)[0]) - Number(Object.keys(b)[0])
  );
  const currentBreakPoint: BreakPoint =
    ascSortedBreakPoints.find(
      (breakPoint: BreakPoint) => window.innerWidth < Number(breakPoint[0])
    ) || ascSortedBreakPoints[ascSortedBreakPoints.length - 1];
  return currentBreakPoint;
};

class Slider {
  constructor(
    readonly breakPoints: BreakPoint[] = [],
    readonly slidesPerView: number = 1,
    readonly gap: number = 0,
    readonly slidesCount: number = 0,
    readonly stopOnLastSlide: boolean = false
  ) {
    this.breakPoints = breakPoints;
    this.slidesPerView = slidesPerView;
    this.gap = gap;
  }

  currentSlide: number = 0;

  getSliderLayout = (): BreakPoint | { slidesPerView: number; gap: number } =>
    objectNotEmpty(this.breakPoints)
      ? getSliderLayout(this.breakPoints)
      : { slidesPerView: this.slidesPerView, gap: this.gap };

  nextSlide = (): number | undefined =>
    this.slidesCount - this.slidesPerView > this.currentSlide
      ? this.currentSlide++
      : this.stopOnLastSlide
      ? undefined
      : (this.currentSlide = 0);
}

export default Slider;
