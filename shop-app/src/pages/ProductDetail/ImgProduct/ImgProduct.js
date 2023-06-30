import classnames from 'classnames/bind';
import styles from './ImgProduct.module.scss';
import shoes8 from '../../../assets/img/product4/7.png';
import { useState } from 'react';

const cx = classnames.bind(styles);

function ImgProduct({ img = shoes8, list_img = [] }) {
    const [loadImg, setLoadImg] = useState(img);

    const handlerShowImg = (e) => setLoadImg(e.target.src);

    const showAll = list_img.map((img) => (
        <div className={cx('show', 'show-item')}>
            <img src={img} alt="" onClick={handlerShowImg} />
        </div>
    ));
    return (
        <div className={cx('wrapper')}>
            <div className={cx('show')}>
                <img src={loadImg} alt="" />
            </div>
            <div className={cx('show-all')}>{showAll}</div>
        </div>
    );
}

export default ImgProduct;
