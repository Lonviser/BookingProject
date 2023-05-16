import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Брест,Гродно,Пинск"
  );
  function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
               src="https://tripplanet.ru/wp-content/uploads/europe/belarus/brest/dostoprimechatelnosti-bresta.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Брест</h2>
              <h3>{data[0]} {getNoun(data[0],'вариант', 'варианта', 'вариантов')}</h3>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://34travel.me/media/upload/images/2020/SEPTEMBER/296A0251.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Гродно</h2>
              <h3>{data[1]} {getNoun(data[1],'вариант', 'варианта', 'вариантов')}</h3>
            </div>
          </div>
          <div className="featuredItem">
            <img
               src="http://cdn.belarus.travel/Files/%D1%83%D0%BB%D0%B8%D1%86%D0%B0_%D0%BB%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Пинск</h2>
              <h3>{data[2]} {getNoun(data[2],'вариант', 'варианта', 'вариантов')}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;