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

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{ position: 'absolute', top: '70px', left: 0, width: '100%', background: 'white', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 100 }}>
                    <ul className="flex" style={{ flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={({ isActive }) => ({
                                        color: isActive ? '#FF8BA7' : '#33272a',
                                        fontWeight: isActive ? '700' : '500',
                                        fontSize: '1.2rem'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
