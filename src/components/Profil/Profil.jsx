import Button from "../Button/Button";
import style from "./Profil.module.scss";

const Profil = () => {
  return (
    <div className={style.profil}>
      <div className={style.title}>Мои данные</div>
      <div className={style.line}></div>
      <div className={style.input}>
        <div className={style.name}>Имя</div>
        <input placeholder='Enter name' />
      </div>
      <div className={style.input}>
        <div className={style.name}>Дата рождения</div>
        <input placeholder='Enter birth day' />
      </div>
      <div className={style.input}>
        <div className={style.name}>Дата регистрации</div>
        <input placeholder='Enter date' />
      </div>
      <div className={style.input}>
        <div className={style.name}>Номер телефона</div>
        <input placeholder='Enter phone' />
      </div>
      <div className={style.btn}>
        <Button variant='profil'>Сохранить изменения</Button>
      </div>
    </div>
  );
};

export default Profil;
