import classnames from 'classnames/bind';
import styles from './ImgProduct.module.scss';
import shoes8 from '../../../assets/img/product4/7.png';

const cx = classnames.bind(styles);

function ImgProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('show')}>
                <img src={shoes8} alt="" />
            </div>
            <div className={cx('show-all')}>
                <div className={cx('show', 'show-item')}>
                    <img src={shoes8} alt="" />
                </div>
                <div className={cx('show', 'show-item')}>
                    <img src={shoes8} alt="" />
                </div>
                <div className={cx('show', 'show-item')}>
                    <img src={shoes8} alt="" />
                </div>
                <div className={cx('show', 'show-item')}>
                    <img src={shoes8} alt="" />
                </div>
                <div className={cx('show', 'show-item')}>
                    <img src={shoes8} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ImgProduct;
