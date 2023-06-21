import { RightIcon } from '../../Icon/Icon';
import classnames from 'classnames/bind';
import styles from './Item.module.scss';
const cx = classnames.bind(styles);
function Item({ text }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{text}</h2>
            <RightIcon className={cx('icon')} />
        </div>
    );
}

export default Item;
