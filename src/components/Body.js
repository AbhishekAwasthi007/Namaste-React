import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5680156&lng=80.6789519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchQuery, setsearchQuery] = useState("");

  const search = (val) => {
    setData(
      data.filter((res) => {
        console.log(res.info.name);
        return res.info.name.includes(val);
      })
    );
  };

  return (
    <div className="body">
      <div className="search">
        <input
          value={searchQuery}
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
          className="searchInput"
        ></input>
        <button onClick={() => search(searchQuery)}>Search</button>
      </div>
      <button
        onClick={() => {
          const newdata = data.filter((res) => res.info.avgRating >= 4.0);
          setData(newdata);
        }}
      >
        Top
      </button>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Clear
      </button>
      <div className="res-container">
        {data.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
