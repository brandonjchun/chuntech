import styled from 'styled-components';
import LogoPicture from "./logo.jpeg";

export const LogoContainer = styled.div`
  height: auto;
`;

export const LogoText = styled.div`
  color: black;
  class: d-flex justify-content-start;
  font-size: 18px;
`;

export const LogoImage = styled.div`
  background: url(${LogoPicture});
  background-size: contain; 
  background-position: 100% 50%;
  background-repeat: no-repeat;
  className: left;

`;