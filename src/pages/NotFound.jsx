import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="not-found-page" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <SEO
                title="Page Not Found"
                description="Oops! The page you are looking for doesn't exist."
            />
            <h1 style={{ fontSize: '4rem', color: '#FF8BA7', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#33272a' }}>Oops! Page Not Found</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
                It looks like this page is playing hide and seek. While we look for it, let's get you back to safety!
            </p>
            <Link to="/" className="btn btn-primary" style={{
                backgroundColor: '#FF8BA7',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'transform 0.2s ease',
                display: 'inline-block'
            }}>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
