import React from 'react';

const Story = (props) => {
  return (
    <figure className="story" onClick={props.onClick}>
      <img src={props.img} alt={props.title} />
      <figcaption>{props.title}</figcaption>
    </figure>
  );
};

export default Story;