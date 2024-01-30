import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";

const StudentLifePageDesktopPage = () => {
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
                  className="border-2 border-gray-900 border-solid cursor-pointer font-medium font-outfit min-w-[216px] text-center text-lg"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Enriching Student Life
                </Button>
                <Text
                  className="leading-[130.00%] max-w-[765px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01"
                  size="txtRalewayRomanBold48"
                >
                  Embracing Learning with Discovery and Joy
                </Text>
              </div>
            </div>
            <Text
              className="flex-1 leading-[150.00%] md:mt-0 mt-[167px] text-blue_gray-900 text-xl"
              size="txtOutfitMedium20"
            >
              <>
                Welcome to our Student Life page, where the magic of childhood
                comes alive through the enriching experiences and adventures
                that our students embark on each day. At our kindergarten
                school, we believe that learning goes beyond textbooks, and we
                strive to create a holistic and engaging environment that
                nurtures every aspect of a child&#39;s development.
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1592px] mt-[200px] mx-auto md:px-5 w-full">
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
              Extracurricular Activities
            </Text>
            <Text
              className="leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              At Little Learners Academy, we believe in nurturing well-rounded
              individuals. Our extracurricular activities offer a diverse range
              of experiences that complement our academic curriculum and
              encourage students to explore their interests and passions. We
              offer a wide array of extracurricular activities, including
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="sm:h-[263px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] mt-[-70px] top-[0]"
                  src="images/img_container_5.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[30px] mx-auto sm:p-[] pb-[50px] sm:pb-[] sm:pt-2.5 pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Sports and Athletics
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Students can participate in various sports, from soccer and
                    basketball to gymnastics and yoga. Sports help promote
                    teamwork, physical fitness, and a sense of discipline.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[261px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] mt-[-70px] top-[0]"
                  src="images/img_container_8.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[] mx-auto sm:p-[] pb-[50px] sm:pb-[] sm:pt-2 pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Art and Creativity
                  </Text>
                  <Text
                    className="leading-[150.00%] sm:m-[] max-w-[404px] md:max-w-full sm:mt-[30px] text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Our art classes and creative workshops provide a platform
                    for students to express their creativity through painting,
                    drawing, and other artistic forms.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[293px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] mt-[-70px] top-[0]"
                  src="images/img_container_11.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[30px] mx-auto sm:p-[] sm:pb-2.5 pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Music and Performing Arts
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Students can discover their musical talents through singing,
                    playing musical instruments, and participating in drama and
                    theater performances.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[293px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] mt-[-30px] top-[0]"
                  src="images/img_container_7.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[30px] mx-auto sm:p-[] sm:pb-2.5 pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Language Clubs
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Language clubs offer an opportunity for students to immerse
                    themselves in different languages and cultures, fostering
                    global awareness.
                  </Text>
                </div>
              </div>
              <div className="sm:h-[293px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] mt-[-30px] top-[0]"
                  src="images/img_container_12.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[30px] mx-auto sm:p-[] sm:pb-2.5 pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Science Club
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      The science club allows young scientists to explore the
                      wonders of science through fun experiments and hands-on
                      learning.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="sm:h-[293px] md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_13.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end sm:m-[] sm:mt-[30px] mx-auto sm:p-[] sm:pb-2.5 pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Cooking and Culinary Arts
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Cooking classes introduce students to the joys of
                      preparing and tasting delicious and healthy meals.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
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
              Events & Celebrations
            </Text>
            <Text
              className="leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              At Little Learners Academy, we celebrate every milestone and
              create cherished memories for our students. Throughout the year,
              we host a variety of events and celebrations that bring the entire
              school community together. Some of our memorable events include
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-[93px] inset-[0] justify-center m-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_30.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Annual Sports Day
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      A day filled with friendly competition, team spirit, and
                      sportsmanship.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid bottom-[0] h-[93px] inset-x-[0] mx-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_31.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Cultural Festivals
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    Celebrations of diverse cultural festivals, promoting
                    cultural exchange and appreciation.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-[93px] inset-[0] justify-center m-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_32.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Art Exhibitions
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      Showcasing our students&#39; artistic talents through
                      exhibitions and displays.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-[93px] inset-[0] justify-center m-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_33.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Science Fair
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    <>
                      A platform for budding scientists to present their
                      innovative projects and experiments.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid bottom-[0] h-[93px] inset-x-[0] mx-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_34.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    International Day
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    A vibrant celebration of our diverse community, embracing
                    cultures from around the world.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-[93px] inset-[0] justify-center m-auto w-full"></div>
                  <Img
                    className="h-full m-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_35.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full"
                    size="txtRalewayRomanBold28"
                  >
                    Graduation Ceremony
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl"
                    size="txtOutfitMedium20Gray800"
                  >
                    A significant milestone as our Kindergarten students prepare
                    to embark on their academic journey.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
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
              Student Support
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1196px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtOutfitMedium20"
            >
              At Little Learners Academy, we are committed to providing a
              supportive and nurturing environment that meets the unique needs
              of each student. Our student support services include
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="sm:h-[233px] md:h-[273px] h-[311px] relative w-full">
              <Img
                className="absolute h-[74px] left-[0] max-h-[74px] mt-[-20px] top-[0]"
                src="images/img_container_14.svg"
                alt="container"
              />
              <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto sm:p-[] sm:pb-2.5 pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                  size="txtRalewayRomanBold28"
                >
                  Counseling
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                  size="txtOutfitMedium20Gray800"
                >
                  Professional counselors offer guidance and support to
                  students, addressing their emotional and social well-being.
                </Text>
              </div>
            </div>
            <div className="md:h-[273px] h-[311px] relative w-full">
              <Img
                className="absolute h-[74px] left-[0] max-h-[74px] mt-[-60px] top-[0]"
                src="images/img_container_6.svg"
                alt="container"
              />
              <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                  size="txtRalewayRomanBold28"
                >
                  Learning Support
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                  size="txtOutfitMedium20Gray800"
                >
                  Our educators provide additional assistance to students who
                  may require extra support in their academic journey.
                </Text>
              </div>
            </div>
            <div className="md:h-[273px] sm:h-[293px] h-[311px] relative w-full">
              <Img
                className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                src="images/img_container_15.svg"
                alt="container"
              />
              <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-center justify-end sm:m-[] sm:mt-5 mx-auto sm:p-[] pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] sm:py-2.5 rounded-[12px] shadow-bs1 w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full"
                  size="txtRalewayRomanBold28"
                >
                  Parent-Teacher Collaboration
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] md:max-w-full text-gray-800 text-xl"
                  size="txtOutfitMedium20Gray800"
                >
                  <>
                    We foster a strong partnership with parents to ensure
                    seamless communication and mutual support in a child&#39;s
                    development.
                  </>
                </Text>
              </div>
            </div>
          </List>
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

export default StudentLifePageDesktopPage;
