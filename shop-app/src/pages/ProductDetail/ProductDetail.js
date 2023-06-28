import classnames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import ImgProduct from './ImgProduct/ImgProduct';
import TxtProduct from './TxtProduct/TxtProduct';

const cx = classnames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('wrapper')}>
            <NavBar tabPage />
            <div className={cx('product')}>
                <ImgProduct />
                <TxtProduct />
            </div>
            <NavBar seeAll />
        </div>
    );
}

export default ProductDetail;
