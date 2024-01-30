import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, RatingBar, Text } from "components";
import Header from "components/Header";
import CollapsibleBox from "./Colap";
import TestimonialCarousel from "./Testomonials";
import TestimonialSlider from "./Testomonials";

const HomePageDesktopPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open(
      "https://www.facebook.com/tonyfi.pias.71",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className="bg-red-50 flex flex-col font-outfit items-center justify-start mx-auto p-[18px] w-full">
        <Header className="flex flex-col gap-3.5 items-center justify-center md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1599px] mt-[72px] mx-auto md:px-5 w-full">
          <div className="h-[800px] md:h-auto relative w-full">
            <div className="m-auto w-full">
              <div className="m-auto w-full">
                <div className="m-auto w-full">
                  <div className="bg-deep_orange-200 flex flex-col h-[785px] md:h-auto items-end justify-start m-auto w-full">
                    <div className="relative w-full">
                      <Img
                        className="h-full m-auto object-cover w-full"
                        src="images/img_image.png"
                        alt="image"
                      />
                      <Img
                        className="common-pointer absolute flex h-[607px] inset-[0] justify-center m-auto w-[558px]"
                        src="images/img_abstractdesign_red_50.svg"
                        alt="abstractdesign_Two"
                        onClick={() => navigate("/contactpagedesktop")}
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute sm:h-[460px] h-[792px] inset-y-[0] left-[0] my-auto w-[19px]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="abstractdesign_Three"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-5 inset-x-[0] mx-auto w-[769px]"
                  src="images/img_abstractdesign_deep_orange_200_20x769.svg"
                  alt="abstractdesign_Four"
                />
              </div>
              <Img
                className="absolute sm:h-[460px] h-[784px] inset-y-[0] my-auto right-[0] w-[19px]"
                src="images/img_abstractdesign_deep_orange_200_784x19.svg"
                alt="abstractdesign_Five"
              />
            </div>
            <Img
              className="absolute h-5 inset-x-[0] mx-auto top-[0] w-[758px]"
              src="images/img_abstractdesign_deep_orange_200_20x758.svg"
              alt="abstractdesign_Six"
            />
          </div>
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="border-b-2 border-gray-900 border-solid flex flex-col items-start justify-start pb-1.5 w-auto">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                    size="txtOutfitMedium22"
                  >
                    Welcome to Little Learners Academy
                  </Text>
                </div>
                <Text
                  className="leading-[130.00%] max-w-[765px] md:max-w-full sm:text-3xl md:text-[46px] text-[54px] text-gray-900_01"
                  size="txtOutfitMedium54"
                >
                  <span className="text-gray-900_01 font-raleway text-left font-extrabold">
                    Where Young Minds Blossom and{" "}
                  </span>
                  <span className="text-deep_orange-300_01 font-raleway text-left font-extrabold">
                    Dreams Take Flight.
                  </span>
                  <span className="text-gray-900_01 font-raleway text-left font-extrabold">
                    {" "}
                  </span>
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[765px] md:max-w-full sm:text-[15px] text-blue_gray-900 text-xl"
                size="txtOutfitMedium20"
              >
                Our kinder garden school provides a nurturing and stimulating
                environment, fostering a love for learning that lasts a
                lifetime. Join us as we embark on an exciting educational
                journey together!
              </Text>
            </div>
            <List
              className="bg-deep_orange-50 sm:flex-col flex-row gap-[13px] sm:gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start outline outline-[2px] outline-gray-900 sm:p-[] sm:pt-5 md:px-10 sm:px-5 px-[50px] py-6 rounded-[12px] shadow-bs w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                  size="txtOutfitExtraBold44"
                >
                  +7000
                </Text>
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtOutfitMedium18"
                >
                  Students Passed Out
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="hidden sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                  size="txtOutfitExtraBold44"
                >
                  +37
                </Text>
                <Text
                  className="hidden text-gray-900 text-lg w-full"
                  size="txtOutfitMedium18"
                >
                  Awards & Recognitions
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="hidden sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                  size="txtOutfitExtraBold44"
                >
                  +15
                </Text>
                <Text
                  className="hidden text-gray-900 text-lg w-full"
                  size="txtOutfitMedium18"
                >
                  Experience Educators
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px]  items-start justify-start max-w-[1592px] mt-[193px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[287px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Children Deserve Bright Future
            </Button>
            <Text
              className="sm:text-[35px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our Benefits
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] md:max-w-full sm:text-[15px] text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              <>
                With a dedicated team of experienced educators, state-of-the-art
                facilities, and a comprehensive curriculum, we aim to lay a
                strong foundation for your child&#39;s future.
              </>
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] pt-5 w-full">
              <div className="md:h-[243px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] sm:hidden left-[0] max-h-[74px] sm:p-[] sm:pb-[] top-[0]"
                  src="images/img_container.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-5 sm:pt-[10] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Holistic Learning Approach
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full pt-5 sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Our curriculum focuses on nurturing cognitive, social,
                    emotional, and physical development, ensuring a well-rounded
                    education.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[243px] md:h-[303px] h-[341px] pt-5 relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_red_100.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto sm:p-[] pb-[50px] pt-20 sm:pt-5 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Experienced Educators
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Our passionate and qualified teachers create a supportive
                    and stimulating learning environment.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[243px] md:h-[303px] h-[341px] pt-5 relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_red_100_74x104.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto sm:p-[] pb-[50px] pt-20 sm:pt-5 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Nurturing Environment
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      We prioritize safety and provide a warm and caring
                      atmosphere for every child.
                      <br />
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[203px] h-[311px] pt-5 relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_74x104.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-2.5 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Play-Based Learning
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    We believe in the power of play to foster creativity,
                    problem-solving skills, and imagination.
                  </Text>
                </div>
              </div>
              <div className="md:h-[203px] h-[311px] pt-5 relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_1.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-2.5 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Individualized Attention
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full pt-2.5 sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Our small class sizes enable personalized attention,
                      catering to each child&#39;s unique needs.
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[203px] h-[311px] pt-5 relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_2.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-2.5 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Parent Involvement
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full sm:text-[15px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    We foster a strong parent-school partnership to ensure
                    seamless communication and collaboration.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1592px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[217px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Their Happy Words 🤗
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our Testimonials
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Our testimonials are heartfelt reflections of the nurturing
              environment we provide, where children flourish both academically
              and emotionally.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-full">
            <Button
              className="border-2 border-blue_gray-900 border-solid flex h-[58px] items-center justify-center w-[58px]"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[30px]"
                src="images/img_icon_blue_gray_900.svg"
                alt="icon_One"
              />
            </Button>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[87%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">


                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Img
                    className="rounded-[50%] w-20"
                    src="images/img_profilecontainer.svg"
                    alt="profilecontaine"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    David K
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[140px]"
                    value={5}
                    starCount={5}
                    activeColor="#ff8c4c"
                    size={24}
                  ></RatingBar>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[325px] md:max-w-full text-blue_gray-900 text-center text-xl"
                  size="txtOutfitMedium20"
                >
                  Choosing Little Learners Academy for my daughter was the best
                  decision. She has thrived in their nurturing and stimulating
                  environment.
                </Text>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="bg-red-50 border border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[50%] w-20">
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_icon_white_a700_60x60.svg"
                      alt="icon"
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    Emily L
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-[140px]"
                    value={5}
                    starCount={5}
                    activeColor="#ff8c4c"
                    size={24}
                  ></RatingBar>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[325px] md:max-w-full text-blue_gray-900 text-center text-xl"
                  size="txtOutfitMedium20"
                >
                  <>
                    My son&#39;s social and academic growth has been remarkable
                    since joining Little Learners Academy. I am grateful for the
                    supportive and dedicated teachers.
                  </>
                </Text>
              </div>
            </List>
            <Button
              className="border-2 border-blue_gray-900 border-solid flex h-[58px] items-center justify-center w-[58px]"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[30px]"
                src="images/img_icon_blue_gray_900.svg"
                alt="icon_Two"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1592px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[239px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Solutions For The Doubts
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Frequently Asked Questions
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              <>
                Find all the essential information you need in our FAQ section,
                designed to address the most frequently asked questions and help
                you make informed decisions for your child&#39;s education.
              </>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[30px] w-full items-center justify-center ml-[50%] sm:ml-0 md:ml-0">
              <CollapsibleBox />

            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[147px] text-center text-lg"
              onClick={() => navigate("/academicspagedesktop")}
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Explore More
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Navigate through our Pages
            </Text>
            <Text
              className="leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Your gateway to discovering a wealth of valuable information about
              our kindergarten school, Feel free to explore and learn more about
              the enriching experiences that await your child at our
              kindergarten school
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                  <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-full"
                      size="txtRalewayRomanBold48"
                    >
                      About Us
                    </Text>
                    <Img
                      className="h-5 w-full"
                      src="images/img_container_deep_orange_200.svg"
                      alt="container"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Discover our Mission, Values, and our unwavering
                      commitment to providing the best learning experience for
                      your child. Learn about our passionate educators and our
                      engaging approach to early education.
                      <br />
                    </>
                  </Text>
                </div>
                <Button
                  className="common-pointer border-2 border-gray-900 border-solid cursor-pointer flex items-center justify-center rounded-[10px] shadow-bs2 w-full"
                  onClick={() => navigate("/aboutpagedesktop")}
                  rightIcon={
                    <Img
                      className="h-[30px] ml-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="red_100"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-blue_gray-900 font-medium text-center text-xl">
                    Learn More{" "}
                  </div>
                </Button>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                  <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-full"
                      size="txtRalewayRomanBold48"
                    >
                      Academics
                    </Text>
                    <Img
                      className="h-5 w-full"
                      src="images/img_container_deep_orange_200.svg"
                      alt="container"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Delve into our comprehensive academic programs designed to
                    stimulate young minds, foster creativity, and encourage a
                    love for learning. Explore our well-rounded curriculum that
                    nurtures both intellectual and social development.
                  </Text>
                </div>
                <Button
                  className="common-pointer border-2 border-gray-900 border-solid cursor-pointer flex items-center justify-center rounded-[10px] shadow-bs2 w-full"
                  onClick={() => navigate("/academicspagedesktop")}
                  rightIcon={
                    <Img
                      className="h-[30px] ml-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="red_100"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-blue_gray-900 font-medium text-center text-xl">
                    Learn More{" "}
                  </div>
                </Button>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                  <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-full"
                      size="txtRalewayRomanBold48"
                    >
                      Student Life
                    </Text>
                    <Img
                      className="h-5 w-full"
                      src="images/img_container_deep_orange_200.svg"
                      alt="container"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Peek into the vibrant and enriching world of Student Life at
                    Little Learners Academy. Discover the array of
                    extracurricular activities, arts and crafts, sports, and
                    social events that make our school experience truly
                    memorable.
                  </Text>
                </div>
                <Button
                  className="common-pointer border-2 border-gray-900 border-solid cursor-pointer flex items-center justify-center rounded-[10px] shadow-bs2 w-full"
                  onClick={() => navigate("/studentlifepagedesktop")}
                  rightIcon={
                    <Img
                      className="h-[30px] ml-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="red_100"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-blue_gray-900 font-medium text-center text-xl">
                    Learn More{" "}
                  </div>
                </Button>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                  <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-full"
                      size="txtRalewayRomanBold48"
                    >
                      Admissions
                    </Text>
                    <Img
                      className="h-5 w-full"
                      src="images/img_container_deep_orange_200.svg"
                      alt="container"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Learn about our Enrollment Process and how to secure your
                      child&#39;s place at Little Learners Academy. Find
                      information about our admission requirements, application
                      deadlines, and available spaces.
                      <br />
                    </>
                  </Text>
                </div>
                <Button
                  className="common-pointer border-2 border-gray-900 border-solid cursor-pointer flex items-center justify-center rounded-[10px] shadow-bs2 w-full"
                  onClick={() => navigate("/admissionpagedesktop")}
                  rightIcon={
                    <Img
                      className="h-[30px] ml-2.5"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                  }
                  shape="round"
                  color="red_100"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-blue_gray-900 font-medium text-center text-xl">
                    Learn More{" "}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-start justify-start max-w-[1820px] mb-8 mt-[200px] mx-auto pb-10 pt-[100px] md:px-5 px-[113px] rounded-[12px] shadow-bs1 w-full">
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
                  className="common-pointer h-14 w-[196px]"
                  src="images/img_buttonscontainer.svg"
                  alt="buttonscontaine"
                  onClick={handleNavigate}
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

export default HomePageDesktopPage;
