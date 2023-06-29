import classnames from 'classnames/bind';
import styles from './Pagination.module.scss';
const cx = classnames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('pagination')}>
                <li className={cx('page-item', 'active')}>
                    <a className={cx('page-link')}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className={cx('page-item', 'active-number')}>
                    <a className={cx('page-link')}>1</a>
                </li>
                <li className={cx('page-item')}>
                    <a className={cx('page-link')}>2</a>
                </li>
                <li className={cx('page-item')}>
                    <a className={cx('page-link')}>3</a>
                </li>
                <li className={cx('page-item')}>
                    <a className={cx('page-link')}>4</a>
                </li>
                <li className={cx('page-item')}>
                    <a className={cx('page-link')}>5</a>
                </li>
                <li className={cx('page-item')}>
                    <a className={cx('page-link')}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
