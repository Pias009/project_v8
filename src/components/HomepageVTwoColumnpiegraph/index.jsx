import React from "react";

import { Img, Text } from "components";

const HomepageVTwoColumnpiegraph = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Img
            className="h-[173px] w-[173px]"
            src="images/img_piegraph.svg"
            alt="piegraph"
          />
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-[98%] md:w-full">
              <div className="bg-light_blue-A400 h-1 mb-[17px] mt-[9px] rounded-[50%] w-1"></div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeRegular28"
              >
                {props?.languageTwo}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-full">
              <div className="bg-green-A200_01 h-1 my-4 rounded-[50%] w-1"></div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeRegular28"
              >
                {props?.languageThree}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-end justify-start w-[71%] md:w-full">
              <div className="bg-gray-400 h-1 mb-[9px] mt-4 rounded-[50%] w-1"></div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeRegular28"
              >
                {props?.languageFour}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageVTwoColumnpiegraph.defaultProps = {
  languageTwo: "35% -  Agile Development",
  languageThree: "30% -  Investor bandwidth",
  languageFour: "35% -  A/B testing ",
};

export default HomepageVTwoColumnpiegraph;
