// Interfaces
interface BreakPoint {
  [key: number]: { slidesPerView: number; gap: number };
}

// Utilities
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

export class Slider {
  /**
   * This is a Slider class that can be used to create a responsive slider with multiple options.
   * @class
   * @property {BreakPoint[]} breakPoints - An array of breakpoints that will be used to change the slider layout.
   * @property {number} slidesPerView - The number of slides that will be shown in the slider.
   * @property {number} gap - The gap between slides.
   * @property {number} slidesCount - The number of slides in the slider.
   * @property {boolean} stopOnLastSlide - A boolean that indicates if the slider should stop on the last slide or not.
   */
  constructor(
    readonly breakPoints: BreakPoint[] = [],
    readonly slidesPerView: number = 1,
    readonly gap: number = 0,
    readonly slidesCount: number = 0,
    readonly stopOnLastSlide: boolean = false
  ) {
    // Setting values to properties
    this.breakPoints = breakPoints;
    this.slidesPerView = slidesPerView;
    this.gap = gap;
  }
  // Properties
  currentSlide: number = 0;

  // Methods
  getSliderLayout = (): BreakPoint | { slidesPerView: number; gap: number } =>
    objectNotEmpty(this.breakPoints)
      ? getSliderLayout(this.breakPoints)
      : { slidesPerView: this.slidesPerView, gap: this.gap };

  nextSlide = (): void | number =>
    this.slidesCount - this.slidesPerView > this.currentSlide
      ? this.currentSlide++
      : this.stopOnLastSlide
      ? undefined
      : (this.currentSlide = 0);

  prevSlide = (): void | number =>
    this.currentSlide > 0
      ? this.currentSlide--
      : this.stopOnLastSlide
      ? undefined
      : (this.currentSlide = this.slidesCount - this.slidesPerView);
}
