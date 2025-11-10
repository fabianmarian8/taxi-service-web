import { useEffect } from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}

export function useArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl = 'https://zvolen-taxi.sk/og-image.svg'
}: ArticleSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      "author": {
        "@type": "Organization",
        "name": "Taxi Service Zvolen",
        "url": "https://zvolen-taxi.sk"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Taxi Service Zvolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://zvolen-taxi.sk/favicon.png",
          "width": 64,
          "height": 64
        }
      },
      "datePublished": datePublished,
      "dateModified": dateModified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
        "width": 1200,
        "height": 630
      },
      "inLanguage": "sk-SK",
      "about": {
        "@type": "Service",
        "name": "Taxi Service",
        "serviceType": "Transportation"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'article-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [headline, description, datePublished, dateModified, url, imageUrl]);
}
