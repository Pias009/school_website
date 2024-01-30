import React from "react";
import { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import Header from "../../components/Header";
const ButtonF = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    window.location.href = '/aboutpagedesktop# Library';
  };
  const handleButtonClick2 = (buttonName) => {
    setActiveButton(buttonName);

    window.location.href = '/resourcespagedesktop#he';
  };
  const handleButtonClick3 = (buttonName) => {
    setActiveButton(buttonName);

    window.location.href = '/resourcespagedesktop#reports';
  };
}
const AcademicsPageDesktopPage = () => {


  return (

    <>
      <div className="bg-red-50 flex flex-col font-outfit items-center justify-start mx-auto p-[18px] w-full">
        <Header className="flex flex-col gap-3.5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-row items-center justify-start max-w-[1820px] mt-[60px] mx-auto md:px-5 px-[120px] py-[150px] rounded-[12px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-[50px] items-end justify-between w-full">
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
                    <Img className="h-[49px] w-[49px]" src="images/img_contrast.svg" alt="contrast_Two" />
                    <Img className="h-[49px] w-[50px]" src="images/img_contrast.svg" alt="contrast_Three" />
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
                    <Img className="h-[50px] w-[49px]" src="images/img_contrast.svg" alt="contrast_Six" />
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
                  <Img className="h-[50px] w-[49px]" src="images/img_contrast.svg" alt="contrast_Nine" />
                </div>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start ml-auto mt-auto relative w-full">
                <Button
                  className="border-2 border-gray-900 border-solid cursor-pointer font-medium font-outfit min-w-[128px] text-center text-lg"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Academics
                </Button>
                <Text className="font-bold font-raleway leading-[130.00%] max-w-[765px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01">
                  Nurturing Young Minds for Success
                </Text>
              </div>
            </div>
            <Text className="flex-1 font-medium leading-[150.00%] mb-[3px] md:mt-0 mt-[152px] text-blue_gray-900 text-xl">
              <>
                Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating
                educational experience for your child. Our kindergarten school&#39;s academic program is thoughtfully
                designed to foster a love for learning while building a strong foundation of essential skills and
                knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully
                crafted to spark curiosity and encourage active exploration.
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
            <Text className="font-bold font-raleway sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full">
              Our Special Features
            </Text>
            <Text className="font-medium font-outfit leading-[150.00%] max-w-[992px] md:max-w-full text-blue_gray-900 text-center text-xl">
              Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning
              that lasts a lifetime. Join us as we embark on an exciting educational journey together!
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="md:h-[333px] h-[371px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_6.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    Thematic Learning
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    <>
                      Our curriculum is centered around engaging themes that capture children&#39;s imaginations. Each
                      theme integrates multiple subjects, making learning enjoyable and relevant.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[333px] h-[371px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_4.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    STEAM Education
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that
                    promote hands-on exploration, critical thinking, and problem-solving skills.
                  </Text>
                </div>
              </div>
              <div className="md:h-[333px] h-[371px] relative w-full">
                <Img
                  className="absolute h-[74px] sm:hidden left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_7.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    Language Immersion
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    <>
                      Through language immersion programs, children have the opportunity to learn a second language,
                      enhancing cognitive development and global awareness.
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_8.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    Art and Creativity
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression,
                    creativity, and the appreciation of various art forms.
                  </Text>
                </div>
              </div>
              <div className="md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_9.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    Outdoor Education
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    Our expansive outdoor learning spaces provide a stimulating environment for children to explore
                    nature, fostering a connection with the environment.
                  </Text>
                </div>
              </div>
              <div className="md:h-[303px] h-[341px] relative w-full">
                <Img
                  className="absolute h-[74px] left-[0] max-h-[74px] top-[0]"
                  src="images/img_container_10.svg"
                  alt="container"
                />
                <div className="absolute bg-white-A700 border-2 border-gray-900 border-solid bottom-[0] flex flex-1 flex-col gap-5 inset-x-[0] items-start justify-end mx-auto pb-[50px] pt-20 md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-full">
                    Play-Based Learning
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[404px] md:max-w-full text-gray-800 text-xl">
                    Play is an integral part of early childhood education. Our play-based approach enhances social
                    skills, emotional development, and imaginative thinking.
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
            <Text className="font-bold font-raleway sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full">
              What Students Learn
            </Text>
            <Text className="font-medium font-outfit leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl">
              At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential
              skills for their future success. Our academic programs cover a wide range of subjects, allowing students
              to develop a strong foundation and discover their interests. Some key areas of learning include
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_304x398.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Language Arts
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Reading, writing, storytelling, and communication skills.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_6.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Mathematics
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Number sense, basic operations, problem-solving, and logic.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_7.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Science
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Exploring the natural world through hands-on experiments and investigations.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_8.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Social Studies
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Cultivating an understanding of diverse cultures and communities.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 hidden inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="flex h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_9.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Arts and Crafts
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Encouraging creativity through various art forms and crafts.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div className="relative w-full">
                  <div className="absolute bg-deep_orange-50 border-2 border-gray-900 border-solid h-96 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[32%]"></div>
                  <Img
                    className="h-full mb-[30px] mt-auto mx-auto object-cover relative rounded-[12px] w-[398px]"
                    src="images/img_image_10.png"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text className="font-bold font-raleway sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900_01 w-full">
                    Physical Education
                  </Text>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[398px] md:max-w-full text-center text-gray-800 text-xl">
                    Promoting physical fitness, coordination, and teamwork.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-full">
            <Button
              className="border-2 border-black-900 border-solid cursor-pointer font-medium font-outfit min-w-[134px] text-center text-lg"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Our Gallery
            </Button>
            <Text className="font-bold font-raleway sm:text-[44px] md:text-[50px] text-[58px] text-center text-gray-900_01 w-full">
              Our Rooms Gallery
            </Text>
            <Text className="font-medium font-outfit leading-[150.00%] max-w-[996px] md:max-w-full text-blue_gray-900 text-center text-xl">
              Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable
              experiences at our kindergarten school.
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-auto md:w-full">
              <Button
                className="border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[65px] text-center text-xl"
                shape="round"
                color="deep_orange_50"
                size="sm"
                variant="fill"
              >
                All
              </Button>
              <Button
                className="!text-gray-900_01 border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[146px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Classrooms
              </Button>
              <Button
                className="!text-gray-900_01 border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[107px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
                onClick={() => handleButtonClick1
                  (' Library')}

              >

                Library
              </Button>
              <Button
                className="!text-gray-900_01 border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[147px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Science Lab
              </Button>
              <Button
                className="!text-gray-900_01 border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[170px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Computer Lab
              </Button>
              <Button
                className="!text-gray-900_01 border-2 border-blue_gray-900 border-solid cursor-pointer font-semibold min-w-[264px] text-center text-xl"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Garden and Nature Area
              </Button>
            </div>
            <List className="flex flex-col gap-[150px] items-center w-full" orientation="vertical">
              <div className="flex flex-col relative w-full">
                <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mx-auto md:px-10 sm:px-5 px-[50px] w-full">
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_304x344.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_11.png"
                    alt="image_One"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_12.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_13.png"
                    alt="image_Three"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-10 sm:h-[] items-center justify-end mt-5 mx-auto pb-[50px] sm:pt-2.5 pt-[200px] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full z-[1]">
                  <div className="flex sm:flex-col flex-row font-raleway gap-[50px] items-end justify-start w-full">
                    <Text className="flex-1 font-bold sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto">
                      Classrooms
                    </Text>
                    <Img
                      className="h-[58px] w-[136px]"
                      src="images/img_buttonscontainer_white_a700.svg"
                      alt="buttonscontaine"
                    />
                  </div>
                  <Text className="font-medium font-outfit leading-[150.00%] max-w-[1496px] md:max-w-full text-[22px] text-gray-800 sm:text-lg md:text-xl">
                    Our well-equipped classrooms are designed to provide a nurturing and stimulating learning
                    environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and
                    engagement.
                  </Text>
                </div>
              </div>

              <div id="Library" className="flex flex-col relative w-full">
                <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mx-auto md:px-10 sm:px-5 px-[50px] w-full">
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_14.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_15.png"
                    alt="image_One"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_16.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_17.png"
                    alt="image_Three"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-end mt-5 mx-auto sm:p-[] pb-[50px] sm:pt-5 pt-[200px] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full z-[1]">
                  <div className="flex flex-row font-raleway gap-[50px] items-end justify-start w-full">
                    <Text className="flex-1 font-bold sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto">
                      Library
                    </Text>
                    <Img
                      className="h-[58px] hidden w-[136px]"
                      src="images/img_buttonscontainer_white_a700.svg"
                      alt="buttonscontaine"
                    />
                  </div>
                  <Text className="font-medium font-outfit text-[22px] text-gray-800 sm:text-lg md:text-xl w-full">
                    <>
                      Our expansive library is a treasure trove of books, fostering a love for reading and supporting
                      students&#39; literacy development.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mx-auto md:px-10 sm:px-5 px-[50px] w-full">
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_18.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_19.png"
                    alt="image_One"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_20.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_21.png"
                    alt="image_Three"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-end mt-5 mx-auto sm:p-[] pb-[50px] sm:pt-5 pt-[200px] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full z-[1]">
                  <div className="flex sm:flex-col flex-row font-raleway gap-[50px] items-end justify-start w-full">
                    <Text className="flex-1 font-bold sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto">
                      Science Lab
                    </Text>
                    <Img
                      className="h-[58px] hidden w-[136px]"
                      src="images/img_buttonscontainer_white_a700.svg"
                      alt="buttonscontaine"
                    />
                  </div>
                  <Text className="font-medium font-outfit text-[22px] text-gray-800 sm:text-lg md:text-xl w-full">
                    Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a
                    fun and interactive way.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mx-auto md:px-10 sm:px-5 px-[50px] w-full">
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_22.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_23.png"
                    alt="image_One"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_24.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_25.png"
                    alt="image_Three"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-end mt-5 mx-auto sm:p-[] pb-[50px] sm:pt-5 pt-[200px] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full z-[1]">
                  <div className="flex sm:flex-col flex-row font-raleway gap-[50px] items-end justify-start w-full">
                    <Text className="flex-1 font-bold sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto">
                      Computer Lab
                    </Text>
                    <Img
                      className="h-[58px] hidden w-[136px]"
                      src="images/img_buttonscontainer_white_a700.svg"
                      alt="buttonscontaine"
                    />
                  </div>
                  <Text className="font-medium font-outfit text-[22px] text-gray-800 sm:text-lg md:text-xl w-full">
                    <>
                      Equipped with age-appropriate technology, the computer lab enhances students&#39; digital literacy
                      and computational skills
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <div className="flex-1 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mx-auto md:px-10 sm:px-5 px-[50px] w-full">
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_26.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_27.png"
                    alt="image_One"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_28.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none h-[304px] sm:h-auto max-h-[304px] object-cover rounded-[12px]"
                    src="images/img_image_29.png"
                    alt="image_Three"
                  />
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-end mt-5 mx-auto sm:p-[] pb-[50px] sm:pt-5 pt-[200px] md:px-10 sm:px-5 px-[50px] rounded-[12px] shadow-bs1 w-full z-[1]">
                  <div className="flex md:flex-col flex-row font-raleway gap-[50px] items-end justify-start w-full">
                    <Text className="flex-1 font-bold sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto">
                      Garden and Nature Area
                    </Text>
                    <Img
                      className="h-[58px] hidden w-[136px]"
                      src="images/img_buttonscontainer_white_a700.svg"
                      alt="buttonscontaine"
                    />
                  </div>
                  <Text className="font-medium font-outfit text-[22px] text-gray-800 sm:text-lg md:text-xl w-full">
                    Our garden and nature area offer an opportunity for children to connect with nature and learn about
                    plants and the environment.
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col items-start justify-start sm:m-[] max-w-[1820px] mb-8 mt-[200px] mx-auto sm:p-[] pb-10 pt-[100px] sm:pt-[] md:px-5 px-[113px] rounded-[12px] shadow-bs1 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
              <div className="flex sm:flex-1 flex-col gap-[50px] items-start justify-start w-[519px] sm:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img className="h-[50px] w-[228px]" src="images/img_logo.svg" alt="logo_One" />
                  <Text className="font-medium leading-[150.00%] max-w-[519px] md:max-w-full text-gray-800 text-xl">
                    We believe in the power of play to foster creativity, problem-solving skills, and imagination.
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
                    <Text className="flex-1 font-medium text-gray-900 text-xl w-auto">hello@littlelearners.com</Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <Button
                      className="flex h-10 items-center justify-center outline outline-[2px] outline-gray-900 rounded-md w-10"
                      shape="round"
                      color="red_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img className="h-[21px]" src="images/img_call.svg" alt="call" />
                    </Button>
                    <Text className="flex-1 font-medium text-gray-900 text-xl w-auto">+91 91813 23 2309</Text>
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
                    <Text className="flex-1 font-medium text-gray-900 text-xl w-auto">Somewhere in the World</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Text className="font-semibold text-gray-900 text-xl w-full">Home</Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Features</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Our Testimonials</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">FAQ</Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Text className="font-semibold text-gray-900 text-xl w-full">About Us</Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Our Mission</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Our Vission</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Awards and Recognitions</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">History</Text>
                    <Text className="font-medium text-blue_gray-900 text-xl w-full">Teachers</Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text className="font-semibold text-gray-900 text-xl w-full">Academics</Text>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text className="font-medium text-blue_gray-900 text-xl w-full">Special Features</Text>
                      <Text className="font-medium text-blue_gray-900 text-xl w-full">Gallery</Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text className="font-semibold text-gray-900 text-xl w-full">Contact Us</Text>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text className="font-medium text-blue_gray-900 text-xl w-full">Information</Text>
                      <Text className="font-medium text-blue_gray-900 text-xl w-full">Map & Direction</Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Line className="bg-gray-900 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <a href="javascript:" className="font-medium text-blue_gray-900 text-lg w-auto">
                    <Text>Terms of Service</Text>
                  </a>
                  <Line className="bg-gray-900 sm:h-0.5 h-[27px] w-0.5 sm:w-full" />
                  <a href="javascript:" className="font-medium text-blue_gray-900 text-lg w-auto">
                    <Text>Privacy Policy</Text>
                  </a>
                  <Line className="bg-gray-900 sm:h-0.5 h-[27px] w-0.5 sm:w-full" />
                  <Text className="font-medium text-blue_gray-900 text-lg w-auto">Cookie Policy</Text>
                </div>
                <Img className="h-14 w-[196px]" src="images/img_buttonscontainer.svg" alt="buttonscontaine" />
              </div>
              <Line className="bg-gray-900 h-px w-full" />
              <Text className="font-medium text-center text-gray-700 text-lg w-full">
                Copyright © [2023] Little Learners Academy. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicsPageDesktopPage;