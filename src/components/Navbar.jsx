import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/tellionsat_logo-removebg-preview.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <nav className="navbar" style={{ backgroundColor: 'white', padding: '15px 0', borderBottom: '2px solid #eee' }}>
            <div className="container flex items-center justify-between">
                <div className="logo flex items-center">
                    <img src={logo} alt="Tellionsat" style={{ height: '50px', marginRight: '10px' }} />
                    <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#FF8BA7' }}>Tellionsat Aftercare</span>
                </div>

                {/* Desktop Menu */}
                <ul className="desktop-menu flex" style={{ display: 'none' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                                style={({ isActive }) => ({
                                    color: isActive ? '#FF8BA7' : '#33272a',
                                    fontWeight: isActive ? '700' : '500',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    backgroundColor: isActive ? '#FDECF0' : 'transparent',
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Style injection for responsiveness since we aren't using a full CSS framework */}
                <style>{`
          @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FF8BA7',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'clip-path 0.6s cubic-bezier(0.7, 0, 0.3, 1)',
                    clipPath: isOpen ? 'circle(150% at calc(100% - 40px) 40px)' : 'circle(0px at calc(100% - 40px) 40px)',
                    pointerEvents: isOpen ? 'all' : 'none'
                }}
            >
                <button
                    onClick={toggleMenu}
                    style={{
                        position: 'absolute',
                        top: '25px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white'
                    }}
                >
                    <X size={32} />
                </button>

                <ul className="flex" style={{ flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={({ isActive }) => ({
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '2rem',
                                    textDecoration: 'none',
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                                    transitionDelay: isOpen ? '0.2s' : '0s'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
