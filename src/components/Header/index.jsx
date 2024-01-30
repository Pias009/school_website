import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import ResponsiveNavbar from "./sm";

const Header = (props) => {
  const navigate = useNavigate();


  return (
    <>
      <header className={props.className}>
        <div className="bg-red-100 border-2 border-gray-900 border-solid flex md:flex-col flex-row gap-3.5 sm:h-20 items-center justify-center py-3.5 rounded-lg w-full">
          <Img
            className="sm:flex-1 h-[58px] md:h-auto object-cover w-[215px] sm:w-full"
            src="images/img_abstractdesign.png"
            alt="abstractdesign"
          />
          <Img
            className="sm:flex-1 h-[45px] md:h-auto object-cover w-[72px] sm:w-full"
            src="images/img_settings_gray_900_45x72.png"
            alt="settings"
          />
          <Text
            className="text-gray-900 text-xl w-auto"
            size="txtOutfitMedium20Gray900"
          >
            Admission is Open, Grab your seat now
          </Text>
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_icon.svg"
            alt="icon"
          />
          <Img
            className="h-[29px] w-[39px]"
            src="images/img_settings_gray_900.svg"
            alt="settings_One"
          />
          <Img
            className="sm:flex-1 h-[58px] md:h-auto object-cover w-56 sm:w-full"
            src="images/img_abstractdesign_deep_orange_300.png"
            alt="abstractdesign_One"
          />
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 sm:h-[] items-center justify-between outline outline-[2px] outline-gray-900 rounded-[12px] w-full">
          <div className="bg-deep_orange-300_01 flex flex-col items-center justify-start outline outline-gray-900 sm:px-5 px-6 py-5 w-auto">
            <Img
              className="h-10 w-[182px]"
              src="images/img_logo.svg"
              alt="logo"
            />
          </div>
          <div className="bg-white-A700 sm:hidden flex md:hidden flex-row md:gap-5 h-20 md:h-auto items-center justify-start">
            <Button
              className="common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] text-center text-xl"
              onClick={() => navigate("/homepagedesktop")}
              shape="square"
              color="gray_900"
              size="lg"
              variant="outline"
            >
              Home
            </Button>
            <Button
              className="common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] outline outline-gray-900 text-center text-xl"
              onClick={() => navigate("/aboutpagedesktop")}
              shape="square"
              color="deep_orange_50"
              size="lg"
              variant="fill"
            >
              About Us
            </Button>
            <Button
              className="common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] text-center text-xl"
              onClick={() => navigate("/academicspagedesktop")}
              shape="square"
              color="gray_900"
              size="lg"
              variant="outline"
            >
              Academics
            </Button>
            <Button
              className="common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] text-center text-xl"
              onClick={() => navigate("/admissionpagedesktop")}
              shape="square"
              color="gray_900"
              size="lg"
              variant="outline"
            >
              Admissions
            </Button>
            <Button
              className="common-pointer !text-gray-900 cursor-pointer font-medium font-outfit h-20 sm:h-[31px] text-center text-xl"
              onClick={() => navigate("/studentlifepagedesktop")}
              shape="square"
              color="gray_900"
              size="lg"
              variant="outline"
            >
              Student Life
            </Button>
            <Button
              className="cursor-pointer font-medium font-outfit h-20 sm:h-[31px] outline outline-gray-900 text-center text-xl"
              shape="square"
              color="deep_orange_A100"
              size="lg"
              variant="fill"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="hidden sm:block md:block md:visible lg:hidden">
          <ResponsiveNavbar />
        </div>

      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;