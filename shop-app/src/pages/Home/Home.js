import classnames from 'classnames/bind';
import { useState } from 'react';
import styles from './Home.module.scss';
import { v4 as uuidv4 } from 'uuid';
import SideBar from '../../components/SideBar/SideBar';
import FreeShip from '../../components/FreeShip/FreeShip';
import NavBar from '../../components/NavBar/NavBar';
import ProductCard from '../../components/ProductCard/ProductCard';

import { Link } from 'react-router-dom';
import SlideShow from '../../components/SlideShow/SlideShow';

const cx = classnames.bind(styles);

function Home({ addCount, productShoes }) {
    const [renderProduct, setRenderProduct] = useState(productShoes);
    const productCard = renderProduct.map((student, index) => {
        return (
            <Link key={index} to="/product">
                <ProductCard {...student} addCount={addCount} />
            </Link>
        );
    });
    return (
        <main>
            <section className={cx('flex-container', 'first')}>
                <SideBar />
                <SlideShow data={productShoes} />
            </section>
            <section className={cx('flex-container', 'two')}>
                <FreeShip />
                <FreeShip />
                <FreeShip />
                <FreeShip />
            </section>
            <NavBar seeAll />
            <section className={cx('flex-container', 'three')}>{productCard}</section>
        </main>
    );
}

export default Home;
