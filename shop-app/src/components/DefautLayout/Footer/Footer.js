import classnames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classnames.bind(styles);

function Footer() {
    return (
        <>
            <section className={cx('wrapper')}>
                <div className={cx('col')}>
                    <h2>Tìm cửa hàng</h2>
                    <p style={{ marginTop: 5 }}>Tìm cửa hàng gần nhất</p>
                    <p>Mua hàng từ xa</p>
                    <p className={cx('urgent')}>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                    <h2 style={{ marginTop: 10 }}>Phương thức thanh toán</h2>
                </div>
                <div className={cx('col')}>
                    <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
                    <p>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
                    <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
                    <h2 style={{ marginTop: 15 }}>Đối tác dịch vụ bảo hành</h2>
                    <p>Điện Thoại - Máy tính</p>
                    <h2 style={{ marginTop: 18 }}>Trung tâm bảo hành uỷ quyền Apple</h2>
                </div>
                <div className={cx('col')}>
                    <p>Mua hàng và thanh toán Online</p>
                    <p>Mua hàng trả góp Online</p>
                    <p>Tra thông tin đơn hàng</p>
                    <p>Tra điểm Smember</p>
                    <p>Tra thông tin bảo hành</p>
                    <p className={cx('black')}>Tra cứu hoá đơn VAT điện tử</p>
                    <p>Trung tâm bảo hành chính hãng</p>
                    <p>Quy định về việc sao lưu dữ liệu</p>
                    <p className={cx('urgent')}>Dịch vụ bảo hành điện thoại</p>
                </div>
                <div className={cx('col')}>
                    <p>Quy chế hoạt động</p>
                    <p>Chính sách Bảo hành</p>
                    <p>Liên hệ hợp tác kinh doanh</p>
                    <p>Khách hàng doanh nghiệp (B2B)</p>
                    <p className={cx('urgent')}>Ưu đãi thanh toán</p>
                    <p>Tuyển dụng</p>
                </div>
            </section>
            <section className={cx('wrapper-bottom')}>
                <div className={cx('top')}>
                    <div className={cx('col')}>
                        <p>Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11</p>
                        <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                        <p>iPhone cũ giá rẻ iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</p>
                    </div>
                    <div className={cx('col')}>
                        <p>Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A</p>
                        <p>Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia</p>
                        <p>Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53</p>
                    </div>
                    <div className={cx('col')}>
                        <p>Laptop - Laptop HP - Laptop Dell - Laptop Acer</p>
                        <p>Microsoft Surface - Laptop Lenovo - Laptop Asus</p>
                        <p>Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình</p>
                    </div>
                </div>
                <p className={cx("end")}>
                    Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp
                    ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt
                    Nam. Điện thoại: 028.7108.9666.
                </p>
            </section>
        </>
    );
}

export default Footer;
