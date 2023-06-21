import classnames from 'classnames/bind';
import styles from './FreeShip.module.scss';
import { FreeShipIcon } from '../Icon/Icon';
const cx = classnames.bind(styles);

function FreeShip() {
    return (
        <div className={cx('wrapper')}>
            <FreeShipIcon />
            <div className={cx('text-box')}>
                <h2>Free Ship</h2>
                <p>For order from %50</p>
            </div>
        </div>
    );
}

export default FreeShip;
