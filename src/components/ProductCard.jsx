import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { customPrice, getImageURL } from "../helpers/all";
import ButtonCart from "./ButtonCart";
import BtnFav from "./utils/BtnFav";

const ProductCard = memo(({ data }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  var price = data.price ?? 0;
  if (Array.isArray(data.modifiers) && data?.modifiers?.length > 0) {
    var price = Math.min(...data.modifiers.map((item) => item.price));
  }

  return (
    <div className="product" key={data.id}>
      <div className="product-img">
        <Link to={"/product/" + data.id}>
          <LazyLoadImage
            src={getImageURL({ path: data.medias })}
            alt={data.title}
            loading="lazy"
          />
        </Link>
        {isAuth && <BtnFav product={data} />}
      </div>
      
      <h6><Link to='/catalog/category/product'>{data.title}</Link></h6>
      
      <div className='w-xs-100 d-flex justify-content-between align-items-center'>
        <div>
          <div className='fs-11 fw-5'>
            {data?.modifiers?.length > 0
            ? "от " + customPrice(price)
            : customPrice(price)}
          </div>
        </div>
        <ButtonCart product={data} className="btn-1" />
      </div>
    </div>
  );
});

export default ProductCard;