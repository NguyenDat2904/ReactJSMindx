import classnames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import { CardIcon, StarIcon } from '../Icon/Icon';
import Button from '../Button/Button';

const cx = classnames.bind(styles);

function ProductCard({ img, title, id, price, discount, star, idCode, addCount }) {
    const handleCount = (event) => {
        addCount(img, title, price, idCode);
        event.preventDefault();
    };
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
                    <div onClick={handleCount}>
                        <CardIcon className={cx('card-icon')} />
                    </div>
                </div>

                <Button className={cx('btn-card')} green>
                    Available
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
