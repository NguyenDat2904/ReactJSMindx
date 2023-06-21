import classnames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { MenuIcon } from '../Icon/Icon';
import Item from './Item/Item';
const cx = classnames.bind(styles);

function SideBar() {
    const listMenu = [
        {
            text: 'Computer Paths',
        },
        {
            text: 'Hand Tools',
        },
        {
            text: 'Machine Tools',
        },
        {
            text: 'Power Tools',
        },
        {
            text: 'Storage Tools',
        },
        {
            text: 'Clothes & PPE',
        },
        {
            text: 'Electrical',
        },
        {
            text: 'Building Tools',
        },
        {
            text: 'Foods',
        },
        {
            text: 'Drinks',
        },
    ];
    return (
        <aside>
            <div className={cx('title')}>
                <MenuIcon className={cx('icon')} stroke="#fff" width='3rem' height='2.5rem'/>
                <p>Categories</p>
            </div>
            <div className={cx('item')}>
                {listMenu.map((item, index) => {
                    return <Item key={index} text={item.text} />;
                })}
            </div>
        </aside>
    );
}

export default SideBar;
