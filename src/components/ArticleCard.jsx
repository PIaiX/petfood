import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'
import {Link} from 'react-router-dom';

const ArticleCard = () => {
    return (
        <figure className='article-card'>
            <Link to="/articles/123">
            <img src={Replacement} alt="Replacement" />
            <figcaption>Как перевести собаку на натуральный корм</figcaption>
            </Link>
        </figure>
    );
};

export default ArticleCard;