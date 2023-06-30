import Header from './Header/Header';
import Footer from './Footer/Footer';
import classnames from 'classnames/bind';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from '../../pages/Home/Home';
import { productShoes } from '../Img/Img';

import styles from './DefaultLayout.module.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const newProduct = productShoes.map((product) => ({ ...product, idCode: uuidv4() }));
    const [toggle, setToggle] = useState(false);
    const [showRegister, setShowRegister] = useState(true);
    const [showForgot, setShowForgot] = useState(true);
    const [count, setCount] = useState(0);

    const handlePopup = () => {
        setToggle(!toggle);
    };
    const handleRegister = () => {
        setShowRegister(!showRegister);
    };
    const handleForgot = () => {
        setShowForgot(false);
    };
    const buttonClickHandlers = {
        0: handlePopup,
        1: handleRegister,
        2: handleForgot,
    };

    const [cart, setCart] = useState([]);
    const onHandlerCount = (img, title, price, idCode) => {
        const productIndex = cart.findIndex((product) => product.id === idCode);

        if (productIndex !== -1) {
            const updatedCart = cart.map((product) => {
                if (product.id === idCode) {
                    return { ...product, quality: product.quality + 1 };
                }
                return product;
            });
            setCart(updatedCart);
            setCount(count);
        } else {
            const newProduct = {
                id: idCode,
                title: title,
                price: price,
                img: img,
                quality: 1,
            };
            setCart([...cart, newProduct]);
            setCount(count + 1);
        }
    };
    const addCount = (img, title, price, idCode) => {
        onHandlerCount(img, title, price, idCode);
    };
    const [details, setDetails] = useState([]);
    const handleShoes = (txt) => {
        setDetails(txt);
    };
    return (
        <div className={cx('wrapper')}>
            <Header onClick={handlePopup} count={count} cart={cart} />
            {React.Children.map(children, (child) => {
                if (child.type === Home) {
                    return React.cloneElement(child, {
                        addCount: addCount,
                        productShoes: newProduct,
                        handleShoes: handleShoes,
                    });
                } else if (child.type === ProductDetail) {
                    return React.cloneElement(child, {
                        addCount: addCount,
                        productShoes: newProduct,
                        details: details,
                    });
                }
                return child;
            })}
            <Footer />
            {toggle && (
                <div className={cx('overlay')}>
                    <>
                        {showForgot && showRegister && (
                            <Popup
                                onClicks={buttonClickHandlers}
                                className={cx('poppup')}
                                title="Welcome to Shop App"
                                data={[
                                    { type: 'text', placeholder: 'Email@mail.com' },
                                    {
                                        type: 'password',
                                        placeholder: 'Password',
                                        forgot: true,
                                        children: '?',
                                    },
                                ]}
                                btn="Login"
                                text="Create An Account"
                                leftForm
                            />
                        )}
                        {showForgot && !showRegister && (
                            <Popup
                                onClicks={buttonClickHandlers}
                                className={cx('poppup')}
                                title="Welcome to Shop App"
                                data={[
                                    { type: 'text', placeholder: 'User Name' },
                                    { type: 'text', placeholder: 'Email@mail.com' },
                                    {
                                        type: 'password',
                                        placeholder: 'Password',
                                        forgot: true,
                                        children: 'Show',
                                        className: 'show',
                                    },
                                    { type: 'password', placeholder: 'Confirm Password' },
                                ]}
                                btn="Register"
                                text="Login"
                                rightForm
                            />
                        )}
                        {!showForgot && (
                            <Popup
                                onClicks={buttonClickHandlers}
                                className={cx('poppup')}
                                title="Forgot Password?"
                                data={[
                                    { type: 'text', placeholder: 'Email@mail.com' },
                                    {
                                        type: 'text',
                                        placeholder: 'Code',
                                        forgot: true,
                                        children: 'Send Code',
                                        className: 'show',
                                    },
                                ]}
                                btn="Recover Password"
                                text="Login"
                                leftForm
                            />
                        )}
                    </>
                </div>
            )}
        </div>
    );
}

export default DefaultLayout;
