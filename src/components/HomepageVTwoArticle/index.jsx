import React from "react";

import { Img, Text } from "components";

const HomepageVTwoArticle = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[209px] sm:h-auto object-cover rounded-[12px] w-full"
          alt="rectangle1270"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-900 w-auto"
                size="txtOpenSansBold16"
              >
                {props?.categorytext}
              </Text>
              <Text
                className="text-base text-gray-600 w-auto"
                size="txtOpenSansRegular16Gray600"
              >
                {props?.datetext}
              </Text>
            </div>
            <Text
              className="leading-[32.00px] max-w-[300px] md:max-w-full text-black-900 text-xl"
              size="txtOpenSansRegular20Black900"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
            <Img
              className="h-8 md:h-auto rounded-[50%] w-8"
              src="images/img_ellipse10.png"
              alt="ellipseTen"
            />
            <Text
              className="text-base text-black-900 w-[105px]"
              size="txtOpenSansRegular16Black900"
            >
              {props?.nametext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageVTwoArticle.defaultProps = {
  userimage: "images/img_rectangle1270_209x300.png",
  categorytext: "Category",
  datetext: "November 22, 2021",
  descriptiontext: "Pitch termsheet backing validation focus release.",
  nametext: "Chandler Bing",
};

export default HomepageVTwoArticle;
