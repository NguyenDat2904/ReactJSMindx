import classnames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classnames.bind(styles);

function Button({ children, primary, green, gray, className }) {
    const classes = cx('wrapper', { [className]: className, primary, green, gray });
    return <button className={classes}>{children}</button>;
}

export default Button;
