import { Link } from 'react-router-dom';
import logo from '../assets/tellionsat_logo-removebg-preview.webp';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FDECF0', paddingTop: '60px', paddingBottom: '30px', borderTop: '5px solid #FF8BA7', marginTop: 'auto', width: '100%', paddingLeft: '40px', paddingRight: '40px' }}>
            <div>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* Brand Column */}
                    <div className="footer-col">
                        <div className="flex items-center mb-4" style={{ gap: '10px' }}>
                            <img src={logo} alt="Tellionsat" style={{ height: '60px' }} />
                            <h3 style={{ margin: 0, color: '#FF8BA7', fontSize: '1.5rem' }}>Tellionsat</h3>
                        </div>
                        <p style={{ color: '#594a4e', lineHeight: '1.6' }}>
                            Providing a safe, nurturing, and fun environment for your children to grow and learn after school.
                        </p>
                    </div>

                    {/* Sitemap Column */}
                    <div className="footer-col">
                        <h4 style={{ color: '#33272a', marginBottom: '20px', fontSize: '1.25rem' }}>Explore</h4>
                        <ul style={{ padding: 0 }}>
                            {['Home', 'Gallery', 'About'].map((item) => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        style={{ color: '#594a4e', display: 'flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF8BA7' }}></span>
                                        {item === 'About' ? 'About Us' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col">
                        <h4 style={{ color: '#33272a', marginBottom: '20px', fontSize: '1.25rem' }}>Contact Us</h4>
                        <ul style={{ padding: 0 }}>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '12px', color: '#594a4e' }}>
                                <MapPin size={20} color="#FF8BA7" style={{ minWidth: '20px' }} />
                                <span>5953 Apple Cres, Roodekop, Germiston, 1401</span>
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '12px', color: '#594a4e' }}>
                                <Clock size={20} color="#FF8BA7" />
                                <span>Mon - Fri: 13:00 PM -17:00 PM</span>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <a
                                    href="https://wa.me/27781673574?text=Hi%2C%20I%27d%20like%20to%20know%20more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', gap: '12px', color: '#594a4e', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <MessageCircle size={20} color="#FF8BA7" />
                                    <span>078 167 3574</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Tellionsat Aftercare. All rights reserved. Made with love by Odwa Mdanyana</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
