import React from 'react';
import { ButtonProps } from '../models/button';

const FlipButtonComponent: React.FC<{ button: ButtonProps }> = ({ button }) => {
  
  return (
    <button 
      className='new-game-button'
      onClick={button.onClick}>
      {button.text}
    </button>
  );
};

export { FlipButtonComponent };
