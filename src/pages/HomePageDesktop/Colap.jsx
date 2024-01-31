import React, { useState } from 'react';

const CollapsibleBox = ({ question, answer }) => {
    const [isCollapsibleOpen, setCollapsibleOpen] = useState(false);

    const toggleCollapsible = () => {
        setCollapsibleOpen(!isCollapsibleOpen);
    };

    return (
        <div className="bg-deep_orange-50 border-2 border-gray-900 border-solid flex sm:flex-col flex-col gap-[30px] items-center justify-start px-10 sm:px-5 py-[34px] rounded-[12px] sm:min-w-0 w-[1000px] sm:w-auto md:w-0">
            <div className="flex-1 text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto">
                {question}
            </div>
            <button
                className="flex h-10 items-center justify-center outline outline-[2px] outline-gray-900 rounded-md w-10"
                onClick={toggleCollapsible}
            >
                <img className={`h-4 transform ${isCollapsibleOpen ? 'rotate-45' : ''}`} src="images/img_plus.svg" alt="plus" />
            </button>
            {isCollapsibleOpen && (
                <div className="collapsible-content">
                    {answer}
                </div>
            )}
        </div>
    );
};

const YourComponent = () => {
    const collapsibleData = [
        { question: "Is there a uniform policy for students?", answer: "Ans repye text will be add by admine" },
        { question: "Another Question", answer: "Some text in the collapsible box for another question." },
        { question: "Is there a uniform policy for students?", answer: "Ans repye text will be add by admin." },
        { question: "Mostly Ask Qustions", answer: "Ans repye text will be add by admin" },
    ];

    return (
        <div>
            {collapsibleData.map((data, index) => (
                <CollapsibleBox key={index} question={data.question} answer={data.answer} />
            ))}
        </div>
    );
};

export default YourComponent;
