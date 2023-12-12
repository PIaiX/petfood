import React, { useCallback, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Gifts from '../components/utils/Gifts';
import CartItem from '../components/CartItem';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';

import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../components/Empty";
import EmptyCart from "../components/empty/cart";
import Meta from "../components/Meta";
import Input from "../components/utils/Input";
import { customPrice, declination, getCount } from "../helpers/all";
import { useTotalCart } from "../hooks/useCart";
import { deleteCart } from "../services/cart";
import { isPromo } from "../services/promo";
import { cartPromo, cartDeletePromo } from "../store/reducers/cartSlice";


const Cart = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const promo = useSelector((state) => state.cart.promo);
  const checkout = useSelector((state) => state.checkout);
  const address = useSelector((state) => state.address.items);
  const options = useSelector((state) => state.settings.options);
  const pointSwitch = useSelector((state) => state.checkout.data.pointSwitch);
  const {
    total = 0,
    price = 0,
    delivery,
    pointAccrual,
    pickupDiscount,
    pointCheckout,
  } = useTotalCart();

  const {
    control,
    formState: { isValid, errors },
    register,
    handleSubmit,
    setValue,
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    defaultValues: {
      promo: promo?.name ? promo.name : "",
    },
  });

  const count = getCount(cart);

  const dispatch = useDispatch();

  const onPromo = useCallback(
    (e) => {
      (e?.promo?.length > 0 || promo?.name?.length > 0) &&
        isPromo({
          promo: e?.promo ? e.promo : promo?.name ? promo.name : "",
          delivery: checkout.delivery,
        })
          .then(({ data }) => data?.promo && dispatch(cartPromo(data.promo)))
          .catch((err) => {
            dispatch(cartDeletePromo());
            NotificationManager.error(
              err?.response?.data?.error ?? "Такого промокода не существует"
            );
          });
    },
    [promo, checkout.delivery]
  );

  useEffect(() => {
    if (promo?.name) {
      onPromo();
      setValue("promo", "");
    }
  }, [checkout.delivery, promo]);

  if (!Array.isArray(cart) || cart.length <= 0) {
    return (
      <Empty
        text="Корзина пуста"
        desc="Перейдите к меню, чтобы сделать первый заказ"
        image={() => <EmptyCart />}
        button={
          <Link className="btn-1" to="/catalog">
            Перейти в меню
          </Link>
        }
      />
    );
  }

  return (
    <main className='inner'>
      <Meta title="Корзина" />
      <Container>
        <section className='mb-6'>
          <NavBreadcrumbs/>
          <form className='cart'>
            <h1 className='text-center text-lg-start'>Вы добавили {declination(count, ["товар", "товара", "товаров"])}</h1>
            <Row className='g-4 g-xxl-5'>
              <Col xs={12} lg={8}>
                <div className="cart-filter">
                  <button 
                  type='button' 
                  className='btn-2 py-1'
                  onClick={() => dispatch(deleteCart())}>Очистить</button>
                </div>

                
                <ul className='list-unstyled'>
                  {cart.map((e) => (
                    <li>
                      <CartItem data={e} />
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} lg={4}>
                <div class="cart-box">
                  <div className='main-color fs-11 mb-1'>Комментарий</div>
                  <textarea rows="3" defaultValue={'Уберите, пожалуйста, лук'} className='mb-4'></textarea>

                  <div className='fs-11 mb-1'>Промокод</div>
                  <fieldset className='promoCode mb-5'>
                    <Input
                      className="flex-1"
                      type="text"
                      name="promo"
                      placeholder="Введите промокод"
                      errors={errors}
                      register={register}
                      maxLength={100}
                    />
                    <button
                      type="button"
                      disabled={!isValid}
                      onClick={handleSubmit(onPromo)}
                      className="btn-1"
                    >
                      Применить
                    </button>
                  </fieldset>

                  <div className="d-flex justify-content-between my-2">
                    <span>Стоимость товаров</span>
                    <span>{customPrice(price)}</span>
                  </div>
                  {checkout.delivery === "delivery" && (
                    <div className="d-flex justify-content-between my-2">
                      <span>Доставка</span>
                      <span className="main-color">
                        {delivery > 0 ? "+" + customPrice(delivery) : "Бесплатно"}
                      </span>
                    </div>
                  )}
                  {pickupDiscount > 0 && (
                    <div className="d-flex justify-content-between my-2">
                      <span>Скидка за самовывоз</span>
                      <span className="main-color">
                        -{customPrice(pickupDiscount)}
                      </span>
                    </div>
                  )}
                  {options.giftVisible && <Gifts />}
                  <hr className='my-3'/>
                  <div className="d-flex justify-content-between">
                    <span className='fw-6 fs-11'>Итоговая сумма</span>
                    <span className='fw-6'>{customPrice(total)}</span>
                  </div>

                  <div className="priceFixed">
                    <div className='d-md-none'>
                      <div className="fs-12">{customPrice(total)}</div>
                      <div className='fs-09 dark-gray'>● {declination(count, ["товар", "товара", "товаров"])}</div>
                    </div>
                    <Link to={
                      user?.id
                        ? address?.length === 0 && checkout.delivery == "delivery"
                          ? "/account/addresses/add"
                          : "/checkout"
                        : "/login"
                    }
                    className='btn-2 mt-md-3 w-100 flex-1 ms-2 ms-sm-4 ms-md-0'>
                      <span className='fw-4'>
                      {
                        user?.id
                        ? address?.length === 0 && checkout.delivery == "delivery"
                          ? "Добавить адрес"
                          : "Далее"
                        : "Войти в профиль"
                      }
                      </span>
                    </Link>
                  </div>

                  {pointAccrual > 0 && (
                    <div className='fw-5 fs-09 w-100 rounded-3 color-1-light-bg main-color p-2 mt-3'>{customPrice(pointAccrual)} бонуса будут начислены за этот заказ</div>
                  )}
                </div>
              </Col>
            </Row>
          </form>
        </section>
      </Container>
    </main>
  );
};

export default Cart;