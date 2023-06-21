import classnames from "classnames/bind";
import styles from "./Student.module.css";

const cx = classnames.bind(styles);

function Student({ studentName, classCode, math, chem, phy }) {
  return (
    <div className={cx("card-list")}>
      <h2 className={cx("name")}>{studentName}</h2>
      <ul className={cx("list-student")}>
        Lớp : {classCode}
        <li className={cx("item-student")}>
          Toán : <strong>{math}</strong>
        </li>
        <li className={cx("item-student")}>
          Lý : <strong>{chem}</strong>
        </li>
        <li className={cx("item-student")}>
          Hóa : <strong>{phy}</strong>
        </li> 
         
      </ul>
    </div>
  );
}

export default Student;
