import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.holiday.by/files/houses/thumbnails/houses_gallery_fullsize/12026/3316c5cfeb0ed7075887ef7fb1f3ae0c524700e9.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Пинский дворик</span>
        <span className="fpCity">Пинск</span>
        <span className="fpPrice">От 100 рублей</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Отлично</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Красный Дом</span>
        <span className="fpCity">Силичи</span>
        <span className="fpPrice">От 59 рублей</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Прекрасно</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.holiday.by/files/houses/thumbnails/houses_gallery_fullsize/478f44676b712533237527b039a6617e.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Усадьба Апельсин </span>
        <span className="fpCity">Ушачи</span>
        <span className="fpPrice">От 50 рублей</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Отличный</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.holiday.by/files/houses/thumbnails/houses_gallery_fullsize/a92e2d249b59ef1666abd09607a06e41.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">«Жемчужина Браслава»</span>
        <span className="fpCity">Браслав</span>
        <span className="fpPrice">От 75 рублей</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Великолепно</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
