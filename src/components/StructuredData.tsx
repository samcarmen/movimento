export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://movimento.fitness",
    "name": "Movimento",
    "alternateName": "Movimento - Canali Postural Method Kuwait",
    "description": "A studio dedicated to conscious movement using the Canali Postural Method. Quality as a standard - Italian excellence in every step from method to practice.",
    "url": "https://movimento.fitness",
    "logo": "https://movimento.fitness/images/logo.jpg",
    "image": "https://movimento.fitness/images/logo.jpg",
    "priceRange": "$$",
    // Update with your actual business information
    // "telephone": "+1-XXX-XXX-XXXX",
    // "email": "info@movimento.fitness",
    // "address": {
    //   "@type": "PostalAddress",
    //   "streetAddress": "123 Main Street",
    //   "addressLocality": "City",
    //   "addressRegion": "State",
    //   "postalCode": "12345",
    //   "addressCountry": "US"
    // },
    // "geo": {
    //   "@type": "GeoCoordinates",
    //   "latitude": "XX.XXXX",
    //   "longitude": "-XX.XXXX"
    // },
    // "openingHoursSpecification": [
    //   {
    //     "@type": "OpeningHoursSpecification",
    //     "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    //     "opens": "06:00",
    //     "closes": "21:00"
    //   },
    //   {
    //     "@type": "OpeningHoursSpecification",
    //     "dayOfWeek": ["Saturday", "Sunday"],
    //     "opens": "08:00",
    //     "closes": "18:00"
    //   }
    // ],
    "sameAs": [
      // Add your social media profiles
      // "https://www.facebook.com/movimento",
      // "https://www.instagram.com/movimento",
      // "https://twitter.com/movimento"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
