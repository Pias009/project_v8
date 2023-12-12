import React from "react";

import { Img, Line, Text } from "components";

const HomepageService = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
          <Img
            className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[300px] md:w-full"
            alt="rectangle1270"
            src={props?.image}
          />
          <div className="flex flex-col gap-7 items-start justify-start w-[300px] md:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtOpenSansRegular24Black900"
              >
                {props?.coolfeaturetitlOne}
              </Text>
              <Text
                className="leading-[32.00px] max-w-[293px] md:max-w-full text-gray-600 text-xl"
                size="txtOpenSansRegular20"
              >
                {props?.text}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtOpenSansBold20Bluegray900"
                >
                  {props?.text1}
                </Text>
                <Img
                  className="h-[26px] w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Line className="bg-blue_gray-900 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageService.defaultProps = {
  image: "images/img_rectangle1270.png",
  coolfeaturetitlOne: "Cool feature title",
  text: "Learning curve network effects return on investment.",
  text1: "Explore page",
};

export default HomepageService;
