import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import SideBar from '../../components/SideBar/SideBar';
import FreeShip from '../../components/FreeShip/FreeShip';
import NavBar from '../../components/NavBar/NavBar';
import ProductCard from '../../components/ProductCard/ProductCard';

import shoes1 from '../../assets/img/product4/1.jpg';
import shoes2 from '../../assets/img/product4/2.jpg';
import shoes3 from '../../assets/img/product4/3.jpg';
import shoes4 from '../../assets/img/product4/4.jpg';
import shoes5 from '../../assets/img/product4/5.png';
import shoes6 from '../../assets/img/product4/6.png';
import shoes7 from '../../assets/img/product4/7.png';
import shoes8 from '../../assets/img/product4/8.png';
import { Link } from 'react-router-dom';


const cx = classnames.bind(styles);

function Home() {
    const productShoes = [
        {
            title: 'Air Jordan Zion 1',
            img: shoes1,
            discount: 50,
            price: 100,
            star: Array(5).fill(null),
            id: 1,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes2,
            discount: 40,
            price: 120,
            star: Array(5).fill(null),
            id: 2,
        },
        {
            title: 'Air Jordan Zion Noah',
            img: shoes3,
            discount: 44,
            price: 110,
            star: Array(4).fill(null),
            id: 3,
        },
        {
            title: 'Nike Jordan PF Noah',
            img: shoes4,
            discount: 30,
            price: 115,
            star: Array(3).fill(null),
            id: 4,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes5,
            discount: 10,
            price: 200,
            star: Array(5).fill(null),
            id: 5,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes6,
            discount: 20,
            price: 320,
            star: Array(2).fill(null),
            id: 6,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes7,
            discount: 15,
            price: 920,
            star: Array(5).fill(null),
            id: 7,
        },
        {
            title: 'Air Jordan Kids',
            img: shoes8,
            discount: 5,
            price: 520,
            star: Array(4).fill(null),
            id: 8,
        },
    ];
    return (
        <main>
            <section className={cx('flex-container', 'first')}>
                <SideBar />
                <h1>SlideShow</h1>
            </section>
            <section className={cx('flex-container', 'two')}>
                <FreeShip />
                <FreeShip />
                <FreeShip />
                <FreeShip />
            </section>
            <NavBar />
            <section className={cx('flex-container', 'three')}>
                {productShoes.map((product) => {
                    return (
                        <Link key={product.id} to="/product">
                            <ProductCard
                                id={product.id}
                                title={product.title}
                                img={product.img}
                                discount={product.discount}
                                price={product.price}
                                star={product.star}
                            />
                        </Link>
                    );
                })}
            </section>
        </main>
    );
}

export default Home;
