import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Пинский дворик</h1>
        <span className="siDistance">500m от центра</span>
        <span className="siSubtitle">
          Оптимальный выбор для туризма и деловых поездок. 
        </span>
        <span className="siFeatures">
          Студия целиком • 1 ванная комната • 21 м² 1 двуспальная кровать        </span>
        <span className="siCancelOp">Бесплатное аннулирование </span>
        <span className="siCancelOpSubtitle">
          Вы можете отменить позже, так что зафиксируйте эту отличную цену сегодня!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Отлично</span>
          <button>9.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">от 90 рублей</span>
          <button className="siCheckButton">Посмотреть наличие</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
