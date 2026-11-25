
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  // Replace this with the actual WhatsApp number.
  // Include country code, without + or spaces.
  const phoneNumber = '7007527711';

  const message = encodeURIComponent(
    'Hello BREW & BLOOM! I would like to know more about your menu and services.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BREW & BLOOM on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2} />

      <span className="whatsapp-tooltip">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;
