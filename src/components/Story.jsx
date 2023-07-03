import React from 'react';
import Dog from '../assets/imgs/dog_ears.svg';
import Cat from '../assets/imgs/cat_ears.svg';
// themes: standart, dog, cat

const Story = (props) => {
  return (
    <figure 
      className="story" 
      data-theme={(props.theme) ? props.theme : 'standart'} 
      data-viewed={(props.viewed) ? 'viewed' : ''} 
      onClick={props.onClick}
    >
      <div className="img">
        {
          (props.theme === "cat") &&
          <img src={Cat} alt="cat ears" className='cat'/>
        }
        <img src={props.img} alt={props.title} />
        {
          (props.theme === "dog") &&
          <img src={Dog} alt="dog ears" className='dog'/>
        }
      </div>
      <figcaption>{props.title}</figcaption>
    </figure>
  );
};

export default Story;