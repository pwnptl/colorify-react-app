import React, { useState } from 'react';
import GameContainerBox from './GameContainerBox';
import GamesData from './GamesData';

const Home = () => {

  const gameData = GamesData();

  return (
    <div className=''>
      {gameData.map((content, index) => (
        <GameContainerBox key={index} content={content} />
      ))}
    </div>
  );
};

export default Home;
