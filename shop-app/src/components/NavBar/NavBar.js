import classnames from 'classnames/bind';
import { RightIcon } from '../Icon/Icon';
import styles from './NavBar.module.scss';
const cx = classnames.bind(styles);

function NavBar({ seeAll, tabPage }) {
    return (
        <>
            {seeAll &&
            (
                <div className={cx('wrapper')}>
                    <h2>Bestsellers</h2>
                    <p>Show more...</p>
                </div>
            )}
            {tabPage && (
                <div className={cx('rectangle')}>
                    <p>Home</p>
                    <RightIcon className={cx('icon')} />
                    <p>Shoe</p>
                    <RightIcon className={cx('icon')} />
                    <p>Adidas Shoes</p>
                </div>
            )}
        </>
    );
}

export default NavBar;
