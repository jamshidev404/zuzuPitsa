import styles from "./Filial.module.scss";
import { StrelkaSvg } from "../../Images/svg";
import Button from "../Button/Button";
import filials from "../../mock/filials";
import { Link } from "react-router-dom";

const Filial = () => {
  return (
    <div className={`${styles.filial} container`}>
      <div className={styles.top}>
        <div className={styles.title}>Филиалы</div>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            <Button variant='card'>Список</Button>
          </div>
          <div className={styles.btn}>
            <Button variant='card'>Карта</Button>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {filials.map((el) => (
          <Link  key={el.id}to={el.id}>
            <div key={el.id} className={styles.card}>
              <div className={styles.name}>
                {el.name}
                <span>
                  <StrelkaSvg />
                </span>
              </div>
              <div className={styles.address}>{el.address}</div>
              <div className={styles.line}></div>
              <div className={styles.time}>{el.time}</div>
              <div className={styles.days}>{el.days}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filial;
