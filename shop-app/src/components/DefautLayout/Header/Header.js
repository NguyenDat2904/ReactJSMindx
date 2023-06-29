import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import { CartIcon, UserIcon, SearchIcon, MenuIcon } from '../../Icon/Icon';
import Button from '../../Button/Button';
import ModalTippy from '../../ModalTippy/ModalTippy';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);
function Header({ onClick, count, cart }) {
    let subTotal = 0;
    let total = 0;
    let totalShip = 10 * count;
    const cardProduct = cart.map((product) => {
        subTotal += product.price * product.quality;
        total = subTotal + totalShip;
        return (
            <>
                <div key={product.id} className={cx('product')}>
                    <img src={product.img} alt="" />
                    <div className={cx('product-body')}>
                        <h2 className={cx('title')}>{product.title}</h2>
                        <p>
                            {product.quality} x <strong>${product.price}</strong>
                        </p>
                    </div>
                    <div className={cx('close')}>X</div>
                </div>
                <div className={cx('line')}></div>
            </>
        );
    });
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
                <Link to="/">
                    <h2 className={cx('logo')}>Shop App</h2>
                </Link>
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
                                    <>
                                        {cardProduct}
                                        {cart.length !== 0 && (
                                            <div>
                                                <div className={cx('price')}>
                                                    <div className={cx('money')}>
                                                        <h4>Subtotal</h4>
                                                        <p>$ {subTotal}</p>
                                                    </div>
                                                    <div className={cx('money')}>
                                                        <h4>Shipping</h4>
                                                        <p>$ {totalShip}</p>
                                                    </div>
                                                    <div className={cx('money')}>
                                                        <h4>Total</h4>
                                                        <p>$ {total}</p>
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
                                            </div>
                                        )}
                                    </>
                                </ModalTippy>
                            </div>
                        )}
                    >
                        <div className={cx('card-icon')}>
                            <CartIcon className={cx('icon')} />
                            <div className={cx('count')}>{count}</div>
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
