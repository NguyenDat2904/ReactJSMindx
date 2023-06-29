import classnames from 'classnames/bind';
import styles from './Review.module.scss';
import { StarIcon } from '../../../components/Icon/Icon';
import Pagination from '../../../components/Pagination/Pagination';
import Button from '../../../components/Button/Button';
const cx = classnames.bind(styles);

function Review() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Customer Reviews</h2>
            <div className={cx('list-review')}>
                <div className={cx('customer')}>
                    <img src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg" alt="" />
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>Samanatha Smith</h3>
                        <div className={cx('star')}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <p className={cx('desc')}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore, ab consequuntur
                            doloribus, corrupti libero, mollitia odit suscipit quam aliquid voluptates voluptatum neque
                            obcaecati ipsam dolorem esse hic consectetur alias.
                        </p>
                        <p className={cx('time')}>27 May, 2018</p>
                    </div>
                </div>
                <div className={cx('customer')}>
                    <img src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg" alt="" />
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>Samanatha Smith</h3>
                        <div className={cx('star')}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <p className={cx('desc')}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore, ab consequuntur
                            doloribus, corrupti libero, mollitia odit suscipit quam aliquid voluptates voluptatum neque
                            obcaecati ipsam dolorem esse hic consectetur alias.
                        </p>
                        <p className={cx('time')}>27 May, 2018</p>
                    </div>
                </div>
                <div className={cx('customer')}>
                    <img src="https://photocross.net/wp-content/uploads/2020/03/anh-chan-dung.jpg" alt="" />
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>Samanatha Smith</h3>
                        <div className={cx('star')}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <p className={cx('desc')}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore, ab consequuntur
                            doloribus, corrupti libero, mollitia odit suscipit quam aliquid voluptates voluptatum neque
                            obcaecati ipsam dolorem esse hic consectetur alias.
                        </p>
                        <p className={cx('time')}>27 May, 2018</p>
                    </div>
                </div>
                <Pagination />
            </div>
            <div className={cx('write')}>
                <h2 className={cx('title')}>Write Review</h2>
                <div className={cx('star')}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <textarea rows="10" placeholder="Write hear"></textarea>
                <Button className={cx("write-btn")} primary>Post Your Review</Button>
            </div>
        </div>
    );
}

export default Review;
