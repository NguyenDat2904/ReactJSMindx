import classnames from 'classnames/bind';
import styles from './ModalTippy.module.scss';
const cx = classnames.bind(styles);

function ModalTippy({ className, children }) {
    return <div className={cx(className)}>{children}</div>;
}

export default ModalTippy;
