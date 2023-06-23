import Header from './Header/Header';
import Footer from './Footer/Footer';
import classnames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Popup from '../Popup/Popup';
import { useState } from 'react';
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const [toggle, setToggle] = useState(false);
    const [showRegister, setShowRegister] = useState(true);
    const [showForgot, setShowForgot] = useState(true);
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
    return (
        <div className={cx('wrapper')}>
            <Header onClick={handlePopup} />
            {children}
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
