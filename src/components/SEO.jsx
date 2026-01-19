import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image }) => {
    const siteTitle = 'Tellionsat Aftercare';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaImage = image || '/favicon.png'; // Fallback to favicon if no image provided

    return (
        <Helmet>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
