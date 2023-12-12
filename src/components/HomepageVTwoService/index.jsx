import React from "react";

import { Img, Line, Text } from "components";

const HomepageVTwoService = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
          <Img
            className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[300px] md:w-full"
            alt="rectangle1270"
            src={props?.userimage}
          />
          <div className="flex flex-col gap-7 items-start justify-start w-[300px] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtOpenSansRegular24WhiteA700"
              >
                {props?.coolfeaturetitle}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansBold20WhiteA700"
                >
                  {props?.explorepagetext}
                </Text>
                <Img
                  className="h-[26px] w-6"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft"
                />
              </div>
              <Line className="bg-white-A700 h-px w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageVTwoService.defaultProps = {
  userimage: "images/img_rectangle1270.png",
  coolfeaturetitle: "Cool feature title",
  explorepagetext: "Explore page",
};

export default HomepageVTwoService;
