import { useEffect } from 'react';

export default function BuyMeACoffeeWidget() {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-id', 'talelio');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', '');
    script.setAttribute('data-color', '#4969ed');
    script.setAttribute('data-position', 'right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';

    document.body.appendChild(script);

    // Initialize widget
    script.onload = () => {
      const event = new Event('DOMContentLoaded', {
        bubbles: false,
        cancelable: false,
      });

      window.dispatchEvent(event);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
