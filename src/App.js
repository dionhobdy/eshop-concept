import './App.css';

import NavBar from './Navbar/Nav.js';
import CarouselFade from './Header/Carousel/Carousel.js';
import HeaderBlock from './Header/Header_Block/Header_Block.js';
import Direct from '../src/Direct/Direct.js';

function Head_Sect() {
  return (
    <div>
      <NavBar></NavBar>
      <HeaderBlock></HeaderBlock>
      <CarouselFade></CarouselFade>
    </div>
  )
}

function Direct_Sect() {
  return (
    <Direct></Direct>
  )
}

function App() {
  return (
    <div>
      <Head_Sect></Head_Sect>
      <Direct_Sect></Direct_Sect>
    </div>
  );
}

export default App;
