<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Spin, Alert } from "antd";
import "./Checkout.css";
import Basket from "./Basket";
import { updateCart } from "../Redux/Cart/actions";
import { useNavigate, useParams } from "react-router-dom";
=======
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Spin, Alert } from 'antd';
import './Checkout.css';
import Basket from './Basket';
import { updateCart } from '../Redux/Cart/actions';
import { useNavigate, useParams,  } from 'react-router-dom';
>>>>>>> main
const Checkout = () => {
  // const isAuth = useSelector((store) => store.Auth.isAuth);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
<<<<<<< HEAD
  const { id } = useParams();
  const navigate = useNavigate();
=======
  const { id } = useParams()
  const navigate = useNavigate() 
>>>>>>> main
  const [cartDetails, setCartDetails] = useState({
    products: [],
    totalItems: 0,
    bill: 0,
    savings: 0,
  });
  useEffect(() => {
    if (state === 1) {
      var stateTime = setTimeout(() => {
<<<<<<< HEAD
        dispatch(updateCart("order-confirmed"));
=======
        dispatch(updateCart('order-confirmed'));
>>>>>>> main
        setState(2);
      }, 8000);
    }

    return () => {
      clearTimeout(stateTime);
    };
  }, [state]);

  const cart = useSelector((store) => store.cart.cartItems);
  useEffect(() => {
    let bill = 0;
    let itemCount = 0;
    let tempSavings = 0;
    let items = [];

    if (cart) {
      for (let x in cart) {
        items.push(cart[x].product);
<<<<<<< HEAD
        let mrp = cart[x].product.item_price;
        if (!mrp) {
          mrp = cart[x].product.item_final_price;
        }
        tempSavings += cart[x].quantity * mrp;
        bill += cart[x].quantity * cart[x].product.item_final_price
=======
        let mrp = cart[x].product.mrp;
        if (!mrp) {
          mrp = cart[x].product.cost;
        }
        tempSavings += cart[x].quantity * mrp;
        bill += cart[x].quantity * cart[x].product.cost;
>>>>>>> main
        itemCount = itemCount + 1;
      }
    }
    setCartDetails({
      totalItems: itemCount,
      bill: bill.toFixed(2),
      savings: tempSavings,
      products: items,
    });
  }, [cart]);

  return (
<<<<<<< HEAD
    <div className="container">
      {id === "payment" ? (
        <div style={{ minHeight: "100vh" }}>
          {state !== 2 ? (
            <div className="heading">Payment Details</div>
          ) : (
            <div className="heading">Order Confirmed</div>
          )}

          <div className="payment">
            {state === 0 ? (
              <Radio>
                <div className="payment-option">
                  <img
                    src="https://www.jiomart.com/msassets/images/jio-money.png"
                    alt="pay"
                  />
                  <span style={{ marginLeft: "25px", marginRight: "50px" }}>
=======
    <div className='container'>
      {id === 'payment' ? (
        <div style={{ minHeight: '100vh' }}>
          {state !== 2 ? (
            <div className='heading'>Payment Details</div>
          ) : (
            <div className='heading'>Order Confirmed</div>
          )}

          <div className='payment'>
            {state === 0 ? (
              <Radio>
                <div className='payment-option'>
                  <img
                    src='https://www.jiomart.com/msassets/images/jio-money.png'
                    alt='pay'
                  />
                  <span style={{ marginLeft: '25px', marginRight: '50px' }}>
>>>>>>> main
                    Jio Money
                  </span>
                  <button
                    onClick={() => setState(1)}
                  >{`Pay ₹${cartDetails.bill}`}</button>
                </div>
              </Radio>
            ) : state === 1 ? (
              <div>
<<<<<<< HEAD
                <Spin tip="Loading..." delay={1000}>
                  <Alert
                    message="Please Wait while we confirm your payment"
                    description="This might take a few seconds."
                    type="info"
=======
                <Spin tip='Loading...' delay={1000}>
                  <Alert
                    message='Please Wait while we confirm your payment'
                    description='This might take a few seconds.'
                    type='info'
>>>>>>> main
                  />
                </Spin>
              </div>
            ) : (
              <div>
                <p>Thank you for shopping at JioMart.</p>
                <p>
<<<<<<< HEAD
                  {" "}
                  Your order{" "}
                  <span style={{ color: "#089cdb" }}>
                    15983533739052545M
                  </span>{" "}
=======
                  {' '}
                  Your order{' '}
                  <span style={{ color: '#089cdb' }}>
                    15983533739052545M
                  </span>{' '}
>>>>>>> main
                  is booked in JioMart.
                </p>
                <p>
                  You can also check the details and status of your order any
                  time in Your Account - Orders section in JioMart.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
<<<<<<< HEAD
        <div className="dynamic-div">
          {id === "review" ? (
            <div className="heading">Order Summary</div>
          ) : (
            <div className="heading">{`My Cart(${cartDetails.totalItems})`}</div>
          )}
          {id === "review" && (
            <div className="address-container">
              <h2 style={{ fontFamily: "jioBold" }}>Select Delivery Address</h2>
              <div className="address">
                <div className="default-address">
=======
        <div className='dynamic-div'>
          {id === 'review' ? (
            <div className='heading'>Order Summary</div>
          ) : (
            <div className='heading'>{`My Cart(${cartDetails.totalItems})`}</div>
          )}
          {id === 'review' && (
            <div className='address-container'>
              <h2 style={{ fontFamily: 'jioBold' }}>Select Delivery Address</h2>
              <div className='address'>
                <div className='default-address'>
>>>>>>> main
                  <Radio>
                    <p>Eve Holt</p>
                    <p>
                      E-99, Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Iure eum similique quis debitis corrupti ipsam
                      dicta, pariatur
                    </p>
                    <p>+91 - 9999999999</p>
                  </Radio>
                </div>
                <button>Change/ Add Address</button>
              </div>
            </div>
          )}

          <Basket cartDetails={cartDetails} />
        </div>
      )}
<<<<<<< HEAD
      <div className="pay-details">
        {state !== 2 ? (
          <section className="bill">
            <p style={{ fontFamily: "jioBold", fontSize: "18px" }}>
=======
      <div className='pay-details'>
        {state !== 2 ? (
          <section className='bill'>
            <p style={{ fontFamily: 'jioBold', fontSize: '18px' }}>
>>>>>>> main
              Payment Details
            </p>
            <div>
              <p>MRP Total</p>
              <p>₹{cartDetails.savings} </p>
            </div>
            <div>
              <p>Product Discount</p>
              <p>{-(cartDetails.savings - cartDetails.bill).toFixed(2)} </p>
            </div>
            <div>
              <p>Total Amount</p>
              <p>₹{cartDetails.bill} </p>
            </div>
<<<<<<< HEAD
            <div style={{ justifySelf: "flex-end" }}>
=======
            <div style={{ justifySelf: 'flex-end' }}>
>>>>>>> main
              <p>{`You Save ₹${(cartDetails.savings - cartDetails.bill).toFixed(
                2
              )}`}</p>
            </div>
          </section>
        ) : null}
        {cartDetails.totalItems !== 0 && (
<<<<<<< HEAD
          <section className="pay-btn">
            {id === "review" ? (
              <button onClick={() => navigate("/checkout/payment")}>
                {"Make Payment"}
              </button>
            ) : id === "cart" ? (
              <button
                onClick={() =>
                  // isAuth
                  true ? navigate("/checkout/review") : navigate("/login")
                }
              >
                {"Place Order"}
=======
          <section className='pay-btn'>
            {id === 'review' ? (
              <button onClick={() => navigate('/checkout/payment')}>
                {'Make Payment'}
              </button>
            ) : id === 'cart' ? (
              <button
                onClick={() =>
                  // isAuth
                  true
                    ? navigate('/checkout/review')
                    : navigate('/login')
                }
              >
                {'Place Order'}
>>>>>>> main
              </button>
            ) : null}
          </section>
        )}
      </div>
    </div>
  );
};

export default Checkout;
