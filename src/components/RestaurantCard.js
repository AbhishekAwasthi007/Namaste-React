import { img_url } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="foodimg"
        src={img_url + props.resData.info.cloudinaryImageId}
      ></img>
      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating}</h4>
      <h4>{props.resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
