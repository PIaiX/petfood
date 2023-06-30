import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'

const ArticleCard = () => {
    return (
        <figure className='article-card'>
            <img src={Replacement} alt="Replacement" />
            <figcaption>Как перевести собаку на натуральный корм</figcaption>
        </figure>
    );
};

export default ArticleCard;