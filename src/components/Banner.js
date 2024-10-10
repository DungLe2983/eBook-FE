import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';

const Banner = () => {
    const images = [Banner1, Banner2, Banner3];
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='w-full h-full  mt-16'>
            <div className='relative w-full h-full overflow-hidden'>
                {/* Container chứa tất cả các ảnh */}
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${currentImage * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className='w-full h-full flex-shrink-0'
                        >
                            <img
                                src={image}
                                alt={`Banner-${index}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>

                <div className='absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent h-full w-full ' />

                {/* Nút next và previous */}
                <div className='absolute top-0 h-full w-full flex items-center justify-between px-4'>
                    <button onClick={handlePrevious}>
                        <i className='ri-arrow-left-s-line text-xl lg:text-4xl text-neutral-500 hover:text-neutral-200 '></i>
                    </button>
                    <button onClick={handleNext}>
                        <i className='ri-arrow-right-s-line text-xl lg:text-4xl text-neutral-500 hover:text-neutral-200'></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
