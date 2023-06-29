import { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const cx = classnames.bind(styles);

function ProductList({ addCount, productShoes, onClick }) {
    const [renderProduct, setRenderProduct] = useState(productShoes);
    const productCard = renderProduct.map((student, index) => {
        const handleCount = () => {
            onClick(student);
        };
        return (
            <Link key={index} to="/product">
                <div onClick={handleCount}>
                    <ProductCard {...student} addCount={addCount} />
                </div>
            </Link>
        );
    });
    return <section className={cx('flex-container', 'three')}>{productCard}</section>;
}

export default ProductList;
