import React, { useState } from 'react';
import { Text, Img, RatingBar } from 'components'; // Update with the correct path

const generateTestData = () => {
    // Generate more data as needed
    return [
        { id: 1, name: 'David K', rating: 5, content: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.' },
        { id: 2, name: 'Alice Mm', rating: 4, content: 'My son has made remarkable progress since joining Little Learners Academy. The teachers are dedicated, and the curriculum is engaging.' },
        { id: 3, name: 'David Kkk', rating: 5, content: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.' },
        { id: 4, name: 'Alice Mmmm', rating: 4, content: 'My son has made remarkable progress since joining Little Learners Academy. The teachers are dedicated, and the curriculum is engaging.' },
        { id: 5, name: 'David Km', rating: 5, content: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.' },
        { id: 6, name: 'Alice Mh', rating: 4, content: 'My son has made remarkable progress since joining Little Learners Academy. The teachers are dedicated, and the curriculum is engaging.' },
    ];
};

const TestimonialSlider = () => {
    const [testimonials, setTestimonials] = useState(generateTestData());
    const [visibleTestimonials, setVisibleTestimonials] = useState(3);

    const moveSlider = (direction) => {
        const container = document.getElementById('slider-content');
        const items = document.querySelectorAll('.slider-item');
        const itemWidth = items[0].offsetWidth;

        if (direction === 'left') {
            container.style.transform = `translateX(${itemWidth}px)`;
            container.insertBefore(items[items.length - 1], items[0]);
        } else {
            container.style.transform = `translateX(-${itemWidth}px)`;
            container.appendChild(items[0]);
        }

        setTimeout(() => {
            container.style.transform = 'translateX(0)';
        }, 10);
    };

    const showMoreTestimonials = () => {
        setVisibleTestimonials(visibleTestimonials + 3);
    };

    return (
        <div className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
            <div id="slider-container" className="bg-white-A700 border-2 border-gray-900 border-solid flex flex-col gap-[30px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                <div id="slider-content" className="flex flex-row items-start justify-start w-auto">
                    {/* Render visible testimonials */}
                    {testimonials.slice(0, visibleTestimonials).map(testimonial => (
                        <div key={testimonial.id} className="slider-item">
                            <Img className="rounded-[50%] w-20" src="images/img_profilecontainer.svg" alt="profilecontaine" />
                            <Text className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full" size="txtOutfitSemiBold24">
                                {testimonial.name}
                            </Text>
                            <RatingBar className="flex justify-between w-[140px]" value={testimonial.rating} starCount={5} activeColor="#ff8c4c" size={24} />
                            <Text className="leading-[150.00%] max-w-[325px] md:max-w-full text-blue_gray-900 text-center text-xl" size="txtOutfitMedium20">
                                {testimonial.content}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
            {/* Control buttons */}
            <div className="control-btn control-btn-left" onClick={() => moveSlider('left')}>
                ←
            </div>
            <div className="control-btn control-btn-right" onClick={() => moveSlider('right')}>
                →
            </div>
            <button className="mt-3" onClick={showMoreTestimonials}>
                Show More Testimonials
            </button>
        </div>
    );
};

export default TestimonialSlider;
