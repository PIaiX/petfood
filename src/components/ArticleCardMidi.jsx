import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg';

const ArticleCardMidi = () => {
    return (
        <figure className='article-card-midi'>
            <img src={Replacement} alt="Печать и штамп – в чем разница?" />
            <figcaption>
                <h5>At vero eos et accusamus et iusto</h5>
                <p className='text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                <Link to="123" className='btn-2 mt-3 mt-sm-4'>Подробнее</Link>
            </figcaption>
        </figure>
    );
};

export default ArticleCardMidi;