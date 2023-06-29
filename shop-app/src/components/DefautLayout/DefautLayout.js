import Header from './Header/Header';
import Footer from './Footer/Footer';
import classnames from 'classnames/bind';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from '../../pages/Home/Home';
import shoes1 from '../../assets/img/product4/1.jpg';
import shoes2 from '../../assets/img/product4/2.jpg';
import shoes3 from '../../assets/img/product4/3.jpg';
import shoes4 from '../../assets/img/product4/4.jpg';
import shoes5 from '../../assets/img/product4/5.png';
import shoes6 from '../../assets/img/product4/6.png';
import shoes7 from '../../assets/img/product4/7.png';
import shoes8 from '../../assets/img/product4/8.png';

import styles from './DefaultLayout.module.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const productShoes = [
        {
            title: 'Air Jordan Zion 1',
            img: shoes1,
            discount: 50,
            price: 100,
            star: Array(5).fill(null),
            id: 1,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes2,
            discount: 40,
            price: 120,
            star: Array(5).fill(null),
            id: 2,
        },
        {
            title: 'Air Jordan Zion Noah',
            img: shoes3,
            discount: 44,
            price: 110,
            star: Array(4).fill(null),
            id: 3,
        },
        {
            title: 'Nike Jordan PF Noah',
            img: shoes4,
            discount: 30,
            price: 115,
            star: Array(3).fill(null),
            id: 4,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes5,
            discount: 10,
            price: 200,
            star: Array(5).fill(null),
            id: 5,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes6,
            discount: 20,
            price: 320,
            star: Array(2).fill(null),
            id: 6,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes7,
            discount: 15,
            price: 920,
            star: Array(5).fill(null),
            id: 7,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes8,
            discount: 5,
            price: 520,
            star: Array(4).fill(null),
            id: 8,
        },
    ];
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
    const [details, setdetails] = useState([]);
    const handleShoes = (txt) => {
        setdetails(txt);
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
