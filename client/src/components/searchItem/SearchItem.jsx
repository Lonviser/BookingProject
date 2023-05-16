import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item })  => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}м от центра</span>
        <span className="siSubtitle">
          Оптимальный выбор для туризма и деловых поездок. 
        </span>
        <span className="siFeatures">
         {item.desc}         
          </span>
        <span className="siCancelOp">Бесплатное аннулирование </span>
        <span className="siCancelOpSubtitle">
          Вы можете отменить позже, так что зафиксируйте эту отличную цену сегодня!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>{item.title}</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">от {item.cheapestPrice} рублей</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;