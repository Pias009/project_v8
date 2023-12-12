import React from "react";

import { Img, Text } from "components";

const HomepageVTwoTestimonial = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="leading-[36.00px] max-w-[270px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtOpenSansRegular24Black900"
        >
          {props?.dynamictext}
        </Text>
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full">
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <Img
              className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
              src="images/img_ellipse4.png"
              alt="ellipseFour"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start">
              <Text
                className="text-base text-blue_gray-900"
                size="txtOpenSansBold16"
              >
                {props?.dynamictext1}
              </Text>
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtOpenSansRegular14"
              >
                {props?.dynamictext2}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageVTwoTestimonial.defaultProps = {
  dynamictext:
    "“Buyer buzz partner network disruptive non-disclosure agreement business”",
  dynamictext1: "Albus Dumbledore",
  dynamictext2: "Manager @ Howarts",
};

export default HomepageVTwoTestimonial;
