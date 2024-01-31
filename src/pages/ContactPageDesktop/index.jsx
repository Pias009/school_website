import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";
import Footer from "components/Footer/Footer";

const ContactPageDesktopPage = () => {
  return (
    <>
      <div className="bg-red-50 flex flex-col font-outfit items-center justify-start mx-auto p-[18px] w-full">
        <Header className="flex flex-col gap-3.5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1820px] mt-[60px] mx-auto md:px-5 px-[120px] py-[150px] rounded-[12px] shadow-bs3 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[35px] justify-start mb-[85px] w-[53%] md:w-full">
                <div className="flex flex-col h-[200px] items-center justify-start w-[200px]">
                  <div className="flex flex-col h-[200px] items-start justify-start w-[200px]">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <div className="h-[49px] relative w-1/2">
                        <Img
                          className="absolute h-[49px] inset-y-[0] left-[0] my-auto w-[49px]"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <Img
                          className="absolute h-[49px] inset-y-[0] my-auto right-[0] w-[50px]"
                          src="images/img_contrast.svg"
                          alt="contrast_One"
                        />
                      </div>
                      <Img
                        className="h-[49px] w-[49px]"
                        src="images/img_contrast.svg"
                        alt="contrast_Two"
                      />
                      <Img
                        className="h-[49px] w-[50px]"
                        src="images/img_contrast.svg"
                        alt="contrast_Three"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-3/4 md:w-full">
                      <div className="h-[50px] relative w-[68%]">
                        <Img
                          className="absolute h-[50px] inset-y-[0] left-[0] my-auto w-[49px]"
                          src="images/img_contrast.svg"
                          alt="contrast_Four"
                        />
                        <Img
                          className="absolute h-[50px] inset-y-[0] my-auto right-[0] w-[50px]"
                          src="images/img_contrast.svg"
                          alt="contrast_Five"
                        />
                      </div>
                      <Img
                        className="h-[50px] w-[49px]"
                        src="images/img_contrast.svg"
                        alt="contrast_Six"
                      />
                    </div>
                    <div className="h-[49px] relative w-1/2">
                      <Img
                        className="absolute h-[49px] inset-y-[0] left-[0] my-auto w-[49px]"
                        src="images/img_contrast.svg"
                        alt="contrast_Seven"
                      />
                      <Img
                        className="absolute h-[49px] inset-y-[0] my-auto right-[0] w-[50px]"
                        src="images/img_contrast.svg"
                        alt="contrast_Eight"
                      />
                    </div>
                    <Img
                      className="h-[50px] w-[49px]"
                      src="images/img_contrast.svg"
                      alt="contrast_Nine"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start ml-2.5 md:ml-[0] w-full">
                  <Button
                    className="border-2 border-gray-900 border-solid cursor-pointer font-medium font-outfit min-w-[129px] text-center text-lg"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Contact Us
                  </Button>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold48"
                  >
                    Feel Free To Connect With Us
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-center md:mt-0 mt-[150px] w-full">
                <Text
                  className="leading-[150.00%] max-w-[765px] md:max-w-full text-blue_gray-900 text-xl sm:text-[13px] sm:leading-none"
                  size="txtOutfitMedium20"
                >
                  We value open communication and are eager to assist you with
                  any inquiries. Feel free to reach out to us through any of the
                  following contact methods
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <Input
                      name="email"
                      placeholder="hello@littlelearners.com"
                      className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-xl w-full"
                      wrapClassName="border-2 border-gray-900 border-solid flex flex-1 sm:flex-1 rounded-[12px] w-[49%] sm:w-full"
                      type="email"
                      prefix={
                        <div className="h-10 mr-2.5 w-10 outline-gray-900 outline-[2px] outline bg-red-50 rounded-md py-[11px] px-[9px]">
                          <Img
                            className="my-auto"
                            src="images/img_subtract.svg"
                            alt="Subtract"
                          />
                        </div>
                      }
                      size="xs"
                    ></Input>
                    <Input
                      name="button"
                      placeholder="+91 91813 23 2309"
                      className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-xl w-full"
                      wrapClassName="border-2 border-gray-900 border-solid flex flex-1 sm:flex-1 rounded-[12px] w-[49%] sm:w-full"
                      prefix={
                        <div className="h-10 mr-2.5 w-10 outline-gray-900 outline-[2px] outline bg-red-50 p-[9px] rounded-md">
                          <Img
                            className="h-[21px] my-auto"
                            src="images/img_call.svg"
                            alt="call"
                          />
                        </div>
                      }
                      size="xs"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <Input
                      name="button_One"
                      placeholder="Somewhere in the World"
                      className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-xl w-full"
                      wrapClassName="border-2 border-gray-900 border-solid flex flex-1 sm:flex-1 rounded-[12px] w-[49%] sm:w-full"
                      prefix={
                        <div className="h-10 mr-2.5 pt-2.5 pb-[9px] w-10 outline-gray-900 outline-[2px] outline bg-red-50 rounded-md px-[11px]">
                          <Img
                            className="my-auto"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </div>
                      }
                      size="xs"
                    ></Input>
                    <Input
                      name="duration"
                      placeholder="Office Hours - 9am - 6 pm"
                      className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-xl w-full"
                      wrapClassName="border-2 border-gray-900 border-solid flex flex-1 sm:flex-1 rounded-[12px] w-[49%] sm:w-full"
                      prefix={
                        <div className="h-10 mr-2.5 w-10 outline-gray-900 outline-[2px] outline bg-red-50 p-2.5 rounded-md">
                          <Img
                            className="h-[19px] my-auto"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                        </div>
                      }
                      size="xs"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1592px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[151px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Contact Form
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Student Information
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl sm:text-[13px] sm:leading-none"
              size="txtOutfitMedium20"
            >
              If you have specific questions or wish to request more information
              about Little Learners Academy, please complete the contact form
              below. Kindly provide the following details to help us better
              understand your needs
            </Text>
          </div>
          <div className="flex flex-col relative w-full">
            <Img
              className="flex-1 h-[74px] hidden max-h-[74px] mt-[-px] mx-auto"
              src="images/img_buttonscontainer.svg"
              alt="buttonscontaine"
            />
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] sm:gap-px items-center justify-end mb-auto mt-[-37px] mx-auto pb-[100px] pt-[120px] md:px-10 sm:px-5 px-[100px] rounded-[12px] shadow-bs3 w-full z-[1]">
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Parent Name
                  </Text>
                  <Input
                    name="inputfield"
                    placeholder="Enter Parent Name"
                    className="font-medium p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid w-full"
                    type="text"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Email Address
                  </Text>
                  <Input
                    name="inputfield_One"
                    placeholder="Enter Email Address"
                    className="font-medium p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid w-full"
                    type="email"
                    shape="round"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Phone Number
                  </Text>
                  <Input
                    name="inputfield_Two"
                    placeholder="Enter Phone Number"
                    className="font-medium p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid w-full"
                    type="number"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Student Name
                  </Text>
                  <Input
                    name="inputfield_Three"
                    placeholder="Enter Student Name"
                    className="font-medium p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid w-full"
                    type="text"
                    shape="round"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Student Age
                  </Text>
                  <Input
                    name="inputfield_Four"
                    placeholder="Enter Student Age"
                    className="font-medium p-0 placeholder:text-gray-700_01 text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid w-full"
                    shape="round"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                    size="txtOutfitSemiBold22Gray800"
                  >
                    Program of Intrest
                  </Text>
                  <Input
                    name="inputfield_Five"
                    placeholder="Select Program"
                    className="font-medium p-0 placeholder:text-gray-700_01 sm:font-semibold text-left text-xl w-full"
                    wrapClassName="border-2 border-gray-900 border-solid flex sm:font-semibold w-full"
                    suffix={
                      <Img
                        className="h-[30px] ml-[35px] my-auto"
                        src="images/img_icon_blue_gray_900_30x30.svg"
                        alt="Icon"
                      />
                    }
                    shape="round"
                    size="sm"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-full"
                  size="txtOutfitSemiBold22Gray800"
                >
                  Message
                </Text>
                <div className="bg-gray-50 border-2 border-gray-900 border-solid flex flex-col h-[218px] md:h-auto items-start justify-start p-[30px] sm:px-5 rounded-lg w-full">
                  <Text
                    className="text-gray-700_01 text-xl w-auto"
                    size="txtOutfitMedium20Gray70001"
                  >
                    Enter your Message
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium outline outline-[2px] outline-gray-900 rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="deep_orange_A100"
                size="xl"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPageDesktopPage;
