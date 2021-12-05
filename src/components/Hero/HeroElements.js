import styled from 'styled-components';
import HeroImage from './hero.png'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${HeroImage});
  height: 90vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(150vh - 80px);
  max-height: 50%;
  padding: 0rem calc((150vw - 1300) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 150vh;
  max-height: 110%;
  padding: 0 2rem;
  width: auto;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 50%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  box-shadow: 3.5px 4px #fcd12a;
  letter-spacing: 0.5px;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 1.25vw, 1.5rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
