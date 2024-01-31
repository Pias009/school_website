import React, { useState } from 'react';
import { Text, Button, Img } from 'components';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const cardsData = [
    {
        name: 'David K',
        rating: 5 / 1,
        testimonial:
            'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
    },
    {
        name: 'Emily L',
        rating: 5 / 2,
        testimonial:
            "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
        name: 'Boble  B',
        rating: 5 / 2,
        testimonial:
            'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
    },
    {
        name: 'Sunny Leon',
        rating: 5 / 5,
        testimonial:
            "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    // Add more card data as needed
];

const Slider = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex < cardsData.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrevClick = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : cardsData.length - 1
        );
    };

    return (
        <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start w-full">
            <Button
                className="border-2 border-blue_gray-900 border-solid flex h-[58px] items-center justify-center w-[58px]"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
                onClick={handlePrevClick}
            >
                <h2><FaChevronCircleRight />
                </h2>
            </Button>

            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className={`bg-white-A700 border-2 sm:text-sm text-xl  sm:leading-none border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-[400px] sm:w-auto ${index === currentCardIndex ? 'visible' : 'hidden'
                        }`}
                >
                    {card.name}
                    <Text
                        className="text-2xl md:text-[22px] sm:text-sm sm:leading-none text-blue_gray-900 text-center  w-full"
                        size="txtOutfitSemiBold24"
                    >
                        {card.testimonial}
                    </Text>
                    <div>
                        Rating: {card.rating}
                    </div>
                </div>

            ))}

            <Button
                className="border-2 border-blue_gray-900 border-solid flex h-[58px] items-center justify-center w-[58px]"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
                onClick={handleNextClick}
            >
                <h2>
                    <FaChevronCircleLeft />
                </h2>
            </Button>
        </div>
    );
};

export default Slider;
