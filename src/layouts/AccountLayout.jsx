import React from 'react';
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import AccountMenu from '../pages/account/AccountMenu';
import {Link} from 'react-router-dom';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import SettingsIcon from '../components/svgs/SettingsIcon';
import IconDog from '../components/svgs/IconDog';
import { useSelector } from "react-redux";

const AccountLayout = ({isMobile}) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className='account inner'>
      <Container className='pt-4 pt-lg-0'>
        {
          (isMobile)
          ? <Outlet/>
          : <div>
            <h1 className='mb-2'>Личный кабинет</h1>
            <NavBreadcrumbs
              breadcrumbs={[{ title: "Аккаунт", link: "/account" }]}
            />
            <div className="account-top">
              <div className="account-top-user box">
                <div className='px-3 py-2 py-xl-0 d-flex align-items-center justify-content-between'>
                  <div>
                    <div className='d-flex align-items-center'>
                      <span className="fw-5">{user?.firstName ?? "Имя"}</span>
                      <span className='fs-08 color-2 mx-2'>●</span>
                      {
                        (user?.phone) && <a href={"tel:" + user.phone}>{user.phone}</a>
                      }
                    </div>
                    {
                      (user?.email) &&
                      <div className='mt-1 dark-gray'>
                        <a href={"mailer:" + user.email}>{user.email}</a>
                      </div>
                    }
                  </div>
                  <Link to='/account/settings' className='dark-gray ms-4'>
                    <SettingsIcon/>
                  </Link>
                </div>
                <hr />
                <div className='px-3 py-2 py-xl-0 d-flex align-items-center justify-content-between'>
                  <div className="pet-icon">
                    <IconDog/>
                  </div>
                  <div className='ms-3'>
                    <h5 className='fs-10 fw-5 mb-2'>Тотошка</h5>
                    <div>
                      <span>5 лет</span>
                      <span className='fs-08 color-2 mx-2'>●</span>
                      <span>15 кг</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box px-3 w-fit d-flex flex-column justify-content-center text-center">
                <p className='fs-09 fw-6'>Вы можете потратить</p>
                <p className='main-color'>
                  <span className='fs-18'>{user.point}</span>&nbsp;<span className='fw-6 fs-11'>бонуса</span>
                </p>
              </div>

              <img src="imgs/discount2.jpg" alt="discount" className='account-top-img'/>
            </div>

            <div className="row gx-3 gx-xl-4">
              <div className="col-4 col-lg-3">
                <AccountMenu/>
              </div>
              <div className="col-8 col-lg-9"><Outlet/></div>
            </div>
          </div>
        }
      </Container>
    </main>
  );
};

export default AccountLayout;