// ! future code kke liye===================================
// // 1. Pehle saari images ko import karein
import img_1 from '../../assets/endtoendimages/e_1.jpg'; // Extension (.jpg, .png) wahi rakhein jo aapki file ki hai
import img_2 from '../../assets/endtoendimages/e_2.jpg';
import img_3 from '../../assets/endtoendimages/e_3.jpg';
import img_4 from '../../assets/endtoendimages/e_4.jpg';
import img_5 from '../../assets/endtoendimages/e_5.jpg';
import img_6 from '../../assets/endtoendimages/e_6.jpg';
// Agar aur images hain (moreInteriors ke liye)
import img_7 from '../../assets/endtoendimages/e_7.jpg';
import img_8 from '../../assets/endtoendimages/e_8.jpg';
import img_9 from '../../assets/endtoendimages/e_9.jpg';
import img_10 from '../../assets/endtoendimages/e_10.jpg';

// 2. Ab in imported variables ko array mein use karein
export const endToEndData = [
  { 
    id: 1, 
    title: "Contemporary Dining Room with Display Cabinets", 
    image: img_1 
  },
  { 
    id: 2, 
    title: "Modern Bedroom with Bay Window Seating", 
    image: img_2 
  },
  { 
    id: 3, 
    title: "Elegant Living Area with Partition", 
    image: img_3 
  },
  { 
    id: 4, 
    title: "Compact Puja Unit Designs", 
    image: img_4 
  },
  { 
    id: 5, 
    title: "Modern Kitchen Concepts", 
    image: img_5 
  },
  { 
    id: 6, 
    title: "Premium Living Room Interiors", 
    image: img_6 
  },
];

// 3. Extra gallery images ke liye
export const moreInteriors = [
  img_7,
  img_8,
  img_9,
  img_10,
];