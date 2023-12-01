import React, { memo } from "react";
import { customPrice, getImageURL } from "../../helpers/all";

const Ingredient =  memo(({ data, active, onChange }) => {
  const addition = data?.addition;

  if (!addition) {
    return null;
  }

  return (
    <div className={"ingredient" + (active ? " active" : "")}>
        {addition?.media && (
          <img
            src={getImageURL({ path: addition.media })}
            alt={addition?.title}
            className="ingredient-img"
          />
        )}
        <div className="ingredient-title">{addition?.title}</div>
        <button type='button' onClick={() => onChange(addition)} className='btn-11 ingredient-price'>{customPrice(addition.price)}&nbsp;₽</button>
    </div>
  );
});

export default Ingredient;