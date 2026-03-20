// src/utils/whatsappUtils.js

export const sendWhatsAppMessage = (name, phone, brief) => {
  const myPhoneNumber = "919118271153"; // <--- Apna Number Yahan Dalein
  
  // Message format ko sundar banane es  ka use kiya hai
  const message = `*Naya Enquiry!*%0A%0A` +
                  `*Naam:* ${name}%0A` +
                  `*Phone:* ${phone}%0A` +
                  `*Project:* ${brief}`;

  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;
  
  // Naya tab open karega
  window.open(whatsappUrl, '_blank');
};