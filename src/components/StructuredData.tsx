export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://movimento.fitness",
    "name": "Movimento",
    "alternateName": "Movimento - Canali Postural Method Kuwait",
    "description": "A studio dedicated to conscious movement using the Canali Postural Method. We help you restore balance, stability, and freedom in your body through personalized, expert-led sessions.",
    "url": "https://movimento.fitness",
    "logo": "https://movimento.fitness/images/og-image.jpg",
    "image": "https://movimento.fitness/images/og-image.jpg",
    "priceRange": "$$",
    "telephone": "+96566130788",
    "email": "info@movimento-studio.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Sawaber Tower 5, 10th Floor, Office 2",
      "addressLocality": "Kuwait City",
      "addressCountry": "KW"
    },
    "sameAs": [
      "https://www.instagram.com/movimento.kw"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
