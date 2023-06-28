import classnames from 'classnames/bind';
import styles from './TxtProduct.module.scss';
import Button from '../../../components/Button/Button';
import { StarIcon } from '../../../components/Icon/Icon';

const cx = classnames.bind(styles);

function TxtProduct() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>SHOES ADIDAS ULTRABOOST 21</h2>
            <div className={cx('flex-container', 'review')}>
                <div>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className={cx('line')}>l</div>
                <p className={cx('review-txt')}>150 Review</p>
                <div className={cx('line')}>l</div>
                <p className={cx('review-txt')}>3k Sold</p>
            </div>
            <div className={cx('details')}>
                <p className={cx('details-text')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia explicabo voluptatem animi
                    perspiciatis libero nihil voluptates iusto consequuntur, autem, exercitationem quisquam iste?
                    Doloremque corporis quidem officiis ullam ipsa itaque?
                </p>
                <div className={cx('line')}></div>
                <div className={cx('flex-container', 'code-product')}>
                    <p className={cx('code-txt')}>
                        Availability: <span>In Stock</span>
                    </p>
                    <p className={cx('code-txt')}>Brand: Adiddas</p>
                    <p className={cx('code-txt')}>SKU: 83690/32</p>
                </div>
                <div className={cx('flex-container', 'price')}>
                    <p className={cx('sold-price')}>
                        <strong>$120</strong>
                    </p>
                    <p className={cx('discount')}>50% Off</p>
                </div>
                <p className={cx('select')}>Select Color:</p>
                <div className={cx('flex-container', 'select-radio')}>
                    <input type="radio" name="color" />
                    <input type="radio" name="color" />
                    <input type="radio" name="color" />
                    <input type="radio" name="color" />
                </div>
                <p className={cx('select')}>Quality:</p>
                <div className={cx('flex-container', 'quality')}>
                    <div className={cx('number')}>
                        <div>-</div>
                        <div>2</div>
                        <div>+</div>
                    </div>
                    <Button className={cx("add-cart")} primary>Add to cart</Button>
                </div>
            </div>
        </div>
    );
}

export default TxtProduct;
