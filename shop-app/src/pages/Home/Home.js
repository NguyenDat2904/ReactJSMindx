import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import SideBar from '../../components/SideBar/SideBar';
import FreeShip from '../../components/FreeShip/FreeShip';
import NavBar from '../../components/NavBar/NavBar';

import SlideShow from '../../components/SlideShow/SlideShow';
import ProductList from '../../components/ProductList/ProductList';

const cx = classnames.bind(styles);

function Home({ addCount, productShoes }) {
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
            <ProductList addCount={addCount} productShoes={productShoes} />
        </main>
    );
}

export default Home;
