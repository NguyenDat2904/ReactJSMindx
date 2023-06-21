import classnames from 'classnames/bind';
import styles from './Logo.module.scss';
import { LogoIcon } from '../../Icon/Icon';
const cx = classnames.bind(styles);

function Logo() {
    return (
        <div className={cx("wrapper")}>
            <h1>Shop App</h1>
            <LogoIcon className={cx("logo")} />
        </div>
    );
}

export default Logo;
