import classnames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import { CardIcon, StarIcon } from '../Icon/Icon';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function ProductCard({ img, title, id, price, discount, star }) {
    return (
        <div className={cx('wrapper')}>
            <img src={img} alt="" />
            <div className={cx('body')}>
                <h2>{title}</h2>
                <h3>ID: {id}</h3>
                <div className={cx('feedback')}>
                    <div className={cx('star')}>
                        {star.map((star, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>
                    <p className={cx('discount')}>{discount}% Off</p>
                </div>
                <div className={cx('feedback')}>
                    <p className={cx('price')}>$ {price}</p>
                    <Link to="/product">
                        <CardIcon className={cx('card-icon')} />
                    </Link>
                </div>

                <button>Available</button>
            </div>
        </div>
    );
}

export default ProductCard;
