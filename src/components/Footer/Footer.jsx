import { Img, Text, Button, List, Line } from 'components'
import { useNavigate } from "react-router-dom";
function Footer() {
    function handleNavigate() {
        const win = window.open(
            "https://www.facebook.com/tonyfi.pias.71",
            "_blank",
        );
        win.focus();
    }
    const navigate = useNavigate();
    return (
        <>
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
                                    className="leading-[150.00%] max-w-[519px] md:max-w-full text-gray-800 text-xl sm:text-[13px] sm:leading-none"
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
                                        className="text-gray-900 text-xl w-full "
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
        </>
    )
}

export default Footer