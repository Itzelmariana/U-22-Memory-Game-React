import React from 'react';
import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped }) {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src='/img/cover-2.png'
          alt='card back'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
