/** @format */

import React from "react";
import critter from "./images/critter.jpg";
import tours from "./images/tours.jpg";
import events from "./images/events.jpg";

const Mid = () => {
  return (
    <div className='midDiv'>
      <img src={tours} className='midDivImg' alt='small tours on mountain' />
      <p>Tours to try</p>
      <button className='toursBtn'>Tours</button>
      <img src={events} className='midDivImg' alt='women in an art gallery' />
      <p>Upcoming Events</p>
      <button className='critterBtn'>Events</button>
      <img
        src={critter}
        className='midDivImg'
        alt='small critter on mountain'
      />
      <p>Animal Tours</p>
      <button className='animalBtn'>Animals</button>
    </div>
  );
};

export default Mid;
