import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-lg" };
const variants = {
  fill: {
    deep_orange_50: "bg-deep_orange-50 text-gray-900_01",
    deep_orange_A100: "bg-deep_orange-A100 text-gray-900",
    red_100: "bg-red-100",
    white_A700: "bg-white-A700 text-blue_gray-900",
    red_50: "bg-red-50",
  },
  outline: { gray_900: "outline outline-gray-900" },
};
const sizes = {
  xs: "p-[9px]",
  sm: "p-3",
  md: "p-[18px]",
  lg: "p-[27px] sm:px-5",
  xl: "p-8 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_orange_50",
    "deep_orange_A100",
    "red_100",
    "white_A700",
    "red_50",
    "gray_900",
  ]),
};

export { Button };
