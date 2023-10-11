import {animateScroll as scroll} from 'react-scroll';

// function scrollSectionIntoView(sectionId) {
//   document.getElementById(sectionId).scrollIntoView();
// }
export const navInfo = [
  {name: 'Home', action: () => scroll.scrollToTop({duration: 200}), to: ''},
  {name: 'About Us', action: null, to: 'about-us'},
  {name: 'Events', action: null, to: 'events'},
  {name: 'Contact Us', action: null, to: 'contact-us'}
];

export const navInfoPlus = [
  ...navInfo,
  {name: 'Login', action: null, to: ''},
  {name: 'Signup', action: null, to: ''}
];
