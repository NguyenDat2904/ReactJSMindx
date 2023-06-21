import classnames from 'classnames/bind';
import styles from './Popup.module.scss';
import Logo from './Logo/Logo';
import Form from './Form/Form';
const cx = classnames.bind(styles);

function Popup({ className, title, data, btn, text, leftForm, rightForm, onClicks }) {
    const handleClick = (buttonIndex) => {
        onClicks[buttonIndex]();
    };
    return (
        <div className={className}>
            {leftForm && (
                <Form
                    title={title}
                    data={data}
                    btn={btn}
                    text={text}
                    onClick={() => handleClick(1)}
                    onForgot={() => handleClick(2)}
                />
            )}
            <Logo />
            {rightForm && (
                <Form
                    title={title}
                    data={data}
                    btn={btn}
                    text={text}
                    onClick={() => handleClick(1)}
                />
            )}
            <div className={cx('close-btn')} onClick={() => handleClick(0)}>
                X
            </div>
        </div>
    );
}

export default Popup;
