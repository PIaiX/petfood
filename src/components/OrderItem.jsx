import React, {useState} from 'react';
import CountInput from './utils/CountInput';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import useIsMobile from '../hooks/isMobile';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

const OrderItem = () => {
  const isMobileXXL = useIsMobile('1399px');
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className='order-item'>
      <img src="imgs/img3.png" alt="Микс-обед «Для настоящих хищников»" />
      <div className='text'>
        <h5 className='mb-1'>Микс-обед «Для настоящих хищников»</h5>
        <p className='fs-08 dark-gray'>Состав: Говядина и субпродукты (почки, печень, трахея, семенники и т.п.), субпродукты бараньи, рубец…</p>
      </div>
      <div className="show" onClick={()=>setShowExtra(!showExtra)}>
        <button type='button' className='d-flex align-items-center'>
          <span>Показать ещё</span>
          {
            (showExtra)
            ? <HiOutlineChevronUp className='ms-2'/>
            : <HiOutlineChevronDown className='ms-2'/>
          }
        </button>
      </div>
      <div className='quantity'>
        <div className="input w-50p py-1 px-2 rounded-4 text-center ms-auto">x2</div>
      </div>
      <div className='price text-end'>640&nbsp;₽</div>
      {
        (showExtra) &&
        <div className="extra">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore soluta placeat facilis cumque sed porro, nisi repudiandae a laudantium ullam provident laboriosam nemo nulla harum, consectetur voluptatem vel! Nobis?</p>
        </div>
      }
      
    </div>
  );
};

export default OrderItem;