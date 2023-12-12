import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageLogo from "components/HomepageLogo";
import HomepageVTwoArticle from "components/HomepageVTwoArticle";
import HomepageVTwoColumnpiegraph from "components/HomepageVTwoColumnpiegraph";
import HomepageVTwoService from "components/HomepageVTwoService";
import HomepageVTwoTestimonial from "components/HomepageVTwoTestimonial";

const HomepageVTwoPage = () => {
  const homepageVTwoServicePropList = [
    {},
    {
      coolfeaturetitle: "Even cooler feature",
      userimage: "images/img_rectangle1270_354x300.png",
    },
    { userimage: "images/img_rectangle1270_1.png" },
  ];
  const homepageVTwoTestimonialPropList = [
    {},
    {
      dynamictext1: "Severus Snape",
      dynamictext:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      dynamictext2: "Manager @ Slytherin",
    },
    {
      dynamictext1: "Harry Potter",
      dynamictext:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      dynamictext2: "Team Leader @ Gryffindor",
    },
  ];
  const homepageVTwoArticlePropList = [
    {},
    {
      descriptiontext:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      userimage: "images/img_rectangle1270_2.png",
      nametext: "Rachel Green",
    },
    {
      descriptiontext:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      userimage: "images/img_rectangle1270_209x298.png",
      nametext: "Monica Geller",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[99px] justify-start pb-[75px] md:pl-10 sm:pl-5 pl-[75px] w-full">
            <div className="sm:h-[504px] h-[577px] md:h-[822px] ml-6 md:ml-[0] relative w-[99%] md:w-full">
              <Img
                className="absolute h-[504px] object-cover right-[0] top-[0] w-[48%]"
                src="images/img_ellipse9_504x623.png"
                alt="ellipseNine"
              />
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-center justify-between left-[0] max-w-[1200px] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
                  <div className="flex flex-col items-start justify-start sm:m-[] sm:mb-[200px] w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRegular16WhiteA700"
                    >
                      Boldo Webflow Template{" "}
                    </Text>
                    <Text
                      className="leading-[72.00px] sm:m-[] sm:mb-[200px] mt-[13px] sm:mt-[] sm:p-[] sm:pt-[] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                      size="txtManropeRegular48Black900"
                    >
                      Save time by building fast with Boldo Template{" "}
                    </Text>
                    <Text
                      className="sm:bottom-[] leading-[28.00px] sm:m-[] sm:mb-[] mt-3 sm:mt-[] sm:p-[] sm:pb-[] text-base text-gray-600 sm:top-[] w-full"
                      size="txtOpenSansRegular16Gray600"
                    >
                      Funding handshake buyer business-to-business metrics iPad
                      partnership. First mover advantage innovator success
                      deployment non-disclosure.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-opensans gap-6 items-center justify-start mt-[49px] w-[77%] md:w-full">
                      <Button
                        className="!text-white-A700 sm:bottom-[] cursor-pointer font-bold h-[60px] min-w-[247px] outline outline-[2px] outline-blue_gray-900 text-center text-xl"
                        shape="round"
                        color="blue_gray_900"
                        size="lg"
                        variant="fill"
                      >
                        Buy template
                      </Button>
                      <Button
                        className="cursor-pointer font-bold h-[60px] min-w-[187px] text-center text-xl"
                        shape="round"
                        color="blue_gray_900"
                        size="lg"
                        variant="outline"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[42%] md:w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue_gray-900_cc flex flex-col gap-10 sm:hidden justify-start pl-3.5 py-3.5 rounded-[15px] w-full">
                        <Img
                          className="h-[9px]"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                        <div className="flex flex-col items-center justify-start mb-[13px] md:ml-[0] ml-[13px] pb-[3px] w-[98%] md:w-full">
                          <div className="flex-col gap-[19.07px] hidden items-start justify-start w-[465px] sm:w-full">
                            <div className="sm:flex-col flex-row gap-[14.3px] hidden items-center justify-start w-[465px] sm:w-full">
                              <div className="bg-blue_gray-300 h-[11px] rotate-[-90deg] rounded-[5px] w-[12%]"></div>
                              <div className="bg-indigo-200 h-[11px] rotate-[-90deg] rounded-[5px] w-[58%]"></div>
                              <Text
                                className="text-[11.92px] text-white-A700 w-[23px]"
                                size="txtOpenSansRegular1192"
                              >
                                80%
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[14.3px] items-center justify-start w-[225px]">
                              <div className="bg-blue_gray-300 h-[11px] rotate-[-90deg] rounded-[5px] w-[24%]"></div>
                              <div className="bg-light_blue-A400 h-[11px] hidden rotate-[-90deg] rounded-[5px] w-[36%]"></div>
                              <Text
                                className="text-[11.92px] text-white-A700 w-[23px]"
                                size="txtOpenSansRegular1192"
                              >
                                30%
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[14.3px] items-center justify-start w-[465px] sm:w-full">
                              <div className="bg-blue_gray-300 h-[11px] hidden rotate-[-90deg] rounded-[5px] w-[12%]"></div>
                              <div className="bg-white-A700 h-[11px] hidden rotate-[-90deg] rounded-[5px] w-[69%]"></div>
                              <Text
                                className="text-[11.92px] text-white-A700 w-[30px]"
                                size="txtOpenSansRegular1192"
                              >
                                100%
                              </Text>
                            </div>
                            <div className="flex-row gap-[14.3px] hidden items-center justify-start w-[465px] sm:w-full">
                              <div className="bg-blue_gray-300 h-[11px] rotate-[-90deg] rounded-[5px] w-[12%]"></div>
                              <div className="bg-green-A200 h-[11px] rotate-[-90deg] rounded-[5px] w-[55%]"></div>
                              <Text
                                className="text-[11.92px] text-white-A700 w-[23px]"
                                size="txtOpenSansRegular1192"
                              >
                                75%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between w-full">
                      <div className="bg-blue_gray-900_cc flex flex-col items-center justify-end p-3.5 rounded-[15px]">
                        <Img
                          className="h-[131px] mt-1"
                          src="images/img_group286.svg"
                          alt="group286"
                        />
                      </div>
                      <Img
                        className="h-[165px]"
                        src="images/img_group264_blue_gray_900.svg"
                        alt="group264"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-manrope items-center justify-start max-w-[1119px] mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start pb-1.5 w-full">
                    <div className="overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row gap-14 h-[42px] md:h-auto sm:hidden items-start justify-start max-w-[1119px] overflow-auto w-full">
                        <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start pr-2.5 w-[13%] md:w-full">
                          <Img
                            className="h-[33px]"
                            src="images/img_user_blue_gray_900_33x23.svg"
                            alt="user"
                          />
                          <Text
                            className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-blue_gray-900"
                            size="txtManropeBold3627Bluegray900"
                          >
                            Boldo
                          </Text>
                        </div>
                        <HomepageLogo className="flex md:flex-1 flex-col font-worksans items-center justify-start w-[14%] md:w-full" />
                        <div className="flex md:flex-1 flex-row font-manrope gap-2.5 items-start justify-center pr-2.5 w-[13%] md:w-full">
                          <Img
                            className="h-[33px]"
                            src="images/img_user_blue_gray_900_33x23.svg"
                            alt="user_One"
                          />
                          <Text
                            className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-blue_gray-900"
                            size="txtManropeBold3627Bluegray900"
                          >
                            Boldo
                          </Text>
                        </div>
                        <HomepageLogo
                          className="flex md:flex-1 flex-col items-center justify-start w-[14%] md:w-full"
                          boldotext="Boldo"
                        />
                        <div className="flex md:flex-1 flex-row font-manrope gap-2.5 items-start justify-center pr-2.5 w-[13%] md:w-full">
                          <Img
                            className="h-[33px]"
                            src="images/img_user.svg"
                            alt="user_Two"
                          />
                          <Text
                            className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-blue_gray-900"
                            size="txtManropeBold3627Bluegray900"
                          >
                            Boldo
                          </Text>
                        </div>
                        <HomepageLogo className="flex md:flex-1 flex-col font-worksans items-center justify-start w-[10%] md:w-full" />
                        <div className="h-[42px] w-[13%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-col items-center justify-end p-[83px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start max-w-[1099px] mx-auto w-full">
              <div className="flex flex-col gap-3 h-[185px] md:h-auto items-center justify-center max-w-[842px] w-full">
                <Text
                  className="text-blue_gray-50 text-xl w-auto"
                  size="txtOpenSansRegular20Bluegray50"
                >
                  Our services
                </Text>
                <Text
                  className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtManropeRegular48"
                >
                  Handshake infographic mass market crowdfunding iteration.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[99px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {homepageVTwoServicePropList.map((props, index) => (
                  <React.Fragment key={`HomepageVTwoService${index}`}>
                    <HomepageVTwoService
                      className="flex flex-1 flex-col items-center justify-start pb-4 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-center justify-between max-w-[1137px] mt-[120px] mx-auto md:px-5 w-full">
            <div className="md:h-[506px] h-[610px] relative w-[44%] md:w-full">
              <Img
                className="absolute h-[506px] inset-x-[0] mx-auto object-cover rounded-[24px] top-[0] w-full"
                src="images/img_rectangle1270_506x494.png"
                alt="rectangle1270"
              />
              <div className="absolute bg-white-A700 bottom-[0] flex-col hidden items-center justify-start p-10 sm:px-5 right-[12%] rounded-[12px] shadow-bs2 w-[51%]">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[227px]"
                    src="images/img_group208_blue_gray_900.svg"
                    alt="group208"
                  />
                  <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[51px]"
                        size="txtManropeBold24"
                      >
                        30%
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-sm w-[132px]"
                        size="txtManropeRegular14"
                      >
                        More income in June
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-14 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col font-manrope items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="leading-[56.00px] max-w-[493px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtManropeRegular36"
                  >
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                  </Text>
                  <div className="flex flex-col font-opensans items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-[493px] sm:w-full">
                      <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start w-[91%] md:w-full">
                        <Button
                          className="flex h-9 sm:hidden items-center justify-center w-9"
                          shape="circle"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_check.svg"
                            alt="check"
                          />
                        </Button>
                        <Text
                          className="text-black-900 text-xl"
                          size="txtOpenSansRegular20Black900"
                        >
                          We connect our customers with the best.
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[27px] items-end justify-start w-[88%] md:w-full">
                        <Button
                          className="flex h-9 sm:hidden items-center justify-center w-9"
                          shape="circle"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_check.svg"
                            alt="check_One"
                          />
                        </Button>
                        <Text
                          className="mb-0.5 sm:mt-0 mt-[5px] text-black-900 text-xl"
                          size="txtOpenSansRegular20Black900"
                        >
                          Advisor success customer launch party.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[27px] items-end justify-start w-[73%] md:w-full">
                        <Button
                          className="flex h-9 sm:hidden items-center justify-center w-9"
                          shape="circle"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_check.svg"
                            alt="check_Two"
                          />
                        </Button>
                        <Text
                          className="mb-0.5 mt-[5px] text-black-900 text-xl"
                          size="txtOpenSansRegular20Black900"
                        >
                          Business-to-consumer long tail.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-bold font-opensans min-w-[210px] outline outline-[2px] outline-blue_gray-900 text-center text-xl"
                shape="round"
                color="blue_gray_900"
                size="lg"
                variant="fill"
              >
                Start now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-center justify-between max-w-[1100px] mt-[120px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[46%] md:w-full">
              <Text
                className="leading-[56.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[99%] sm:w-full"
                size="txtManropeRegular36"
              >
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Text>
              <div className="flex flex-col font-opensans gap-6 items-center justify-start w-full">
                <Input
                  name="group253"
                  placeholder="We connect our customers with the best."
                  className="font-semibold p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <Img
                      className="h-7 mr-3 my-auto"
                      src="images/img_music.svg"
                      alt="music"
                    />
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="group252"
                  placeholder="Advisor success customer launch party."
                  className="font-semibold p-0 placeholder:text-black-900 text-base text-left w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <Img
                      className="h-7 mr-3 my-auto"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="group251"
                  placeholder="Business-to-consumer long tail."
                  className="font-semibold p-0 placeholder:text-black-900 text-base text-left w-full"
                  wrapClassName="flex w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-3"
                      src="images/img_sun.svg"
                      alt="sun"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div className="md:h-[523px] h-[692px] relative w-[41%] md:w-full">
              <Img
                className="absolute h-[523px] inset-x-[0] mx-auto object-cover rounded-[24px] top-[0] w-full"
                src="images/img_rectangle1270_523x444.png"
                alt="rectangle1270_One"
              />
              <div className="absolute bg-white-A700 bottom-[0] flex-col hidden items-center justify-start left-[11%] p-6 sm:px-5 rounded-[12px] shadow-bs2 w-[66%]">
                <HomepageVTwoColumnpiegraph className="flex flex-col sm:hidden items-center justify-center p-[23.79px] sm:px-5 w-auto" />
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-col font-manrope items-center justify-end mt-[179px] p-[95px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1150px] mt-[5px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="leading-[72.00px] mb-[7px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtManropeRegular48"
                >
                  An enterprise template to ramp up your company website
                </Text>
                <Img
                  className="h-[73px] sm:mt-0 mt-[78px]"
                  src="images/img_arrows.svg"
                  alt="group235"
                />
              </div>
              <List
                className="sm:flex-col flex-row font-opensans gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {homepageVTwoTestimonialPropList.map((props, index) => (
                  <React.Fragment key={`HomepageVTwoTestimonial${index}`}>
                    <HomepageVTwoTestimonial
                      className="bg-white-A700 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[12px] shadow-bs1 w-auto"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <Img
            className="h-[403px] sm:h-auto max-w-[1100px] mt-[120px] mx-auto object-cover rounded-[24px] w-full"
            src="images/img_image.png"
            alt="rectangle1270_Two"
          />
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-[100px] items-start justify-start max-w-[1100px] mt-14 mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[56.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[46%] sm:w-full"
              size="txtManropeRegular36"
            >
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Text>
            <List
              className="flex flex-col font-opensans gap-8 w-[46%]"
              orientation="vertical"
            >
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtOpenSansRegular20Black900"
                      >
                        We connect our customers with the best?
                      </Text>
                      <Button
                        className="flex h-7 sm:hidden items-center justify-center rounded-[50%] w-7"
                        shape="circle"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_check.svg"
                          alt="arrowdown"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtOpenSansRegular20Black900"
                      >
                        Android research & development rockstar?{" "}
                      </Text>
                      <Button
                        className="flex h-7 sm:hidden items-center justify-center rounded-[50%] w-7"
                        shape="circle"
                        color="blue_gray_900"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_check.svg"
                          alt="arrowdown"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-3 h-[184px] md:h-auto items-center justify-center max-w-[842px] mt-[154px] mx-auto md:px-5 w-full">
            <Text
              className="text-gray-600 text-xl w-auto"
              size="txtOpenSansRegular20"
            >
              Our Blog
            </Text>
            <Text
              className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtManropeRegular48Black900"
            >
              Value proposition accelerator product management venture
            </Text>
          </div>
          <div className="flex flex-col font-opensans items-center justify-start max-w-[1044px] mt-[79px] mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-1.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              {homepageVTwoArticlePropList.map((props, index) => (
                <React.Fragment key={`HomepageVTwoArticle${index}`}>
                  <HomepageVTwoArticle
                    className="flex flex-col gap-6 items-start justify-start sm:ml-[0] w-[344px]"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[219px] mt-[84px] text-center text-xl"
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="outline"
          >
            Load more
          </Button>
          <footer className="flex font-manrope items-center justify-center mt-[124px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-center w-full">
              <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[12px] w-[86%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[391px] items-center justify-start p-[72px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                        <Text
                          className="leading-[72.00px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
                          size="txtManropeRegular48"
                        >
                          An enterprise template to ramp up your company website
                        </Text>
                        <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-start w-[85%] md:w-full">
                          <Input
                            name="group275"
                            placeholder="Your email address"
                            className="p-0 placeholder:text-black-900 text-center text-xl w-full"
                            wrapClassName="md:mt-0 my-0.5 outline outline-[2px] outline-white-A700 rounded-[28px] w-[62%] md:w-full"
                            type="email"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          ></Input>
                          <Button
                            className="cursor-pointer font-bold min-w-[210px] outline outline-[2px] outline-green-A200 text-center text-xl"
                            shape="round"
                            color="green_A200"
                            size="lg"
                            variant="fill"
                          >
                            Start now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-opensans items-start justify-start sm:m-[] sm:mt-[90px] p-[91px] sm:p-[9px] md:px-10 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[26px] ml-2 md:ml-[0] w-[93%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[27%] md:w-full">
                    <div className="flex flex-row font-manrope gap-[11px] items-center justify-start w-[52%] md:w-full">
                      <Img
                        className="h-8"
                        src="images/img_user_blue_gray_900_33x23.svg"
                        alt="user_Three"
                      />
                      <Text
                        className="sm:text-[33.25px] md:text-[39.25px] text-[43.25px] text-blue_gray-900"
                        size="txtManropeBold4325"
                      >
                        Boldo
                      </Text>
                    </div>
                    <Text
                      className="leading-[28.00px] mt-[29px] text-base text-gray-600 w-full"
                      size="txtOpenSansRegular16Gray600"
                    >
                      Social media validation business model canvas graphical
                      user interface launch party creative facebook iPad
                      twitter.
                    </Text>
                    <Text
                      className="mt-[68px] text-base text-gray-600"
                      size="txtOpenSansRegular16Gray600"
                    >
                      All rights reserved.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[93%] md:w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtOpenSansBold20"
                          >
                            Landings
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[155px] sm:mt-0 mt-0.5 text-black-900 text-xl"
                            size="txtOpenSansBold20"
                          >
                            Company
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[150px] text-black-900 text-xl"
                            size="txtOpenSansBold20"
                          >
                            Resources
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="sm:hidden leading-[32.00px] text-gray-600 text-xl"
                            size="txtOpenSansRegular20"
                          >
                            <>
                              Home
                              <br />
                              <br />
                              Products
                              <br />
                              <br />
                              Services
                            </>
                          </Text>
                          <div className="h-[172px] relative w-1/4 sm:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[32.00px] left-[0] my-auto text-gray-600 text-xl"
                              size="txtOpenSansRegular20"
                            >
                              <>
                                Home
                                <br />
                                <br />
                                Careers
                                <br />
                                <br />
                                Services
                              </>
                            </Text>
                            <Button
                              className="absolute cursor-pointer font-bold h-max inset-y-[0] min-w-[72px] my-auto right-[0] rounded-[15px] text-[13px] text-center"
                              color="green_A200"
                              size="sm"
                              variant="fill"
                            >
                              Hiring!
                            </Button>
                          </div>
                          <Text
                            className="sm:hidden leading-[32.00px] text-gray-600 text-xl"
                            size="txtOpenSansRegular20"
                          >
                            <>
                              Blog
                              <br />
                              <br />
                              Products
                              <br />
                              <br />
                              Services
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepageVTwoPage;
