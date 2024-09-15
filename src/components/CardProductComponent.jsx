/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function CardProductComponent({ product }) {
  return (
    <div className="w-[300px] border border-mainBlue rounded-[20px] flex flex-col items-center justify-center">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[250px] object-cover"
        />
      </div>
      <h3>{product.title}</h3>
      <h4>${product.price}</h4>
      <Rating name="read-only" value={product.rating} readOnly />
      <Link
        to={`/singleProduct/${product.id}`}
        className="bg-mainBlue text-whiteColor px-[30px] py-[10px] rounded-[15px] my-[15px] hover:bg-mainYellow duration-500 cursor-pointer"
      >
        View More
      </Link>
    </div>
  );
}

export default CardProductComponent;
