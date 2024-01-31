import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import CollapsibleBox from "./Colap";
import Footer from "components/Footer/Footer";
import Slider from "./Slider";

const HomePageDesktopPage = () => {
  const navigate = useNavigate();



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
                    className="absolute sm:hidden h-[792px] inset-y-[0] left-[0] my-auto w-[19px]"
                    src="images/img_abstractdesign_deep_orange_200.svg"
                    alt="abstractdesign_Three"
                  />
                </div>

              </div>
              <Img
                className="absolute sm:hidden h-[784px] inset-y-[0] my-auto right-[0] w-[19px]"
                src="images/img_abstractdesign_deep_orange_200_784x19.svg"
                alt="abstractdesign_Five"
              />
            </div>

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
              className="sm:text-[24px] md:text-[50px] text-[58px] text-center sm:mr-5 text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our Testimonials
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] sm:text-[18px] sm:leading-none md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Our testimonials are heartfelt reflections of the nurturing
              environment we provide, where children flourish both academically
              and emotionally.
            </Text>
          </div>
          <div className="mx-auto">
            <Slider />
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
                className="sm:text-[24px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
                size="txtRalewayRomanBold58"
              >
                Frequently Asked Questions
              </Text>
              <Text
                className="leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl sm:text-[13px] sm:leading-none"
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
                className="sm:text-[24px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
                size="txtRalewayRomanBold58"
              >
                Navigate through our Pages
              </Text>
              <Text
                className="leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl sm:text-[13px] sm:leading-none"
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
                        className="text-5xl sm:text-[28px] md:text-[44px] text-center text-gray-900_01 w-full"
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
                      className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl sm:text-[13px] sm:leading-none"
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
                    <div className="!text-blue_gray-900 font-medium text-center text-xl sm:text-sm">
                      Learn More{" "}
                    </div>
                  </Button>
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                    <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[20px] md:text-[44px] text-center text-gray-900_01 w-full"
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
                      className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl sm:text-[13px] sm:leading-none"
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
                    <div className="!text-blue_gray-900 font-medium text-center text-xl sm:text-sm">
                      Learn More{" "}
                    </div>
                  </Button>
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                    <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[28px] md:text-[44px] text-center text-gray-900_01 w-full"
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
                      className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl sm:text-[13px] sm:leading-none"
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
                    <div className="!text-blue_gray-900 font-medium text-center text-xl sm:text-sm">
                      Learn More{" "}
                    </div>
                  </Button>
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-20 items-start justify-start p-20 sm:p-5 md:px-10 rounded-[12px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[50px] items-start justify-center w-full">
                    <div className="flex flex-col font-raleway gap-[30px] items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[20px] md:text-[44px] text-center text-gray-900_01 w-full"
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
                      className="leading-[150.00%] max-w-[613px] md:max-w-full text-center text-gray-800 text-xl sm:text-[13px] sm:leading-none "
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
                    <div className="!text-blue_gray-900 font-medium text-center text-xl sm:text-sm">
                      Learn More{" "}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
};

export default HomePageDesktopPage;
