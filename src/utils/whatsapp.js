import { business } from '../data/siteData';

export const whatsappUrl = (message) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const constructionModeReply =
  'We are currently on construction mode, will get back to you later. For more info - call us on 7008403901.';

export const notifyWhatsAppConstructionMode = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('frameogram:whatsapp-construction-notice'));
  }
};

export const generalInquiryMessage =
  'Hello FRAMEOGRAM, I am interested in your eyewear collection. Please share more details.';

export const productInquiryMessage = (name) =>
  `Hello FRAMEOGRAM, I am interested in ${name}. Please share more details.`;

export const appointmentMessage = ({ name, phone, date, time, requirement }) =>
  [
    'Hello FRAMEOGRAM, I want to book an appointment.',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred Date: ${date}`,
    `Preferred Time: ${time}`,
    `Requirement: ${requirement}`,
  ].join('\n');

export const callUrl = `tel:+${business.whatsappNumber}`;
