import React, {useState } from 'react'

const HomeContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>OKay buddy</div>
  );
};

export default HHomeContainerero;