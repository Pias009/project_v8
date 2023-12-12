import React from "react";

const sizeClasses = {
  txtOpenSansBold20WhiteA700: "font-bold font-opensans",
  txtOpenSansRegular20Black900: "font-normal font-opensans",
  txtOpenSansRegular20WhiteA700: "font-normal font-opensans",
  txtWorkSansBold3188: "font-bold font-worksans",
  txtManropeRegular28WhiteA700: "font-manrope font-normal",
  txtManropeRegular96Bluegray900: "font-manrope font-normal",
  txtOpenSansBold20: "font-bold font-opensans",
  txtManropeRegular64: "font-manrope font-normal",
  txtOpenSansRegular24: "font-normal font-opensans",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtOpenSansRegular20Bluegray50: "font-normal font-opensans",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeRegular36: "font-manrope font-normal",
  txtOpenSansRegular24Bluegray900: "font-normal font-opensans",
  txtOpenSansRegular24Black900: "font-normal font-opensans",
  txtManropeBold3627: "font-bold font-manrope",
  txtOpenSansRegular20Bluegray900: "font-normal font-opensans",
  txtManropeBold3627Bluegray900: "font-bold font-manrope",
  txtManropeRegular48Black900: "font-manrope font-normal",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtManropeRegular96: "font-manrope font-normal",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansRegular16WhiteA700: "font-normal font-opensans",
  txtOpenSansBold20Bluegray900: "font-bold font-opensans",
  txtOpenSansRegular16Bluegray900: "font-normal font-opensans",
  txtOpenSansRegular16Gray600: "font-normal font-opensans",
  txtManropeRegular48: "font-manrope font-normal",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeRegular28: "font-manrope font-normal",
  txtManropeBold4325: "font-bold font-manrope",
  txtManropeRegular64Bluegray900: "font-manrope font-normal",
  txtOpenSansRegular16Black900: "font-normal font-opensans",
  txtOpenSansRegular24WhiteA700: "font-normal font-opensans",
  txtOpenSansRegular1192: "font-normal font-opensans",
  txtManropeRegular48Bluegray900: "font-manrope font-normal",
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
