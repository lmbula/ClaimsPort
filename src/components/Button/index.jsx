import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]" };
const variants = {
  fill: {
    light_blue_900_19: "bg-light_blue-900_19",
    deep_orange_A100: "bg-deep_orange-A100 text-black-900",
    red_700: "bg-red-700 text-black-900",
    amber_800: "bg-amber-800 text-black-900",
    white_A700: "bg-white-A700 text-black-900_99",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "white_A700",
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
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_blue_900_19",
    "deep_orange_A100",
    "red_700",
    "amber_800",
    "white_A700",
  ]),
};

export { Button };
