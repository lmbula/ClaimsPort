import React from "react";

const sizeClasses = {
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRomanMedium12: "font-medium font-roboto",
  txtRobotoRomanMedium12WhiteA700: "font-medium font-roboto",
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtRobotoRomanMedium16Black90099: "font-medium font-roboto",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
