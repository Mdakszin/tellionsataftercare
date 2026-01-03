import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="container py-5">
                <h1 className="text-center mb-4" style={{ color: '#FF8BA7' }}>About Us</h1>

                <div className="flex" style={{ flexDirection: 'column', gap: '3rem' }}>

                    {/* Mission Section */}
                    <section>
                        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#594a4e' }}>
                            At Tellionsat Aftercare, our mission is to provide a safe, nurturing, and stimulating environment where children can relax, learn, and grow after their school day. We are dedicated to supporting families by offering high-quality care that balances educational support with creative play.
                        </p>
                    </section>

                    {/* Map Location Section */}
                    <section style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <h2 className="text-center mb-4" style={{ color: '#33272a' }}>Visit Us</h2>

                        <div className="flex" style={{ flexDirection: 'column', gap: '20px' }}>
                            <div className="address-info text-center">
                                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#FDECF0', marginBottom: '15px' }}>
                                    <MapPin color="#FF8BA7" size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '5px' }}>Our Location</h3>
                                <p style={{ fontSize: '1.1rem', color: '#555' }}>5953 Apple Cres, Roodekop, Germiston, 1401</p>
                            </div>

                            <div className="map-container" style={{ width: '100%', height: '400px', borderRadius: '15px', overflow: 'hidden', border: '2px solid #eee' }}>
                                <iframe
                                    title="Tellionsat Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.857635987654!2d28.18567831502424!3d-26.25781258341398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95105e6b123456%3A0xabcdef1234567890!2s5953%20Apple%20Cres%2C%20Roodekop%2C%20Germiston%2C%201401!5e0!3m2!1sen!2sza!4v1650000000000!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#999' }}>
                                *Note: If map pin is approximate, please use GPS coordinates or call us for assistance.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;
