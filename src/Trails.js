/** @format */

import React from "react";
import trailone from "./images/trailone.jpg";
import trailtwo from "./images/trailtwo.jpg";
import expanse from "./images/expanse.jpg";
import sky from "./images/sky.jpg";
import stellar from "./images/stellar.jpg";

const Trails = () => {
  return (
    <div className='trailsWrapper'>
      <h2>Trails</h2>
      <div className='trailsDiv'>
        <p>Here is trail articles and info on trails.</p>
        <ul>
          <li>
            <a href='#trailone'>Trail Num One</a>
          </li>
          <li>
            <a href='#trailtwo'>Trail Num Two</a>
          </li>
          <li>
            <a href='#trailthree'>Trail Num Three</a>
          </li>
          <li>
            <a href='#trailfour'>Trail Num Four</a>
          </li>
          <li>
            <a href='#trailfive'>Trail Num Five</a>
          </li>
        </ul>
      </div>
      <div className='trailsDiv' id='trailone'>
        <h4>Trail Num One: Awesome Mtn. Trail</h4>
        <img src={trailtwo} alt='women on nature trail' />
        <p>This is the info on "Awesome Mtn. Trail".</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='trailsDiv' id='trailtwo'>
        <p>Here is another trail you might like.</p>
        <h4>Trail Num Two: Great Views Trail</h4>
        <img src={trailone} alt='man on nature trail' />
        <p>This is the info on "Great Views Trail".</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='trailsDiv' id='trailthree'>
        <p>Here is another trail you might like.</p>
        <h4>Trail Num Three: Sky Trail</h4>
        <img src={sky} alt='man on nature trail' />
        <p>This is the info on "Sky Trail".</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='trailsDiv' id='trailfour'>
        <p>Here is another trail you might like.</p>
        <h4>Trail Num Four: Great Expanse Trail</h4>
        <img src={expanse} alt='man on nature trail' />
        <p>This is the info on "Great Expanse Trail".</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='trailsDiv' id='trailfive'>
        <p>Here is another trail you might like.</p>
        <h4>Trail Num Five: Stellar Night Views Trail</h4>
        <img src={stellar} alt='man on nature trail' />
        <p>This is the info on "Stellar Night Views Trail".</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Trails;
