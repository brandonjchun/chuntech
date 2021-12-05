import React, {useState } from 'react'
import Navbar from '../Navbar/Navigation'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Expert Plastic Extrusions and Metal Molding</HeroH1>
          <HeroP>Your trusted source since 1971</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;