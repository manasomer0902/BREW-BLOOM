import { useEffect } from 'react';

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name, content, attribute = 'name') => {
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');

  }, [title, description]);

  return null;
}

export default SEO;
