import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const AdmissionPageDesktopPage = () => {
  return (
    <>
      <div className="bg-red-50 flex flex-col font-outfit items-center justify-start mx-auto p-[18px] w-full">
        <Header className="flex flex-col gap-3.5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-row items-center justify-start max-w-[1820px] mt-[60px] mx-auto md:px-5 px-[120px] py-[150px] rounded-[12px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
            <div className="relative w-[53%] md:w-full">
              <div className="absolute flex flex-col h-[200px] items-center justify-start left-[0] top-[0] w-[200px]">
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
              <div className="flex flex-col gap-3.5 items-start justify-start ml-auto mt-auto relative w-full">
                <Button
                  className="border-2 border-gray-900 border-solid cursor-pointer font-medium font-outfit min-w-[123px] text-center text-lg"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Admission
                </Button>
                <Text
                  className="leading-[130.00%] max-w-[765px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01"
                  size="txtRalewayRomanBold48"
                >
                  Join Our Family of Young Learners
                </Text>
              </div>
            </div>
            <Text
              className="flex-1 leading-[150.00%] md:mt-0 mt-[197px] text-blue_gray-900 text-xl"
              size="txtOutfitMedium20"
            >
              <>
                At Little Learners Academy, we welcome you to embark on an
                exciting educational journey for your child. Our admission
                process is designed to be transparent, straightforward, and
                inclusive. Here&#39;s a step-by-step guide to joining our school
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-raleway md:gap-10 gap-[100px] items-start justify-start max-w-[1595px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[102px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Process
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Admission Process
            </Text>
            <Text
              className="leading-[150.00%] max-w-[995px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Embark on a remarkable educational journey with us! Our Admission
              and Enrollment process is the gateway to providing your child with
              an exceptional learning experience at our kindergarten school
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-32">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01 w-auto"
                      size="txtRalewayRomanExtraBold60"
                    >
                      01
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    Inquiry
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Submit an inquiry form through our website or contact our
                    admissions office to express your interest in Little
                    Learners Academy.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-[132px]">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01"
                      size="txtRalewayRomanExtraBold60"
                    >
                      02
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    School Tour
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Schedule a personalized school tour to explore our campus,
                    meet our staff, and gain insights into our nurturing
                    learning environment.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-[132px]">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01"
                      size="txtRalewayRomanExtraBold60"
                    >
                      03
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    Application Form
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Complete the application form and provide the required
                      documents, including your child&#39;s birth certificate,
                      medical records, and any previous academic records (if
                      applicable).
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-[132px]">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01"
                      size="txtRalewayRomanExtraBold60"
                    >
                      04
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    Parent Interview
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      We value parent engagement, and a meeting with our
                      admissions team allows us to understand your child&#39;s
                      needs and ensure Little Learners Academy aligns with your
                      family&#39;s expectations.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-[131px]">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01"
                      size="txtRalewayRomanExtraBold60"
                    >
                      05
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    Student Assessment
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    For certain age groups, a student assessment may be
                    conducted to understand their developmental progress and
                    ensure the best placement.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col relative w-[134px]">
                  <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-center justify-center mx-auto sm:px-5 px-[30px] py-3.5 rounded-[12px] shadow-bs1 w-auto">
                    <Text
                      className="md:text-5xl text-6xl text-gray-900_01 w-auto"
                      size="txtRalewayRomanExtraBold60"
                    >
                      06
                    </Text>
                  </div>
                  <Img
                    className="h-[89px] mt-[-12px] mx-auto w-full z-[1]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold40"
                  >
                    Acceptance
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Once the admission process is complete, you will receive an
                    official acceptance letter from Little Learners Academy.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-outfit md:gap-10 gap-[100px] items-end justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[146px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Our Features
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Fee Structure
            </Text>
            <Text
              className="leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Our fee structure is transparent, and we strive to keep our fees
              competitive within the education sector. The fees vary based on
              the program, age group, and any additional services chosen.
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-full">
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-start justify-start p-[60px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex sm:flex-col flex-row sm:gap-5 h-20 md:h-auto items-center justify-start rounded-[12px] w-full">
                <Text
                  className="bg-deep_orange-50 flex-1 h-full justify-center outline outline-gray-900 pb-6 pt-[29px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                  size="txtOutfitMedium20Gray900"
                >
                  Program
                </Text>
                <Text
                  className="bg-deep_orange-50 flex-1 h-full justify-center outline outline-gray-900 pb-[25px] pt-[29px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                  size="txtOutfitMedium20Gray900"
                >
                  Age Group
                </Text>
                <Text
                  className="bg-deep_orange-50 flex-1 h-full justify-center outline outline-gray-900 sm:px-5 px-[34px] py-[26px] text-gray-900 text-xl w-full"
                  size="txtOutfitMedium20Gray900"
                >
                  Annual Tuition
                </Text>
                <Text
                  className="bg-deep_orange-50 flex-1 h-full justify-center outline outline-gray-900 pb-6 pt-[29px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                  size="txtOutfitMedium20Gray900"
                >
                  Registration Fee
                </Text>
                <Text
                  className="bg-deep_orange-50 flex-1 h-full justify-center outline outline-gray-900 pb-[25px] pt-[29px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                  size="txtOutfitMedium20Gray900"
                >
                  Activity Fee
                </Text>
              </div>
              <List
                className="bg-gray-50 border-2 border-gray-900 border-solid flex flex-col items-start rounded-[12px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="flex-1 outline outline-gray-900 pb-[30px] pt-[34px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    Nursery
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    2 - 3 Years
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $1,686
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $162
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $12
                  </Text>
                </div>
                <div className="border-gray-900 border-solid border-t-2 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="flex-1 outline outline-gray-900 pb-[30px] pt-[33px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    Pre - Kindergartens
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    3 - 4 Years
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $2,686
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $220
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $16
                  </Text>
                </div>
                <div className="border-gray-900 border-solid border-t-2 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                  <Text
                    className="flex-1 outline outline-gray-900 pb-[30px] pt-[33px] sm:px-5 px-[34px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    Kindergarten
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    4 - 5 Years
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $3,686
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $340
                  </Text>
                  <Text
                    className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                    size="txtOutfitMedium20Gray900"
                  >
                    $20
                  </Text>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col font-raleway gap-[30px] items-start justify-start p-[60px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <Text
                className="bg-deep_orange-50 justify-center outline outline-[2px] outline-gray-900 sm:px-5 px-[34px] py-[21px] rounded-[12px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-full"
                size="txtRalewayRomanBold30"
              >
                Additional Services
              </Text>
              <div className="bg-gray-50 border-2 border-gray-900 border-solid flex flex-col font-outfit items-start justify-start rounded-[12px] w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="border-b-2 border-gray-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Text
                      className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-[31px] text-gray-900 text-xl w-full"
                      size="txtOutfitMedium20Gray900"
                    >
                      Before and After-School Care
                    </Text>
                    <Text
                      className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                      size="txtOutfitMedium20Gray900"
                    >
                      $120 / per month
                    </Text>
                  </div>
                  <div className="border-b-2 border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOutfitMedium20Gray900"
                      >
                        Language Immersion Program
                      </Text>
                    </div>
                    <Text
                      className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                      size="txtOutfitMedium20Gray900"
                    >
                      $60 / per semester
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtOutfitMedium20Gray900"
                      >
                        Transportation (optional)
                      </Text>
                    </div>
                    <Text
                      className="flex-1 outline outline-gray-900 sm:px-5 px-[34px] py-8 text-gray-900 text-xl w-full"
                      size="txtOutfitMedium20Gray900"
                    >
                      $80 / per month
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col font-outfit items-start justify-start max-w-[1820px] mb-8 mt-[200px] mx-auto pb-10 pt-[100px] md:px-5 px-[113px] rounded-[12px] shadow-bs1 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
              <div className="flex sm:flex-1 flex-col gap-[50px] items-start justify-start w-[519px] sm:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[50px] w-[228px]"
                    src="images/img_logo.svg"
                    alt="logo_One"
                  />
                  <Text
                    className="leading-[150.00%] max-w-[519px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    We believe in the power of play to foster creativity,
                    problem-solving skills, and imagination.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <Button
                      className="flex h-10 items-center justify-center outline outline-[2px] outline-gray-900 rounded-md w-10"
                      shape="round"
                      color="red_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_subtract.svg" alt="subtract" />
                    </Button>
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtOutfitMedium20Gray900"
                    >
                      hello@littlelearners.com
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <Button
                      className="flex h-10 items-center justify-center outline outline-[2px] outline-gray-900 rounded-md w-10"
                      shape="round"
                      color="red_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[21px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </Button>
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtOutfitMedium20Gray900"
                    >
                      +91 91813 23 2309
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <Button
                      className="flex h-10 items-center justify-center outline outline-[2px] outline-gray-900 rounded-md w-10"
                      shape="round"
                      color="red_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_linkedin.svg" alt="linkedin" />
                    </Button>
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtOutfitMedium20Gray900"
                    >
                      Somewhere in the World
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtOutfitSemiBold20"
                  >
                    Home
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Features
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Our Testimonials
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      FAQ
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtOutfitSemiBold20"
                  >
                    About Us
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Our Mission
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Our Vission
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Awards and Recognitions
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      History
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                    >
                      Teachers
                    </Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-full"
                      size="txtOutfitSemiBold20"
                    >
                      Academics
                    </Text>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOutfitMedium20"
                      >
                        Special Features
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOutfitMedium20"
                      >
                        Gallery
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl w-full"
                      size="txtOutfitSemiBold20"
                    >
                      Contact Us
                    </Text>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOutfitMedium20"
                      >
                        Information
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-full"
                        size="txtOutfitMedium20"
                      >
                        Map & Direction
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Line className="bg-gray-900 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-lg w-auto"
                  >
                    <Text size="txtOutfitMedium18Bluegray900">
                      Terms of Service
                    </Text>
                  </a>
                  <Line className="bg-gray-900 sm:h-0.5 h-[27px] w-0.5 sm:w-full" />
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-lg w-auto"
                  >
                    <Text size="txtOutfitMedium18Bluegray900">
                      Privacy Policy
                    </Text>
                  </a>
                  <Line className="bg-gray-900 sm:h-0.5 h-[27px] w-0.5 sm:w-full" />
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtOutfitMedium18Bluegray900"
                  >
                    Cookie Policy
                  </Text>
                </div>
                <Img
                  className="h-14 w-[196px]"
                  src="images/img_buttonscontainer.svg"
                  alt="buttonscontaine"
                />
              </div>
              <Line className="bg-gray-900 h-px w-full" />
              <Text
                className="text-center text-gray-700 text-lg w-full"
                size="txtOutfitMedium18Gray700"
              >
                Copyright © [2023] Little Learners Academy. All rights
                reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPageDesktopPage;
