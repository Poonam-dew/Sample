
import React, { useState } from 'react';
import '../Styles/Event.css';

import event1 from '../assets/event1.jpg';

const Event = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const read1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const read2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const read3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const read4 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const read5 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">
          <p> UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH</p>
            <img className="image" src={event1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots1" style={{ display: isExpanded1 ? 'none' : 'inline' }}>...</span>
              <span id="more1" style={{ display: isExpanded1 ? 'inline' : 'none' }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button onClick={read1}>
              {isExpanded1 ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <p> UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH</p>
            <img className="image" src={event1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots2" style={{ display: isExpanded2 ? 'none' : 'inline' }}>...</span>
              <span id="more2" style={{ display: isExpanded2 ? 'inline' : 'none' }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button onClick={read2}>
              {isExpanded2 ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <p> UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH</p>
            <img className="image" src={event1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots3" style={{ display: isExpanded3 ? 'none' : 'inline' }}>...</span>
              <span id="more3" style={{ display: isExpanded3 ? 'inline' : 'none' }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button onClick={read3}>
              {isExpanded3 ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <p> UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH</p>
            <img className="image" src={event1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots3" style={{ display: isExpanded3 ? 'none' : 'inline' }}>...</span>
              <span id="more3" style={{ display: isExpanded3 ? 'inline' : 'none' }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button onClick={read4}>
              {isExpanded3 ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        <div className="column">
          <div className="card">
          <p> UNDERSTANDING THE BLUEPRINT OF LIFE FOR PERSONAL AND PROFESSIONAL GROWTH</p>
            <img className="image" src={event1} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots3" style={{ display: isExpanded3 ? 'none' : 'inline' }}>...</span>
              <span id="more3" style={{ display: isExpanded3 ? 'inline' : 'none' }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button onClick={read5}>
              {isExpanded3 ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        
          
      </div>
    </>
  );
};

export default Event;
