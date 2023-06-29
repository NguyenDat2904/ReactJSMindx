import classnames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import ImgProduct from './ImgProduct/ImgProduct';
import TxtProduct from './TxtProduct/TxtProduct';
import Review from './Review/Review';
import ProductList from '../../components/ProductList/ProductList';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classnames.bind(styles);

function ProductDetail({ productShoes, addCount }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div id="top" className={cx('wrapper')}>
            <NavBar tabPage />
            <div className={cx('product')}>
                <ImgProduct />
                <TxtProduct />
            </div>
            <NavBar seeAll />
            <Review />
            <NavBar seeAll />
            <ProductList productShoes={productShoes} addCount={addCount} />
        </div>
    );
}

export default ProductDetail;
