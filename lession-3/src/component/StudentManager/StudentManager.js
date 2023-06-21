import Student from "../Student/Student";
import classnames from "classnames/bind";
import styles from "./StudentManager.module.css";

const cx = classnames.bind(styles);

function StudentManager() {
  const listStudent = [
    {
      name: "Nguyễn Văn A",
      class: "10A",
      math: 10,
      phy: 10,
      chem: 10,
    },
    {
      name: "Nguyễn Văn B",
      class: "10B",
      math: 9,
      phy: 9,
      chem: 9,
    },
    {
      name: "Nguyễn Văn C",
      class: "10C",
      math: 8,
      phy: 7,
      chem: 5,
    },
    {
      name: "Nguyễn Văn D",
      class: "10D",
      math: 4,
      phy: 2,
      chem: 8,
    },
    {
      name: "Nguyễn Văn E",
      class: "10E",
      math: 6,
      phy: 7,
      chem: 5,
    },
    {
      name: "Nguyễn Văn F",
      class: "10F",
      math: 8,
      phy: 2,
      chem: 7,
    },
    {
      name: "Nguyễn Văn G",
      class: "10G",
      math: 1,
      phy: 9,
      chem: 5,
    },
    {
      name: "Nguyễn Văn H",
      class: "10H",
      math: 1,
      phy: 7,
      chem: 5,
    },
  ];
  return (
    <>
      <h1 className={cx("title")}>Quản lý học sinh</h1>{" "}
      <div className={cx("control")}>
        <button>Thêm học sinh mới</button>
        <button>Sắp xếp</button>
        <button>Sửa thông tin học sinh</button>
        <button>Xóa học sinh</button>
      </div>
      <div className={cx("main")}>
        {listStudent.map((student, index) => {
          return (
            <Student
              key={index}
              classCode={student.class}
              studentName={student.name}
              math={student.math}
              phy={student.phy}
              chem={student.chem}
            />
          );
        })}
      </div>
    </>
  );
}

export default StudentManager;
