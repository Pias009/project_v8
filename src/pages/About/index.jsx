import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-blue_gray-900 flex flex-col items-center justify-start mx-auto p-[158px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start mb-2 w-[82%] md:w-full">
              <div className="flex flex-col gap-3 h-[209px] md:h-auto items-center justify-center max-w-[888px] w-full">
                <Text
                  className="text-blue_gray-50 text-xl w-auto"
                  size="txtOpenSansRegular20Bluegray50"
                >
                  About
                </Text>
                <Text
                  className="leading-[84.00px] max-w-[842px] md:max-w-full md:text-5xl text-[64px] text-center text-white-A700"
                  size="txtManropeRegular64"
                >
                  We love to make great things, things that matter.
                </Text>
              </div>
              <Text
                className="leading-[28.00px] text-base text-blue_gray-50 text-center w-[84%] sm:w-full"
                size="txtOpenSansRegular16"
              >
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </Text>
            </div>
          </div>
          <Img
            className="h-[285px] hidden mb-[347px] ml-[150px] mt-[30px] object-cover rounded-[24px] w-[22%] sm:w-[250px] z-[1]"
            src="images/img_rectangle1270_506x494.png"
            alt="rectangle1270"
          />
          <Img
            className="h-[287px] ml-auto mr-[148px] mt-5 object-cover rounded-[24px] w-[22%] sm:w-[300px] z-[1]"
            src="images/img_rectangle1274.png"
            alt="rectangle1274"
          />
          <Img
            className="h-[303px] mb-1 ml-[150px] mt-[-NaNpx] object-cover rounded-[24px] w-[22%] sm:w-[300px] z-[1]"
            src="images/img_rectangle1270_209x298.png"
            alt="rectangle1273"
          />
          <Img
            className="h-[305px] mb-[327px] ml-auto mr-[148px] mt-[-96px] object-cover rounded-[24px] w-[22%] sm:w-[300px] z-[1]"
            src="images/img_rectangle1270.png"
            alt="rectangle1272"
          />
          <Img
            className="h-[632px] mt-[-96px] mx-auto object-cover rounded-[24px] w-[29%] sm:w-[300px] z-[1]"
            src="images/img_rectangle1270_2.png"
            alt="rectangle1271"
          />
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[842px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3 h-[184px] md:h-auto items-start justify-center max-w-[842px] w-full">
            <Text
              className="text-gray-600 text-xl w-auto"
              size="txtOpenSansRegular20"
            >
              Our story
            </Text>
            <Text
              className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtManropeRegular48Black900"
            >
              Handshake infographic mass market crowdfunding iteration.
            </Text>
          </div>
          <Text
            className="leading-[32.00px] text-gray-600 text-xl w-[95%] sm:w-full"
            size="txtOpenSansRegular20"
          >
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{" "}
          </Text>
        </div>
        <div className="bg-blue_gray-900 flex flex-col gap-[47px] items-center justify-start mt-24 p-24 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-3 h-[185px] md:h-auto items-center justify-center max-w-[842px] mx-auto w-full">
            <Text
              className="text-blue_gray-50 text-xl w-auto"
              size="txtOpenSansRegular20Bluegray50"
            >
              Our numbers
            </Text>
            <Text
              className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
              size="txtManropeRegular48"
            >
              Handshake infographic mass market crowdfunding iteration.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1000px] mx-auto w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-green-A200_02 w-auto"
                size="txtManropeRegular96"
              >
                120m
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl w-auto"
                size="txtOpenSansRegular24"
              >
                Cool feature title
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-green-A200_02 w-auto"
                size="txtManropeRegular96"
              >
                10.000
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl w-auto"
                size="txtOpenSansRegular24"
              >
                Cool feature title
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-green-A200_02 w-auto"
                size="txtManropeRegular96"
              >
                240
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl w-auto"
                size="txtOpenSansRegular24"
              >
                Cool feature title
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1001px] mt-24 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-4/5 md:w-full">
              <div className="flex flex-col gap-3 h-[121px] md:h-auto items-start justify-center max-w-[800px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtOpenSansRegular20"
                >
                  Our team
                </Text>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtManropeRegular48Black900"
                >
                  The leadership team
                </Text>
              </div>
              <Text
                className="leading-[32.00px] text-gray-600 text-xl w-full"
                size="txtOpenSansRegular20"
              >
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.{" "}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Img
                  className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[300px] md:w-full"
                  src="images/img_image_354x300.png"
                  alt="image_Five"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtManropeRegular28"
                  >
                    Michael Scott
                  </Text>
                  <Text
                    className="text-gray-600 text-xl w-auto"
                    size="txtOpenSansRegular20"
                  >
                    General Manager
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Img
                  className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[299px] md:w-full"
                  src="images/img_image_354x299.png"
                  alt="image_Six"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtManropeRegular28"
                  >
                    Dwight Schrute
                  </Text>
                  <Text
                    className="text-gray-600 text-xl w-auto"
                    size="txtOpenSansRegular20"
                  >
                    General Manager
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[300px]">
                <Img
                  className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[300px] md:w-full"
                  src="images/img_image_1.png"
                  alt="image_Seven"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                    size="txtManropeRegular28"
                  >
                    Pam Beetsley
                  </Text>
                  <Text
                    className="text-gray-600 text-xl w-auto"
                    size="txtOpenSansRegular20"
                  >
                    General Manager
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start mt-[120px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-3 h-[121px] md:h-auto items-start justify-center max-w-[800px] w-full">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtOpenSansRegular20WhiteA700"
            >
              Our values
            </Text>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
              size="txtManropeRegular48"
            >
              Things in we believe
            </Text>
          </div>
          <Text
            className="leading-[32.00px] mt-5 text-blue_gray-50 text-xl w-[69%] sm:w-full"
            size="txtOpenSansRegular20Bluegray50"
          >
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </Text>
          <List
            className="flex flex-col gap-[72px] mt-[72px] w-[76%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-[92%] md:w-full">
              <Img
                className="h-[151px] md:h-auto object-cover rounded-[24px] w-[150px] sm:w-full"
                src="images/img_rectangle1270_209x298.png"
                alt="image"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-[602px] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-[229px]"
                  size="txtManropeRegular28WhiteA700"
                >
                  We are commited.
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[602px] md:max-w-full text-blue_gray-50 text-xl"
                  size="txtOpenSansRegular20Bluegray50"
                >
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <Img
                className="sm:flex-1 h-[151px] md:h-auto object-cover rounded-[24px] w-[150px] sm:w-full"
                src="images/img_rectangle1270.png"
                alt="image"
              />
              <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[680px] w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-[251px]"
                  size="txtManropeRegular28WhiteA700"
                >
                  We are responsible.
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[680px] md:max-w-full text-blue_gray-50 text-xl"
                  size="txtOpenSansRegular20Bluegray50"
                >
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-[92%] md:w-full">
              <Img
                className="h-[151px] md:h-auto object-cover rounded-[24px] w-[150px] sm:w-full"
                src="images/img_image_151x150.png"
                alt="image"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-[602px] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-[261px]"
                  size="txtManropeRegular28WhiteA700"
                >
                  We aim for progress.
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[601px] md:max-w-full text-blue_gray-50 text-xl"
                  size="txtOpenSansRegular20Bluegray50"
                >
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.{" "}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Footer className="flex font-manrope items-center justify-center mt-[124px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
