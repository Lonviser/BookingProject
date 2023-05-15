import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item })  => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
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
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">от {item.cheapestPrice} рублей</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Посмотреть наличие</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;