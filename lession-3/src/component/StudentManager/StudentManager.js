import Student from '../Student/Student';
import classnames from 'classnames/bind';
import styles from './StudentManager.module.css';
import { useState } from 'react';

const cx = classnames.bind(styles);

function StudentManager() {
    const listStudent = [
        {
            name: 'Nguyễn Văn A',
            classCode: '10A',
            math: 10,
            phy: 10,
            chem: 10,
        },
        {
            name: 'Nguyễn Văn B',
            classCode: '10B',
            math: 9,
            phy: 9,
            chem: 9,
        },
        {
            name: 'Nguyễn Văn C',
            classCode: '10C',
            math: 8,
            phy: 7,
            chem: 5,
        },
        {
            name: 'Nguyễn Văn D',
            classCode: '10D',
            math: 4,
            phy: 2,
            chem: 8,
        },
        {
            name: 'Nguyễn Văn E',
            classCode: '10E',
            math: 6,
            phy: 7,
            chem: 5,
        },
        {
            name: 'Nguyễn Văn F',
            classCode: '10F',
            math: 8,
            phy: 2,
            chem: 7,
        },
        {
            name: 'Nguyễn Văn G',
            classCode: '10G',
            math: 1,
            phy: 9,
            chem: 5,
        },
        {
            name: 'Nguyễn Văn H',
            classCode: '10H',
            math: 1,
            phy: 7,
            chem: 5,
        },
    ];
    const [renderList, setRenderList] = useState(listStudent);
    const handlerNewStudent = () => {
        const newStudent = {
            name: 'New Student A  ',
            classCode: '10A',
            math: 10,
            phy: 10,
            chem: 10,
        };

        setRenderList([...renderList, newStudent]);
    };
    return (
        <>
            <h1 className={cx('title')}>Quản lý học sinh</h1>{' '}
            <div className={cx('control')}>
                <button onClick={handlerNewStudent}>Thêm học sinh mới</button>
                <button>Sắp xếp</button>
                <button>Sửa thông tin học sinh</button>
                <button>Xóa học sinh</button>
            </div>
            <div className={cx('main')}>
                {renderList.map((student, index) => {
                    return <Student key={index} {...student} />;
                })}
            </div>
        </>
    );
}

export default StudentManager;
