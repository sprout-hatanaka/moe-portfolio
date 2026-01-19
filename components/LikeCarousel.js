'use client'

import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { useState } from "react";

const widths = [283, 400, 334, 254, 273, 410, 334, 254];

const LikeCarousel = () => {

    const [counter, setCounter] = useState(0);

    const calcOffset = (counter) => {
    return widths.slice(0, counter).reduce((acc, v) => acc + v, 0);
    };

    const handleNext = () => {
    setCounter((prev) => Math.min(prev + 1, widths.length));
    };

    const handleBack = () => {
    setCounter((prev) => Math.max(prev - 1, 0));
    };

    const offset = calcOffset(counter);

    const isBackDisabled = counter === 0;
    const isNextDisabled = counter === widths.length;

    return (
        <section className="pictureSection">
            <div className="pictures" style={{transform: `translateX(-${offset}px)`}}>
                <Image src="/likeimages/11.jpg" alt='' width={270} height={330}/>
                <Image src="/likeimages/2.jpg" alt='' width={440} height={330}/>
                <Image src="/likeimages/3.jpg" alt='' width={440} height={330}/>
                <Image src="/likeimages/4.jpg" alt='' width={440} height={330}/>
                <Image src="/likeimages/5.jpg" alt='' width={330} height={330}/>
                <Image src="/likeimages/6.jpg" alt='' width={440} height={330}/>
                <Image src="/likeimages/7.jpg" alt='' width={440} height={330}/>
                <Image src="/likeimages/8.jpg" alt='' width={440} height={330}/>
            </div>
            <button className="backButton" onClick={handleBack} disabled={isBackDisabled}><SlArrowLeft size={40} color="#fff"/></button>
            <button className="nextButton" onClick={handleNext} disabled={isNextDisabled}><SlArrowRight size={40} color="#fff"/></button>
        </section>
    )
}

export default LikeCarousel;
