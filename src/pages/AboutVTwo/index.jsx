import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutVTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="bg-green-A200 flex flex-col items-center justify-end p-[93px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1155px] mt-[100px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-3 h-[185px] md:h-auto items-start justify-center w-[600px] md:w-full">
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtOpenSansRegular20Bluegray900"
              >
                About
              </Text>
              <Text
                className="leading-[72.00px] max-w-[600px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtManropeRegular48Black900"
              >
                We love to make great things, things that matter.
              </Text>
            </div>
            <Text
              className="leading-[28.00px] md:mt-0 mt-[50px] text-base text-blue_gray-900"
              size="txtOpenSansRegular16Bluegray900"
            >
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[47px] items-center justify-start max-w-[1000px] mt-24 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3 h-[185px] md:h-auto items-center justify-center max-w-[842px] w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtOpenSansRegular20Bluegray900"
            >
              Our numbers
            </Text>
            <Text
              className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
              size="txtManropeRegular48Bluegray900"
            >
              Handshake infographic mass market crowdfunding iteration.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1000px] w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-blue_gray-900 w-auto"
                size="txtManropeRegular96Bluegray900"
              >
                120m
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtOpenSansRegular24Bluegray900"
              >
                Cool feature title
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-blue_gray-900 w-auto"
                size="txtManropeRegular96Bluegray900"
              >
                10.000
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtOpenSansRegular24Bluegray900"
              >
                Cool feature title
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <Text
                className="md:text-5xl text-8xl text-blue_gray-900 w-auto"
                size="txtManropeRegular96Bluegray900"
              >
                240
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtOpenSansRegular24Bluegray900"
              >
                Cool feature title
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start mt-[121px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-8 items-start justify-start max-w-[842px] mx-auto w-full">
            <div className="flex flex-col gap-3 h-[184px] md:h-auto items-start justify-center max-w-[842px] w-full">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtOpenSansRegular20WhiteA700"
              >
                Our story
              </Text>
              <Text
                className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtManropeRegular48"
              >
                Handshake infographic mass market crowdfunding iteration.
              </Text>
            </div>
            <Text
              className="leading-[32.00px] text-blue_gray-50 text-xl w-[95%] sm:w-full"
              size="txtOpenSansRegular20Bluegray50"
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
        </div>
        <div className="flex flex-col items-center justify-start max-w-[901px] mt-[124px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-14 items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-[89%] md:w-full">
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
                  The people behind the work
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
            <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[75px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[250px]"
                    src="images/img_image_354x300.png"
                    alt="rectangle1275"
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
                <div className="flex flex-col gap-6 items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[250px]"
                    src="images/img_image_354x300.png"
                    alt="rectangle1275"
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
                <div className="flex flex-col gap-6 items-start justify-start sm:ml-[0] w-auto">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[250px]"
                    src="images/img_image_354x300.png"
                    alt="rectangle1275"
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
              </List>
              <div className="md:gap-5 gap-[101px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover rounded-[24px] w-[120px]"
                    src="images/img_image_354x299.png"
                    alt="rectangle1275"
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
                <div className="flex flex-1 flex-row gap-6 h-[120px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover rounded-[24px] w-[120px]"
                    src="images/img_image_1.png"
                    alt="rectangle1275"
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
                <div className="flex flex-1 flex-row gap-6 h-[120px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover rounded-[24px] w-[120px]"
                    src="images/img_image_1.png"
                    alt="rectangle1275"
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
                <div className="flex flex-1 flex-row gap-6 h-[120px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover rounded-[24px] w-[120px]"
                    src="images/img_image_1.png"
                    alt="rectangle1275"
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
        </div>
        <div className="bg-blue_gray-900 flex flex-col md:gap-10 gap-16 items-center justify-start mt-[124px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-3 h-[184px] md:h-auto items-center justify-center max-w-[842px] mx-auto w-full">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtOpenSansRegular20WhiteA700"
            >
              Our Blog
            </Text>
            <Text
              className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
              size="txtManropeRegular48"
            >
              Value proposition accelerator product management venture
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1100px] mx-auto w-full">
            <Line className="bg-white-A700 h-px w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtManropeRegular48"
              >
                <span className="text-white-A700 font-manrope text-left font-normal">
                  We are{" "}
                </span>
                <span className="text-green-A200_01 font-manrope text-left font-normal">
                  commited.
                </span>
              </Text>
              <Text
                className="leading-[32.00px] sm:mt-0 mt-[3px] text-blue_gray-50 text-xl"
                size="txtOpenSansRegular20Bluegray50"
              >
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtManropeRegular48"
              >
                <span className="text-white-A700 font-manrope text-left font-normal">
                  We are{" "}
                </span>
                <span className="text-green-A200_01 font-manrope text-left font-normal">
                  responsible.
                </span>
              </Text>
              <Text
                className="leading-[32.00px] text-blue_gray-50 text-xl"
                size="txtOpenSansRegular20Bluegray50"
              >
                Mass market iPhone buzz conversion analytics stock iteration
                responsive web design user experience business plan handshake.
                Return on investment seed round MVP backing supply chain.{" "}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtManropeRegular48"
              >
                <span className="text-white-A700 font-manrope text-left font-normal">
                  We aim for{" "}
                </span>
                <span className="text-green-A200_01 font-manrope text-left font-normal">
                  progress.
                </span>
              </Text>
              <Text
                className="leading-[32.00px] text-blue_gray-50 text-xl"
                size="txtOpenSansRegular20Bluegray50"
              >
                Bootstrapping rockstar first mover advantage business model
                canvas alpha deployment launch party beta facebook metrics
                gamification growth hacking customer focus.{" "}
              </Text>
            </div>
          </div>
        </div>
        <Footer className="flex font-manrope items-center justify-center mt-[124px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutVTwoPage;
