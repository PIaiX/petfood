import moment from "moment";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutProduct from '../components/CheckoutProduct';
import { useForm, useWatch } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import ReturnLink from '../components/utils/ReturnLink';
import Empty from "../components/Empty";
import EmptyAddresses from "../components/empty/addresses";
import EmptyAuth from "../components/empty/auth";
import EmptyCart from "../components/empty/cart";
import EmptyWork from "../components/empty/work";
import Meta from "../components/Meta";
import CountInput from "../components/utils/CountInput";
import Input from "../components/utils/Input";
import NavTop from "../components/utils/NavTop";
import PaymentItem from "../components/utils/PaymentItem";
// import Select from "../components/utils/Select";
import Textarea from "../components/utils/Textarea";
import { customPrice } from "../helpers/all";
import { isWork } from "../hooks/all";
import { useTotalCart } from "../hooks/useCart";
import { checkAuth } from "../services/auth";
import { createOrder } from "../services/order";
import { resetCart } from "../store/reducers/cartSlice";
import {
  editDeliveryCheckout,
  resetCheckout,
  setCheckout,
} from "../store/reducers/checkoutSlice";
import {setUser} from "../store/reducers/authSlice";

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(false);
  const paymentsData = [
    {
      id: 1,
      title: "Онлайн оплата",
      value: "online",
      main: true,
    },
    {
      id: 2,
      title: "Банковской картой",
      value: "card",
      main: false,
    },
    {
      id: 3,
      title: "Наличными",
      value: "cash",
      main: false,
    },
    {
      id: 4,
      title: "СБП",
      value: "sbp",
      main: false,
    },
    {
      id: 5,
      title: "Sber Pay",
      value: "sberpay",
      main: false,
    },
    {
      id: 6,
      title: "Tinkoff Pay",
      value: "tinkoffpay",
      main: false,
    },
  ];

  const profilePointVisible = useSelector(
    (state) => state.settings.options.profilePointVisible
  );
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.items);
  const promo = useSelector((state) => state.cart.promo);
  const zone = useSelector((state) => state.cart.zone);
  const checkout = useSelector((state) => state.checkout);
  const address = useSelector((state) => state.address.items);
  const affiliate = useSelector((state) => state.affiliate.items);
  const options = useSelector((state) => state.settings.options);

  const {
    total = 0,
    price = 0,
    discount = 0,
    delivery,
    pointAccrual,
    pickupDiscount,
    pointCheckout,
  } = useTotalCart();

  const selectedAffiliate =
    affiliate?.length > 0
      ? affiliate.find(
          (e) =>
            (checkout.delivery === "delivery" &&
              e.id === zone?.data?.affiliateId) ||
            (checkout.delivery === "pickup" && e.main)
        )
      : false;

  const [end, setEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
    setValue,
    reset,
    trigger,
    register,
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: user.firstName ?? "",
      phone: user.phone ?? "",
      phoneReg: user.phoneReg ?? "",
      serving: checkout?.data?.serving ?? "",
      delivery: checkout.delivery ?? "delivery",
      payment: checkout?.data?.payment ?? "cash",
      person: checkout?.data?.person ?? 1,
      comment: checkout?.data?.comment ?? "",

      address: address ? address.find((e) => e.main) : false,
      affiliateId: affiliate ? affiliate.find((e) => e.main)?.id : false,

      // Сохранение адреса по умолчанию
      save: checkout?.data?.save ?? false,

      products: cart ?? [],

      promo: promo ?? false,

      // Списание баллов
      pointWriting:
        checkout?.data?.pointSwitch && checkout?.data?.pointWriting
          ? checkout.data.pointWriting
          : 0,
      pointSwitch: checkout?.data?.pointSwitch,

      //Скидка за самовывоз
      pickupDiscount: checkout?.data?.pickupDiscount ?? 0,

      // Начисление баллов
      pointAccrual: checkout?.data?.pointAccrual ?? 0,

      // Сумма товаров
      price: price,

      //Сумма доставки
      deliveryPrice: delivery,

      // Сумма скидки
      discount: discount,

      // Итоговая сумма
      total: total,

      type: "site",
    },
  });

  const data = useWatch({ control });

  const isValidBtn = () =>
    !isValid ||
    !user?.id ||
    (checkout.delivery === "delivery" && zone?.data?.minPrice > price);

  useLayoutEffect(() => {
    if (isAuth && user?.status === 0) {
      return navigate("/activate");
    }
  }, [isAuth]);

  useEffect(() => {
    if (!end && total > 0) {
      setValue("total", total);
      setValue("price", price);
      setValue("discount", discount);
      setValue("deliveryPrice", delivery);
      setValue("pointAccrual", pointAccrual);
      setValue("pickupDiscount", pickupDiscount);
    }
  }, [total, price, discount, delivery, pointAccrual, pickupDiscount, end]);

  useEffect(() => {
    if (!end && isAuth) {
      setValue("name", user.firstName);
      setValue("phone", user.phone);
      setValue("phoneReg", user.phone);
      trigger();
    }
  }, [user, end]);

  useEffect(() => {
    if (data) dispatch(setCheckout(data));
  }, [data]);

  useEffect(() => {
    if (isAuth && !end) {
      setValue(
        "pointWriting",
        data.pointSwitch && pointCheckout > 0 ? pointCheckout : 0
      );
    }
  }, [data.pointSwitch, pointCheckout, end]);

  useEffect(() => {
    if (!end && data) dispatch(setCheckout(data));
  }, [data, end]);

  useEffect(() => {
    if (!end && checkout.delivery) {
      setValue("delivery", checkout.delivery);
    }
  }, [checkout.delivery, end]);

  useEffect(() => {
    let pay =
      checkout.delivery == "delivery"
        ? options?.delivery ?? []
        : options?.pickup ?? [];
    if (pay && data.payment && !pay[data.payment]) {
      if (pay?.online) {
        setValue("payment", "online");
      } else if (pay?.card) {
        setValue("payment", "card");
      } else if (pay?.cash) {
        setValue("payment", "cash");
      } else if (pay?.sbp) {
        setValue("payment", "sbp");
      } else if (pay?.sberpay) {
        setValue("payment", "sberpay");
      } else if (pay?.tinkoffpay) {
        setValue("payment", "tinkoffpay");
      }
    }
  }, [checkout.delivery, end, options, data.payment]);

  useEffect(() => {
    if (address?.length > 0) {
      setValue("address", address.find((e) => e.main) ?? false);
    }
  }, [address]);

  const onSubmit = useCallback(
    (data) => {
      if (data.delivery == "delivery") {
        if (!data.address) {
          return NotificationManager.error("Добавьте адрес доставки");
        }

        if (!zone?.data || !zone?.data?.status) {
          NotificationManager.error(
            "По данному адресу доставка не производится"
          );
          return false;
        }

        data.affiliateId = zone.data.affiliateId;
      }
      setIsLoading(true);

      createOrder(data)
        .then(async (response) => {
          if (response?.data) {
            NotificationManager.success(
              response?.data?.link
                ? "Перенаправление на страницу оплаты..."
                : "Заказ успешно отправлен"
            );
          }

          reset();
          dispatch(resetCart());
          dispatch(resetCheckout());
          setEnd(true);

          if (response?.data?.point > 0) {
            checkAuth().then(
              async (auth) =>
                auth?.data?.user && dispatch(setUser(auth.data.user))
            );
          }

          if (response?.data?.link) {
            return window.location.replace(response.data.link);
          }
        })
        .catch((error) => {
          NotificationManager.error(
            error?.response?.data?.error ?? "Неизвестная ошибка"
          );
        })
        .finally(() => setIsLoading(false));
    },
    [data.address, zone?.data]
  );

  if (!Array.isArray(cart) || cart.length <= 0) {
    return (
      <Empty
        text="Корзина пуста"
        desc="Перейдите к меню, чтобы сделать первый заказ"
        image={() => <EmptyCart />}
        button={
          <Link className="btn-primary" to="/">
            Перейти в меню
          </Link>
        }
      />
    );
  }

  if (!isAuth) {
    return (
      <Empty
        text="Вы не авторизованы"
        desc="Войдите в свой аккаунт или зарегистрируйтесь"
        image={() => <EmptyAuth />}
        button={
          <Link className="btn-primary" to="/login">
            Войти или создать профиль
          </Link>
        }
      />
    );
  }

  if (
    data?.delivery === "delivery" &&
    (!Array.isArray(address) || address.length <= 0)
  ) {
    return (
      <Empty
        text="Адрес не добавлен"
        desc="Создайте новый адрес для доставки заказа"
        image={() => <EmptyAddresses />}
        button={
          <Link className="btn-primary" to="/account/addresses/add">
            Добавить адрес
          </Link>
        }
      />
    );
  }

  if (selectedAffiliate?.status === 0) {
    return (
      <Empty
        text="Заведение сейчас не работает"
        desc="Зайдите к нам немного позже"
        image={() => <EmptyWork />}
        button={
          <Link className="btn-primary" to="/">
            Перейти на главную
          </Link>
        }
      />
    );
  }
  if (
    selectedAffiliate?.options?.work &&
    selectedAffiliate.options.work[moment().weekday()].end &&
    selectedAffiliate.options.work[moment().weekday()].start &&
    !isWork(
      selectedAffiliate.options.work[moment().weekday()].start,
      selectedAffiliate.options.work[moment().weekday()].end
    )
  ) {
    return (
      <Empty
        text={`Мы работаем с ${
          selectedAffiliate.options.work[moment().weekday()].start
        } до ${selectedAffiliate.options.work[moment().weekday()].end}`}
        desc="Зайдите к нам немного позже"
        image={() => <EmptyWork />}
        button={
          <Link className="btn-primary" to="/">
            Перейти на главную
          </Link>
        }
      />
    );
  }

  return (
    <main className='inner'>
      <Container>
        <div className="d-flex align-items-center mb-4 mb-xl-5">
          <ReturnLink link="/cart" className="mb-0"/>
          <h1 className='text-start ms-4 mb-0'>Оформление заказа</h1>
        </div>
        <form className='cart mb-6'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} md={6} lg={7} xl={8}>
              <Row xs={1} xl={3} className='align-items-end g-3 mb-4 mb-xl-5'>
                <Col>
                  <div className="input-labeled">
                    <span>Получатель</span>
                    <input type="text" placeholder='Имя' />
                  </div>
                </Col>
                <Col>
                  <div className="input-labeled">
                    <span>Номер телефона</span>
                    <input type="tel" placeholder='+7- ___-___-__-__' />
                  </div>
                </Col>
                <Col>
                  <p className="fs-09 fw-5">Способ получения</p>
                  <ul className='inputGroup fs-09'>
                    <li>
                      <label>
                        <input type="radio" name='param1' onClick={()=>setIsDelivery(true)}/>
                        <div className='text'>Доставка</div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" defaultChecked={true} name='param1' onClick={()=>setIsDelivery(false)}/>
                        <div className='text'>Самовывоз</div>
                      </label>
                    </li>
                  </ul>
                </Col>
              </Row>
              {
                (isDelivery)
                ? <Row xs={1} xl={2} className='g-3 mb-5'>
                    <Col>
                      <div className="input-labeled">
                        <span>Улица</span>
                        <input type="text" placeholder='Улица' />
                      </div>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Дом</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Корпус</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Подъезд</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Этаж</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Квартира</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Домофон</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                : <Row xs={1} xl={2} className='g-4 g-xxl-5 mb-5'>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address' defaultChecked={true}/>
                      <span>улица А. Губкина, д. 17</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address'/>
                      <span>Проспект Победы 156/26</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                </Row>
              }
              
              <div className="box-gray">
                <h5>Ваш заказ</h5>
                <ul className='list-unstyled'>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <div className="cart-box">
                <div className='mb-2'>Комментарий к заказу</div>
                <textarea rows="3" defaultValue={'Перезвоните пожалуйста, уточню детали'} className='mb-4'></textarea>

                <div className="d-flex justify-content-between my-2">
                  <span>Стоимость товаров</span>
                  <span>20 960 ₽</span>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <span>Доставка</span>
                  <span className='main-color fw-5'>бесплатно</span>
                </div>
                <hr className='my-3'/>
                <div className="fs-11 fw-5 d-flex justify-content-between mb-4">
                  <span>Итоговая сумма</span>
                  <span>20 960 ₽</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className='bg-lightgreen green p-2 fs-09 fw-5 rounded-3'>Доступно 354 бонуса</div>
                  <label>
                    <span className='me-1'>Списать</span>
                    <input type="checkbox" role="switch"/>
                  </label>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <input type="text" placeholder='0' defaultValue={300} className='w-100p py-2 px-3'/>
                  <button type='button' className='btn-10 fs-09 ms-2'>списать все бонусы</button>
                </div>

                <div className="priceFixed">
                  <div className='d-md-none'>
                    <div className="fs-12">20 960 ₽</div>
                    <div className='fs-09 dark-gray'>● 5 товаров</div>
                  </div>
                  <Link to='accepted' className='btn-2 mt-md-3 w-100 flex-1 ms-2 ms-sm-4 ms-md-0'>
                    <span className='fw-4'>Заказать</span>
                  </Link>
                </div>
                
                <div className='fw-5 fs-09 w-100 rounded-3 color-1-light-bg main-color p-2 mt-3'>34 бонуса будут начислены за этот заказ</div>
              </div>
            </Col>
          </Row>
        </form>
        {/* <form className='cart'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} md={6} xl={8}>
              <Row xs={1} xl={2} className='g-4 g-xxl-5'>
                <Col>
                  <div className='mb-2'>Получатель</div>
                  <input type="text" placeholder='Введите имя' className='mb-4'/>

                  <div className='mb-2'>Номер телефона</div>
                  <input type="tel" placeholder='+7–___–___–__–__' className='mb-4'/>

                  <div className="d-flex align-items-center justify-content-between my-4 my-xl-5">
                    <p>Количество персон</p>
                    <CountInput dis={false} />
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className='btn-green w-auto fw-6 rounded-3'>Доступно 344 бонуса</div>
                    <label>
                      <span className='me-1 me-sm-3'>Списать</span>
                      <input type="checkbox" role="switch" />
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className='mb-2'>Улица</div>
                  <input type="text" placeholder='Улица' className='mb-4'/>
                  <Row xs={3} className='gx-2 gx-sm-4'>
                    <Col>
                      <div className='mb-2'>Дом</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Корпус</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Подъезд</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Этаж</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Квартира</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                    <Col>
                      <div className='mb-2'>Домофон</div>
                      <input type="text" className='mb-4'/>
                    </Col>
                  </Row>
                  <div className="d-flex">
                    <input type="text" placeholder='Количество бонусов для списания'/>
                    <button type='button' className='btn-10 ms-2 ms-sm-4'>Все</button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <div className="cart-box mb-4">
                <h6>Ваш заказ</h6>
                <ul className='list-unstyled'>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                </ul>
              </div>

              <div className="d-flex justify-content-between my-2">
                <span>Стоимость товаров</span>
                <span>1 880 ₽</span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span>Доставка</span>
                <span className='main-color'>бесплатно</span>
              </div>
              <hr className='my-3'/>
              <div className="d-flex justify-content-between mb-4">
                <span className='fw-6 fs-11'>Итоговая сумма</span>
                <span className='fw-6'>1 880 ₽</span>
              </div>

              <div className='btn-6 fw-6 w-100 rounded-3 mt-3'>34 бонуса будут начислены за этот заказ</div>
              <button type='submit' className='btn-3 mt-3 w-100'>
                <span className='fw-4'>Заказать</span>
              </button>
            </Col>
          </Row>
        </form> */}
      </Container>
    </main>
  );
};

export default Checkout;