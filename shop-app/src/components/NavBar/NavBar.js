import classnames from 'classnames/bind';
import styles from './NavBar.module.scss';
const cx = classnames.bind(styles);

function NavBar() {
    return (
        <div className={cx('wrapper')}>
            <h2>Bestsellers</h2>
            <p>Show more...</p>
        </div>
    );
}

export default NavBar;
