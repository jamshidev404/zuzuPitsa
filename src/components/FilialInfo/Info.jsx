import style from "./Info.module.scss";
import infoImage from "../../Images/info.png";
import { useParams } from "react-router-dom";
import Filials from "../../mock/filials";


const FilialInfo = () => {
  const {id} = useParams();
  const data = Filials.find((el) => el.id === id)
  
  return (
    <div className={`${style.info}`}>
      <div className={style.title}>{data?.name}</div>
      <div className={style.line}></div>
      <div className={style.desc}>
        Название кафе «Zuzu» переводится с грузинского как «комната для
        приёмов». В интерьере заведения королевская пышность сочетается с уютом
        гостиной: на полу лежат домотканые орнаментальные ковры, зал украшает
        мебель из антикварного магазина, а серванты заполнены милыми
        безделушками.
      </div>
      <div className={style.desc2}>
        Еду здесь готовят по-домашнему, точно в тбилисском сахли. Посетители
        рекомендуют брать «бадриджаны бебия», то есть «баклажаны по бабушкиному
        рецепту» и мацони. Говорят, этот кисломолочный продукт здесь — один из
        лучших в городе.
      </div>
      <div className={style.info__img}>
        <img src={infoImage} />
      </div>
      <div className={style.address}>
        <span>Адрес: </span>{data?.address}
      </div>
      <div className={style.time}>
        <span>Ежедневно:</span>{data?.days}
      </div>
      <div className={style.contact}>
        <span>Номер телефона: </span>{data?.phone}
      </div>
    </div>
  );
};

export default FilialInfo;
