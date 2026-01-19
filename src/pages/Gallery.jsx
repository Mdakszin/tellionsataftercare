import React, { useMemo } from 'react';
import Carousel from '../components/Carousel';
import SEO from '../components/SEO';

const Gallery = () => {
    // Dynamic imports for each category
    const projectImages = import.meta.glob('../assets/projects/*', { eager: true });
    const outdoorImages = import.meta.glob('../assets/outdoor/*', { eager: true });
    const fundayImages = import.meta.glob('../assets/Funday/*', { eager: true });
    const classroomImages = import.meta.glob('../assets/classrooms/*', { eager: true });

    // Helper to convert glob object to array of sources
    const getImages = (globResults) => {
        return Object.values(globResults).map(mod => mod.default || mod);
    };

    const projects = useMemo(() => getImages(projectImages), []);
    const outdoor = useMemo(() => getImages(outdoorImages), []);
    const funday = useMemo(() => getImages(fundayImages), []);
    const classrooms = useMemo(() => getImages(classroomImages), []);

    return (
        <div className="gallery-page py-5">
            <SEO
                title="Gallery"
                description="View our facilities including classrooms, playgrounds, and art rooms. See how children learn and play at Tellionsat Aftercare."
            />
            <div className="container">
                <div className="text-center mb-5">
                    <h1 style={{ color: '#FF8BA7', marginBottom: '1rem' }}>Our Gallery</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#4A5568' }}>
                        Take a peek into our daily life. From focused learning in our classrooms to energetic play outdoors, see what makes Tellionsat special.
                    </p>
                </div>

                <div className="gallery-sections">
                    <Carousel
                        title="Classrooms"
                        subtitle="Where learning happens"
                        images={classrooms}
                    />

                    <Carousel
                        title="Outdoor Activities"
                        subtitle="Fun in the sun"
                        images={outdoor}
                    />

                    <Carousel
                        title="Projects"
                        subtitle="Creative masterpieces"
                        images={projects}
                    />

                    <Carousel
                        title="Funday"
                        subtitle="Special moments and celebrations"
                        images={funday}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
