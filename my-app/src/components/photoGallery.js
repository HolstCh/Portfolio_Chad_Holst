import React, { useState } from 'react';

const PhotoGallery = ({ photos }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    const currentImage = photos[currentImageIndex];

    return (
        <div className="photo-gallery projects-text">
            <div className="relative">
                <p className="sm:text-2xl text-l title-font text-gray-400 bg-gray-900 mx-auto text-center w-40 sm:w-80">
                    {currentImage.title}
                </p>
                <div className="flex items-center justify-center">
                    <img
                        src={currentImage.src}
                        alt={`Photo ${currentImageIndex + 1}`}
                        className="sm:w-80 sm:h-80 w-40 h-40 object-cover"
                    />
                </div>
                <p className="mt-8 projects-text lg:w-2/3 mx-auto leading-relaxed text-center text-base sm:text-xl text-l text-black">
                    {currentImage.caption}
                </p>
            </div>
            <div className="flex justify-between mt-2">
                <button
                    className="mb-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-l"
                    onClick={prevImage}
                >
                    &lt; Prev
                </button>
                <button
                    className="mb-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-l"
                    onClick={nextImage}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default PhotoGallery;
