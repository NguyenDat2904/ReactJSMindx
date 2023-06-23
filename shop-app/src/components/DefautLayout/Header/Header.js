import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { CartIcon, UserIcon, SearchIcon, MenuIcon } from '../../Icon/Icon';
import Button from '../../Button/Button';
import ModalTippy from '../../ModalTippy/ModalTippy';
import shoes from '../../../assets/img/product1/1.jpg';

const cx = classnames.bind(styles);
function Header({ onClick }) {
    return (
        <header className={cx('header')}>
            <div className={cx('top')}>
                <ul className={cx('list-item')}>
                    <li className={cx('item')}>About Us</li>
                    <li className={cx('item')}>Contacts</li>
                    <li className={cx('item')}>Store</li>
                    <li className={cx('item')}>Track Order</li>
                </ul>
            </div>
            <div className={cx('bottom')}>
                <h2 className={cx('logo')}>Shop App</h2>
                <div className={cx('search')}>
                    <div className={cx('left')}>
                        <MenuIcon stroke="#2E2D2D" />
                        <h3>Categories</h3>
                    </div>
                    <input type="text" placeholder="Search Items" className={cx('center')} />
                    <SearchIcon className={cx('right')} />
                </div>
                <div className={cx('action')}>
                    <Tippy
                    
                        interactive
                        delay={[0, 400]}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <ModalTippy className={cx('modal')}>
                                    <div className={cx('product')}>
                                        <img src={shoes} alt="" />
                                        <div className={cx('product-body')}>
                                            <h2 className={cx('title')}>Adias Shoes</h2>
                                            <p>
                                                1 x <strong>$120</strong>
                                            </p>
                                        </div>
                                        <div className={cx('close')}>X</div>
                                    </div>
                                    <div className={cx('line')}></div>
                                    <div className={cx('price')}>
                                        <div className={cx('money')}>
                                            <h4>Subtotal</h4>
                                            <p>$120</p>
                                        </div>
                                        <div className={cx('money')}>
                                            <h4>Shipping</h4>
                                            <p>$10</p>
                                        </div>
                                        <div className={cx('money')}>
                                            <h4>Total</h4>
                                            <p>$130</p>
                                        </div>
                                    </div>
                                    <div className={cx('btn-modal')}>
                                        <Button className={cx('view')} gray>
                                            View Cart
                                        </Button>
                                        <Button className={cx('checkout')} primary>
                                            Checkout
                                        </Button>
                                    </div>
                                </ModalTippy>
                            </div>
                        )}
                    >
                        <div>
                            <CartIcon className={cx('icon')} />
                        </div>
                    </Tippy>
                    <div onClick={onClick}>
                        <UserIcon className={cx('icon')} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
