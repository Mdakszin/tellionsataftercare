import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-daycare.mp4';
import readingImg from '../assets/teacher-reading.webp';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="home-page">
            <SEO
                title="Home"
                description="Welcome to Tellionsat Aftercare in Roodekop, Germiston. We provide a safe, nurturing environment with educational support, creative arts, and fun activities."
                image={readingImg}
            />
            {/* Hero Section */}
            <section className="hero" style={{ position: 'relative', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1 }}></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', zIndex: 0, transform: 'translate(-50%, -50%)', objectFit: 'cover' }}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                <div className="content container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Welcome to Tellionsat Aftercare</h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Where learning meets fun in a safe and nurturing environment.</p>
                    <Link to="/gallery" className="btn">View Our Gallery</Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about py-5">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '4rem' }}>
                        <div className="about-text">
                            <h2 style={{ color: '#FF8BA7' }}>Nurturing Young Minds</h2>
                            <p className="mb-4 text-justify">
                                At Tellionsat Aftercare, we believe every child deserves a space to grow, learn, and play.
                                Our dedicated team provides a balanced program of educational support and creative activities.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Safe Environment', 'Experienced Staff', 'Creative Activities', 'Homework Support'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '1.1rem' }}>
                                        <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#c3f0ca', marginRight: '10px' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="about-image">
                            <img src={readingImg} alt="Teacher reading to children" style={{ width: '100%', height: 'auto', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/CTA Section */}
            <section className="features py-5" style={{ backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 className="mb-4">Why Choose Us?</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            { title: 'Fun & Learning', desc: 'Balances education with recreational activities.', color: '#FDECF0' },
                            { title: 'Other Activities', desc: 'Engaging games and physical activities for everyone.', color: '#E8F5E9' },
                            { title: 'Creative Arts', desc: 'Art rooms dedicated to expression and creativity.', color: '#FFF3E0' }
                        ].map((feature, idx) => (
                            <div key={idx} style={{ padding: '30px', backgroundColor: feature.color, borderRadius: '20px', transition: 'transform 0.3s' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
