import classnames from 'classnames/bind';
import styles from './Form.module.scss';
import Button from '../../Button/Button';

const cx = classnames.bind(styles);

function Form({ title, data = [], btn, text, onClick, onForgot }) {
    return (
        <div className={cx('wrapper')}>
            <h2>{title}</h2>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('input')}>
                        <input type={data.type} placeholder={data.placeholder} />
                        {data.forgot && (
                            <div onClick={onForgot} className={cx(data.className, 'btn')}>
                                {data.children}
                            </div>
                        )}
                    </div>
                );
            })}

            <Button className={cx('login')} primary>
                {btn}
            </Button>
            <p onClick={onClick} replace>
                {text}
            </p>
        </div>
    );
}

export default Form;
