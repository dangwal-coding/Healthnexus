// Image Assets - Centralized image imports and organization

// Import all images
import banner from './images/banner.jpg';
import logo from './images/logo.gif';
import rightImg from './images/rightimg.png';
import searchIcon from './images/search.png';
import whatsAppLogo from './images/whats-app-logo.svg';
import jciGoldSeal from './images/jci-gold-seal.png';
import nabh from './images/nabh.png';
import nabl from './images/nabl.png';
import authimg from './images/illustration.png';
import doctor_back from './images/dbackground.jpeg'
import doctor from './images/find-doctor.svg'

// Slider images
import sliderImg1 from './images/slider-img1.jpg';
import sliderImg2 from './images/slider-img2.jpg';
import sliderImg3 from './images/slider-img3.jpg';
import sliderImg4 from './images/slider-img4.jpg';

// Numbered images
import firstImg from './images/first.png';
import secondImg from './images/second.png';
import thirdImg from './images/third.png';
import fourthImg from './images/fourth.png';
import fifthImg from './images/fifth.png';
import sixthImg from './images/sixth.png';
import seventhImg from './images/seven.png';
import eighthImg from './images/eight.png';
import generalImg from './images/img.png';
import checkup from './images/Health-checkup.svg';
import opinion from './images/second-opinion.svg';

// Export individual images for direct use
export { checkup, opinion, doctor_back, authimg,doctor };

// Organized image objects for easy access

// Brand and Logo Images
export const brandImages = {
  logo: logo,
  banner: banner,
  rightImg: rightImg,
  whatsAppLogo: whatsAppLogo
};

// Navigation and UI Icons
export const uiIcons = {
  search: searchIcon
};

// Certification Images
export const certifications = {
  jciGoldSeal: jciGoldSeal,
  nabh: nabh,
  nabl: nabl
};

// Slider Images for Homepage
export const sliderImages = {
  slide1: sliderImg1,
  slide2: sliderImg2,
  slide3: sliderImg3,
  slide4: sliderImg4
};

// Service/Feature Images
export const serviceImages = {
  first: firstImg,
  second: secondImg,
  third: thirdImg,
  fourth: fourthImg,
  fifth: fifthImg,
  sixth: sixthImg,
  seventh: seventhImg,
  eighth: eighthImg,
  general: generalImg
};

// All images combined for easy access
export const allImages = {
  ...brandImages,
  ...uiIcons,
  ...certifications,
  ...sliderImages,
  ...serviceImages
};

// Layout configurations for different sections
export const imageLayouts = {
  // Navbar layout - commonly used images in header
  navbar: {
    logo: brandImages.logo,
    search: uiIcons.search,
    whatsApp: brandImages.whatsAppLogo
  },
  
  // Footer certifications layout
  footerCertifications: [
    certifications.jciGoldSeal,
    certifications.nabh,
    certifications.nabl
  ],
  
  // Homepage slider layout
  heroSlider: [
    sliderImages.slide1,
    sliderImages.slide2,
    sliderImages.slide3,
    sliderImages.slide4
  ],
  
  // Services grid layout (2x4 example)
  servicesGrid: [
    [serviceImages.first, serviceImages.second, serviceImages.third, serviceImages.fourth],
    [serviceImages.fifth, serviceImages.sixth, serviceImages.seventh, serviceImages.eighth]
  ],
  
  // Featured services (top 4)
  featuredServices: [
    serviceImages.first,
    serviceImages.second,
    serviceImages.third,
    serviceImages.fourth
  ]
};

// Helper function to get image by name
export const getImage = (imageName) => {
  return allImages[imageName] || null;
};
// Helper function to get layout by section
export const getLayout = (layoutName) => {
  return imageLayouts[layoutName] || null;
};

export default allImages;
