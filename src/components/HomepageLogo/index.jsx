import React from "react";

import { Img, Text } from "components";

const HomepageLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 sm:hidden items-start justify-end overflow-auto w-full">
          <Img className="h-[34px]" alt="music_One" src={props?.musicimage} />
          <Text
            className="sm:ml-[0] ml-[9px] sm:text-[27.88px] md:text-[29.88px] text-[31.88px] text-blue_gray-900"
            size="txtWorkSansBold3188"
          >
            {props?.prestotext}
          </Text>
          {!!props?.boldotext ? (
            <Text
              className="sm:ml-[0] ml-[492px] sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-white-A700"
              size="txtManropeBold3627"
            >
              {props?.boldotext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

HomepageLogo.defaultProps = {
  musicimage: "images/img_music_blue_gray_900.svg",
  prestotext: "Presto",
};

export default HomepageLogo;
