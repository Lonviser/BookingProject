import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://tripplanet.ru/wp-content/uploads/europe/belarus/brest/dostoprimechatelnosti-bresta.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Брест</h1>
          <h2>25 вариантов</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://34travel.me/media/upload/images/2020/SEPTEMBER/296A0251.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Гродно</h1>
          <h2>20 вариантов</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="http://cdn.belarus.travel/Files/%D1%83%D0%BB%D0%B8%D1%86%D0%B0_%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Пинск</h1>
          <h2>5 вариантов</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
