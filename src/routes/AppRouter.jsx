import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Contacts from '../pages/Contacts';
import Promo from '../pages/Promo';
import OfferPage from '../pages/OfferPage';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderAccepted from '../pages/OrderAccepted';
import AccountRouter from './AccountRouter';
import Registration from '../pages/Registration';
import Category from '../pages/Category';
import SearchResults from '../pages/SearchResults';
import AllArticles from '../pages/AllArticles';
import SingleArticle from '../pages/SingleArticle';
import Delivery from '../pages/Delivery';
import Policy from '../pages/Policy';
import AuthRoute from "./AuthRoute";
import Error from "../components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} errorElement={<Error />}/>
      <Route path="catalog" element={<Catalog/>} />
      <Route path="catalog/category/:categoryId" element={<Category/>} />
      <Route path="catalog/category/product/:productId" element={<Product/>} />
      <Route path="cart" element={<Cart/>} errorElement={<Error />} />
      <Route path="checkout" element={<Checkout/>} errorElement={<Error />} />
      <Route path="checkout/accepted" element={<OrderAccepted/>} />
      <Route path="promo" element={<Promo/>} />
      <Route path="promo/:saleId" element={<OfferPage/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="search" element={<SearchResults/>} />
      <Route path="articles" element={<AllArticles/>} />
      <Route path="articles/:id" element={<SingleArticle/>} />
      <Route path="delivery" element={<Delivery/>} />
      <Route path="policy" element={<Policy />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="account/*"
        element={
          <AuthRoute activate>
            <AccountRouter />
          </AuthRoute>
        }
      />

      <Route path="login" element={<Registration/>} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;