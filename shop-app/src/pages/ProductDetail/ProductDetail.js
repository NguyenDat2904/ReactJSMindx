import classnames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import NavBar from '../../components/NavBar/NavBar';

const cx = classnames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx("wrapper")}>
            <NavBar tabPage />
        </div>
    );
}

export default ProductDetail;
