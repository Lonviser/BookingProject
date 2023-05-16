
  import useFetch from "../../hooks/useFetch";
  import "./propertyList.css";
  
  const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
  
    const images = [
      "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
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
      <div className="pList">
        {loading ? (
          "Загрузка"
        ) : (
          <>
            {data &&
              images.map((img,i) => (
                <div className="pListItem" key={i}>
                  <img
                    src={img}
                    alt=""
                    className="pListImg"
                  />
                  <div className="pListTitles"> 
                    <h2>{data[i]?.type}</h2>
                    <h3>
                      {data[i]?.count}{" "}
                      {data[i]?.type === "Отель" && (
                        <>{getNoun(data[i]?.count, "Отель", "Отеля", "Отелей")}</>
                      )}
                      {data[i]?.type === "Апартаменты" && (
                        <>{getNoun(data[i]?.count, "Апартаменты", "Апартамента", "Апартаментов")}</>
                      )}
                      {data[i]?.type === "Курорт" && (
                        <>{getNoun(data[i]?.count, "Курорт", "Курорта", "Курортов")}</>
                      )}
                      {data[i]?.type === "Виллы" && (
                        <>{getNoun(data[i]?.count, "Виллы", "Виллы", "Вилл")}</>
                      )}
                      {data[i]?.type === "Агроусадьбы" && (
                        <>{getNoun(data[i]?.count, "Агроусадьбы", "Агроусадьбы", "Агроусадьб")}</>
                      )}
                    </h3>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    );
  };
  
  export default PropertyList;