import classnames from 'classnames/bind';
import styles from './Header.module.scss';

import { CartIcon, UserIcon, SearchIcon, MenuIcon } from '../../Icon/Icon';

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
                    <CartIcon className={cx('icon')} />
                    <div onClick={onClick}>
                        <UserIcon className={cx('icon')} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
