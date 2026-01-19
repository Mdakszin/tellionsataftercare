import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const Carousel = ({ images, title, subtitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying && images.length > 1) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000); // Change slide every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAutoPlaying(false); // Pause auto-play on user interaction
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
    };

    if (!images || images.length === 0) {
        return null;
    }

    // Handle dynamic imports (if images are modules)
    const getImageSrc = (img) => {
        return typeof img === 'string' ? img : img.default || img;
    };

    const currentImage = getImageSrc(images[currentIndex]);
    // Determine file type handling if needed, but assuming mostly images/videos based on listing
    const isVideo = (src) => src.toLowerCase().endsWith('.mp4');

    return (
        <div className="carousel-container">
            <div className="carousel-header">
                {title && <h2 className="carousel-title">{title}</h2>}
                {subtitle && <p className="carousel-subtitle">{subtitle}</p>}
            </div>

            <div className="carousel-wrapper">
                <button
                    className="carousel-btn prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="carousel-content">
                    {isVideo(currentImage) ? (
                        <video
                            src={currentImage}
                            controls
                            className="carousel-media"
                        />
                    ) : (
                        <img
                            src={currentImage}
                            alt={`${title} - Slide ${currentIndex + 1}`}
                            className="carousel-media"
                        />
                    )}
                </div>

                <button
                    className="carousel-btn next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            <div className="carousel-indicators">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(idx);
                            setIsAutoPlaying(false);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
