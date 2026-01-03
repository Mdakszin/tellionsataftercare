import galleryArt from '../assets/gallery-artroom.jpg';
import galleryClass from '../assets/gallery-classroom.jpg';
import galleryOutdoor from '../assets/gallery-outdoor.jpg';
import galleryPlayground from '../assets/gallery-playground.jpg';

const Gallery = () => {
    const images = [
        { src: galleryPlayground, alt: "Outdoor Playground", title: "Fun Outdoors" },
        { src: galleryClass, alt: "Modern Classroom", title: "Learning Spaces" },
        { src: galleryArt, alt: "Art Room", title: "Creative Arts" },
        { src: galleryOutdoor, alt: "Outdoor Activities", title: "Active Play" },
    ];

    return (
        <div className="gallery-page py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 style={{ color: '#FF8BA7' }}>Our Gallery</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Take a peek into our daily life. From focused learning in our classrooms to energetic play outdoors, see what makes Tellionsat special.
                    </p>
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery-item" style={{
                            overflow: 'hidden',
                            borderRadius: '20px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            backgroundColor: 'white'
                        }}>
                            <div className="img-wrapper" style={{ height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div className="caption" style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#33272a' }}>{img.title}</h3>
                                <p style={{ color: '#777', marginTop: '5px' }}>{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
