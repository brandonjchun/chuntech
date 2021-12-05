import React, {useState } from 'react'
import Navbar from '../Navigation'
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
          <HeroH1>Greatest Artist Of All Time</HeroH1>
          <HeroP>Master of Sonical Surfing</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;