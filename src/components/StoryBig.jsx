import React from 'react';

const StoryBig = (props) => {
  return (
    <figure className="story-big">
      <img src={props.img} alt={props.title} />
    </figure>
  );
};

export default StoryBig;