import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import HomepageVTwoArticle from "components/HomepageVTwoArticle";

const BlogPage = () => {
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
    { userimage: "images/img_rectangle1270_506x494.png" },
    {
      descriptiontext:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      userimage: "images/img_image.png",
      nametext: "Rachel Green",
    },
    {
      descriptiontext:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      userimage: "images/img_image_151x150.png",
      nametext: "Monica Geller",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[124px] items-center justify-end mx-auto pt-12 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <header className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center sm:m-[] sm:mr-[300px] w-full">
            <div className="flex md:flex-1 flex-row gap-3 items-center justify-start pr-1 w-[14%] md:w-full">
              <Img
                className="h-[33px]"
                src="images/img_user_blue_gray_900_33x23.svg"
                alt="user"
              />
              <Text
                className="sm:text-[33.25px] md:text-[39.25px] text-[43.25px] text-blue_gray-900"
                size="txtManropeBold4325"
              >
                Boldo
              </Text>
            </div>
            <ul className="flex md:flex-col flex-row font-opensans gap-10 md:hidden items-center justify-center mb-[11px] md:ml-[0] ml-[610px] mr-2 md:mt-0 mt-2 w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-base text-blue_gray-900">
                  <Text size="txtOpenSansSemiBold16">Product</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-base text-blue_gray-900">
                  <Text size="txtOpenSansSemiBold16">Services</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-base text-blue_gray-900">
                  <Text size="txtOpenSansSemiBold16">About</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Button
                    className="cursor-pointer font-bold rounded-[20px] text-base text-center"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    Log In
                  </Button>
                </a>
              </li>
            </ul>
          </header>
          <div className="flex flex-col gap-3 h-[183px] md:h-auto items-center justify-center max-w-[888px] mt-[34px] w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtOpenSansRegular20Bluegray900"
            >
              Blog
            </Text>
            <Text
              className="md:text-5xl text-[64px] text-blue_gray-900 text-center w-auto"
              size="txtManropeRegular64Bluegray900"
            >
              Thoughts and words
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between mt-10 w-full">
            <Img
              className="h-[386px] md:h-auto object-cover rounded-[24px]"
              src="images/img_rectangle1270_386x550.png"
              alt="rectangle1270"
            />
            <div className="flex sm:flex-1 flex-col gap-5 h-[247px] md:h-auto items-start justify-start w-[550px] sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row font-opensans gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtOpenSansBold16"
                  >
                    Category
                  </Text>
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtOpenSansRegular16Gray600"
                  >
                    November 22, 2021
                  </Text>
                </div>
                <Text
                  className="leading-[72.00px] max-w-[543px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtManropeRegular48Black900"
                >
                  Pitch termsheet backing validation focus release.
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="h-8 md:h-auto rounded-[50%] w-8"
                  src="images/img_ellipse10.png"
                  alt="ellipseTen"
                />
                <Text
                  className="text-base text-black-900 w-[105px]"
                  size="txtOpenSansRegular16Black900"
                >
                  Chandler Bing
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-900 h-px mt-[72px] w-full" />
          <Text
            className="mt-[100px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtManropeRegular48Black900"
          >
            Latest news
          </Text>
          <div className="font-opensans gap-1.5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[41px] w-[88%]">
            {homepageVTwoArticlePropList.map((props, index) => (
              <React.Fragment key={`HomepageVTwoArticle${index}`}>
                <HomepageVTwoArticle
                  className="flex flex-col gap-6 items-start justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <Button
            className="cursor-pointer font-bold font-opensans min-w-[219px] mt-24 text-center text-xl"
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="outline"
          >
            Load more
          </Button>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogPage;
