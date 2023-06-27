import classnames from 'classnames/bind';
import { useState } from 'react';
import styles from './SlideShow.module.scss';
import banner from '../../assets/img/slide/Photos.png';
const cx = classnames.bind(styles);

function SlideShow() {
    const [showImg, setShowImg] = useState(banner);
    const handleSrcImg = (e) => setShowImg(e.target.src);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <img src={showImg} alt="" className={cx('slide')} />
            </div>
            <div className={cx('list-img')}>
                <img src={banner} onClick={handleSrcImg} alt="" />
                <img src={banner} onClick={handleSrcImg} alt="" />
                <img src={banner} onClick={handleSrcImg} alt="" />
            </div>
        </div>
    );
}

export default SlideShow;
