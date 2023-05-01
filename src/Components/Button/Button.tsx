import React, { useContext, FC } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import classNames from "../../Utils/classNames";
import ThemeContext from "../../Contexts/ThemeContext";

// Style
import Style from "./Button.module.css";

interface ButtonProps {
  buttonClassName?: string;
  disabledClassName?: string;
  children: JSX.Element | string;
  className?: string | any;
  disabled?: boolean;
  isLoading?: boolean;
  loader?: JSX.Element;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({
  buttonClassName,
  disabledClassName,
  children,
  className,
  disabled = false,
  isLoading = false,
  loader,
  onClick,
  style,
}) => {
  const themeContext = useContext(ThemeContext);

  const computedClassName =
    buttonClassName ||
    (themeContext?.theme &&
      themeContext?.theme?.button &&
      themeContext?.theme?.button?.buttonClassName) ||
    Style.buttonClass;

  const computedDisabledClassName =
    disabledClassName ||
    (themeContext?.theme &&
      themeContext?.theme?.button &&
      themeContext?.theme?.button?.buttonDisabledClassName) ||
    Style.buttonDisabled;

  const buttonLoader = loader ||
    (themeContext?.theme &&
      themeContext?.theme?.button &&
      themeContext?.theme?.button?.loader) || <TailSpin height={25} />;

  return (
    <div
      style={{
        cursor: disabled || isLoading ? "not-allowed" : "pointer",
        ...style,
      }}
      className={classNames(
        computedClassName,
        (disabled || isLoading) && computedDisabledClassName,
        className
      )}
      onClick={() => {
        if (disabled === false && isLoading === false) {
          if (onClick) {
            onClick();
          }
        }
      }}
    >
      {isLoading ? <>{buttonLoader}</> : children}
    </div>
  );
};

export default Button;
