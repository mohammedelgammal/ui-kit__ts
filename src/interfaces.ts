interface WindowSize {
  width: number | undefined;
}
interface Props {
  children: React.ReactNode;
  theme?: {
    button?: {
      buttonClassName: string;
      buttonDisabledClassName: string;
      loader: HTMLElement;
    };
  };
}
type Value = {
  theme?: {
    button?: {
      buttonClassName: string;
      buttonDisabledClassName: string;
      loader: HTMLElement;
    };
  };
  windowSize: WindowSize;
};

export { WindowSize, Props, Value };
