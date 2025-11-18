import { useEffect } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function useDocumentMeta({ title, description, canonical }: MetaProps) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update or create canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Cleanup function to restore original title
    return () => {
      document.title = 'Zvolen Taxi | Taxi služba Nonstop';
    };
  }, [title, description, canonical]);
}
