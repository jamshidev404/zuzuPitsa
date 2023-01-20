import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.title}>Контакты</div>
      <div className={style.line}></div>
      <div className={style.phone}>
        <span>Единный call-центр: </span>+998 71 200 77 77
      </div>
      <div className={style.line}></div>
      <div className={style.email}>
        Вы можете написать нам <span className={style.bot}> @ZuzuPizzaSupport_bot</span> также вы можете звонить по
        номеру +998712005400.
      </div>
    </div>
  );
};

export default Contact;
