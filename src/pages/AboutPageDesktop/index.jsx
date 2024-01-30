import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const AboutPageDesktopPage = () => {
  const navigate = useNavigate();

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
                  className="border-2 border-gray-900 border-solid cursor-pointer font-medium font-outfit min-w-[117px] text-center text-lg"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Overview
                </Button>
                <Text
                  className="leading-[130.00%] max-w-[765px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01"
                  size="txtRalewayRomanBold48"
                >
                  Welcome to Little Learners Academy
                </Text>
              </div>
            </div>
            <Text
              className="flex-1 leading-[150.00%] md:mt-0 mt-[167px] text-blue_gray-900 text-xl"
              size="txtOutfitMedium20"
            >
              A leading kinder garden school dedicated to providing a nurturing
              and stimulating environment for young learners. With a commitment
              to excellence in early education, we believe in shaping curious
              minds and building a strong foundation for a lifelong love of
              learning. Our holistic approach fosters intellectual, social,
              emotional, and physical development, ensuring that each child
              reaches their full potential.
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[175px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Mission & Visions
            </Button>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold48"
            >
              Our Mission & Visions
            </Text>
            <Text
              className="leading-[150.00%] max-w-[996px] md:max-w-full text-base text-blue_gray-900 text-center"
              size="txtOutfitMedium16"
            >
              We are here to provide a nurturing and inclusive environment where
              young minds can thrive, fostering a love for learning and personal
              growth.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start p-[60px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex flex-row font-raleway sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-auto"
                  size="txtRalewayRomanBold48"
                >
                  Mission
                </Text>
                <Img
                  className="h-20 w-20"
                  src="images/img_icon_gray_900_80x80.svg"
                  alt="icon"
                />
              </div>
              <Text
                className="leading-[150.00%] max-w-[648px] md:max-w-full text-blue_gray-900 text-xl"
                size="txtOutfitMedium20"
              >
                At Little Learners Academy, our mission is to inspire a passion
                for learning and empower young minds to become confident,
                compassionate, and creative individuals. We strive to create a
                safe and inclusive space where children thrive academically,
                socially, and emotionally, setting the stage for a successful
                educational journey.
              </Text>
            </div>
            <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start p-[60px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex flex-row font-raleway sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-auto"
                  size="txtRalewayRomanBold48"
                >
                  Vision
                </Text>
                <Img
                  className="h-20 w-[106px]"
                  src="images/img_icon_gray_900_80x106.svg"
                  alt="icon"
                />
              </div>
              <Text
                className="leading-[150.00%] max-w-[648px] md:max-w-full text-blue_gray-900 text-xl"
                size="txtOutfitMedium20"
              >
                Our vision is to be a beacon of educational excellence, where
                children are encouraged to explore, discover, and express their
                unique talents. We aim to foster a generation of lifelong
                learners equipped with critical thinking, empathy, and a deep
                appreciation for diversity.
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col font-raleway md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[187px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Our Achievements
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our Awards and Recognitions
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1196px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              <>
                Little Learners Academy takes pride in our commitment to
                delivering high-quality education and outstanding student
                experiences. We are honored to have received various awards and
                recognitions for our dedication to early childhood education.
                These accolades reflect our team&#39;s relentless efforts in
                creating an exceptional learning environment for our students.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="md:h-[402px] h-[437px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_3.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-center justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="leading-[130.00%] max-w-[405px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01"
                    size="txtRalewayRomanBold28"
                  >
                    Outstanding Early Childhood Education Awar
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Presented by the National Association for the Education of
                      Young Children (NAEYC) in recognition of Little Learners
                      Academy&#39;s commitment to delivering exceptional early
                      childhood education and fostering a nurturing learning
                      environment.
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[402px] h-[437px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_4.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-center justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="leading-[130.00%] max-w-[405px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01"
                    size="txtRalewayRomanBold28"
                  >
                    Innovative STEAM Education Award
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Awarded by the Education Excellence Association for our
                    pioneering efforts in introducing innovative STEAM (Science,
                    Technology, Engineering, Arts, and Mathematics) programs
                    that ignite creativity and critical thinking in young
                    learners.
                  </Text>
                </div>
              </div>
              <div className="sm:h-96 md:h-[402px] h-[437px] relative w-full">
                <Img
                  className="absolute h-[74px] sm:hidden left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_5.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col sm:gap-0.5 gap-5 inset-x-[0] items-center justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="leading-[130.00%] max-w-[405px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01"
                    size="txtRalewayRomanBold28"
                  >
                    Environmental Stewardship Award
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Received from the Green Earth Society for our dedication
                      to environmental education, sustainable practices, and
                      fostering a love for nature in our students.
                      <br />
                      <br />
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-row gap-[50px] items-center justify-start w-full">
              <Text
                className="flex-1 text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                size="txtRalewayRomanBold22"
              >
                8 More Awards
              </Text>
              <Img
                className="h-[58px] w-[136px]"
                src="images/img_buttonscontainer_white_a700.svg"
                alt="buttonscontaine"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[236px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Our Progressive Journey
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our History
            </Text>
            <Text
              className="leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              Founded with a passion for early education in 2005, our
              kindergarten school boasts a rich history of empowering young
              learners to reach their potential through innovative teaching
              methods and a supportive learning environment
            </Text>
          </div>
          <div className="bg-white-A700 border-2 border-gray-900 border-solid h-[1192px] md:h-[1664px] sm:h-[892px] p-[150px] md:px-10 sm:px-5 relative rounded-[12px] shadow-bs1 w-full">
            <Img
              className="h-full max-h-[892px] my-auto"
              src="images/img_abstractdesign_deep_orange_200.svg"
              alt="container"
            />
            <List
              className="absolute flex flex-1 flex-col gap-[100px] md:grid inset-[0] items-start sm:justify-start sm:m-[] m-auto sm:mr-[] w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-center justify-start my-0 w-full">
                <div className="h-[148px] relative w-[448px] sm:w-full">
                  <Img
                    className="absolute h-5 sm:hidden inset-y-[0] left-[0] my-auto w-[95px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid flex flex-row gap-5 sm:h-4/5 h-full inset-y-[0] items-center justify-center my-auto md:px-10 sm:px-5 px-[50px] py-[30px] right-[0] rounded-[12px] shadow-bs1 w-auto">
                    <Img
                      className="h-[87px] w-[87px]"
                      src="images/img_close_red_100.svg"
                      alt="close_One"
                    />
                    <Text
                      className="md:text-5xl text-[68px] text-gray-900_01 w-auto"
                      size="txtRalewayRomanBold68"
                    >
                      2023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-center w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Resilience and Future Horizons
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[797px] md:max-w-full sm:text-[15px] text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    Adapting to new challenges, we remained committed to our
                    mission of providing an exceptional early education. Looking
                    ahead with optimism, we envision a future filled with
                    boundless possibilities as we continue shaping the leaders
                    and thinkers of tomorrow.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-center justify-start my-0 w-full">
                <div className="h-[148px] relative w-[443px] sm:w-full">
                  <Img
                    className="absolute h-5 inset-y-[0] left-[0] my-auto w-[95px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid flex flex-row gap-5 sm:h-20 h-full inset-y-[0] items-center justify-center my-auto md:px-10 sm:px-5 px-[50px] py-[30px] right-[0] rounded-[12px] shadow-bs1 w-auto">
                    <Img
                      className="h-[87px] w-[87px]"
                      src="images/img_close_red_100.svg"
                      alt="close_One"
                    />
                    <Text
                      className="md:text-5xl text-[68px] text-gray-900_01 w-auto"
                      size="txtRalewayRomanBold68"
                    >
                      2017
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-center w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Innovation and Technology
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[802px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    <>
                      Innovation became the driving force behind our
                      kindergarten&#39;s progress from 2016 to 2020. Embracing
                      the latest educational technologies, we crafted engaging
                      and interactive learning experiences for our students.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-center justify-start my-0 w-full">
                <div className="h-[148px] relative w-[444px] sm:w-full">
                  <Img
                    className="absolute h-5 md:hidden inset-y-[0] left-[0] my-auto w-[95px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid flex flex-row gap-5 sm:h-20 h-full inset-y-[0] items-center justify-center my-auto md:px-10 sm:px-5 px-[50px] py-[30px] right-[0] rounded-[12px] shadow-bs1 w-auto">
                    <Img
                      className="h-[87px] w-[87px]"
                      src="images/img_close_red_100.svg"
                      alt="close_One"
                    />
                    <Text
                      className="md:text-5xl text-[68px] text-gray-900_01 w-auto"
                      size="txtRalewayRomanBold68"
                    >
                      2012
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-center w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Expansion and Recognition
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[801px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    These years marked as a period of expansion and recognition
                    for our school. As we extended our facilities and enhanced
                    our curriculum, we received accolades for our commitment to
                    quality education and innovative teaching methodologies.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[50px] items-center justify-start my-0 w-full">
                <div className="h-[148px] relative w-[451px] sm:w-full">
                  <Img
                    className="absolute h-5 inset-y-[0] left-[0] my-auto w-[95px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid flex flex-row gap-5 sm:h-20 h-full inset-y-[0] items-center justify-center my-auto md:px-10 sm:px-5 px-[50px] py-[30px] right-[0] rounded-[12px] shadow-bs1 w-auto">
                    <Img
                      className="h-[87px] w-[87px]"
                      src="images/img_close_red_100.svg"
                      alt="close_One"
                    />
                    <Text
                      className="md:text-5xl text-[68px] text-gray-900_01 w-auto"
                      size="txtRalewayRomanBold68"
                    >
                      2005
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-center w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Inception and Growth
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[794px] md:max-w-full sm:text-[15px] text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    Established in 2005, our kindergarten school began its
                    journey with a vision to provide a nurturing space for young
                    minds to explore, learn, and grow. Over the next five years,
                    we witnessed significant growth.
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-raleway md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[250px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit sm:m-[] min-w-[269px] sm:mt-5 text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Our Teachers With Experties
            </Button>
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full"
              size="txtRalewayRomanBold58"
            >
              Our Team Members
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1096px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              At Little Learners Academy, our teaching team is the heart of our
              educational journey. We take great pride in employing highly
              qualified and passionate educators who possess a deep
              understanding of early childhood development. Our teachers create
              a warm and engaging atmosphere, encouraging curiosity, instilling
              confidence, and fostering a love for learning.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_100x100.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Ms. Sarah Anderson
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtOutfitSemiBold24"
                  >
                    <>
                      Qualification:Bachelor&#39;s Degree in Early Childhood
                      Education
                    </>
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    Ms. Sarah is a passionate educator with over 10 years of
                    experience in guiding young minds. Her warm and nurturing
                    approach creates a welcoming classroom environment where
                    children feel comfortable to explore and learn.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_1.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Mr. David Roberts
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    <>
                      Qualification: Master&#39;s Degree in Elementary Education
                    </>
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    With a strong background in elementary education, Mr. David
                    brings a creative and interactive teaching style to his
                    classroom. His enthusiasm for learning inspires students to
                    ask questions and think critically.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Ms. Emily Hernandez
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    Qualification: Diploma in Child Psychology
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    <>
                      Ms. Emily&#39;s expertise in child psychology enables her
                      to understand each child&#39;s unique needs and provide
                      individualized support. Her caring nature fosters a strong
                      sense of belonging and confidence in her students.
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_3.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Mr. Michael Turner
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    <>
                      Qualification: Bachelor&#39;s Degree in Physical Education
                    </>
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    <>
                      Mr. Michael&#39;s passion for physical fitness and sports
                      shines through in his energetic classes. He encourages
                      students to stay active, promoting teamwork and a healthy
                      lifestyle.
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_4.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Ms. Jessica Lee
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    <>Qualification: Master&#39;s Degree in Special Education</>
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    <>
                      Ms. Jessica&#39;s specialization in special education
                      allows her to create an inclusive and supportive learning
                      environment for all students. She is dedicated to helping
                      every child reach their full potential.
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                      src="images/img_image_5.png"
                      alt="image"
                    />
                    <Text
                      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-auto"
                      size="txtRalewayRomanExtraBold30"
                    >
                      Mr. William Parker
                    </Text>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center outline outline-[2px] outline-gray-900 w-14"
                    shape="round"
                    color="red_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_icon_gray_900_56x56.svg"
                      alt="icon"
                    />
                  </Button>
                </div>
                <div className="bg-red-50 border-2 border-gray-900 border-solid flex flex-col font-outfit gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtOutfitSemiBold24"
                  >
                    <>Qualification: Bachelor&#39;s Degree in Fine Arts</>
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[613px] md:max-w-full text-blue_gray-900 text-xl"
                    size="txtOutfitMedium20"
                  >
                    <>
                      Mr. William&#39;s background in fine arts brings
                      creativity and imagination to his classroom. Through art
                      projects and activities, he nurtures the artistic
                      expression and self-confidence of his students.
                    </>
                  </Text>
                </div>
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
                    className="common-pointer text-gray-900 text-xl w-full"
                    size="txtOutfitSemiBold20"
                    onClick={() => navigate("/homepagedesktop")}
                  >
                    Home
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="common-pointer text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                      onClick={() => navigate("/studentlifepagedesktop")}
                    >
                      Features
                    </Text>
                    <Text
                      className="common-pointer text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                      onClick={() => navigate("/aboutpagedesktop")}
                    >
                      Our Testimonials
                    </Text>
                    <Text
                      className="common-pointer text-blue_gray-900 text-xl w-full"
                      size="txtOutfitMedium20"
                      onClick={() => navigate("/contactpagedesktop")}
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
                  alt="buttonscontaine_One"
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

export default AboutPageDesktopPage;
