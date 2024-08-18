import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductsService";
import LoadingComponent from "../components/LoadingComponent";
import { Rating } from "@mui/material";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    ProductService.getProductByIdService(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-[20px]">
      {isLoading ? (
        <div className="container mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          {/* Left Side */}
          <div className="w-[50%]">
            <img
              src={singleProduct.images[currentImage]}
              alt={singleProduct.title}
              className="w-full h-[400px] object-contain"
            />
            <div className="flex items-center justify-center gap-[20px] mt-[15px]">
              {singleProduct.images.map((el, index) => {
                return (
                  <img
                    key={index}
                    src={el}
                    alt={singleProduct.title}
                    className="w-[100px] h-[100px] object-cover  border border-mainBlue rounded-[15px] cursor-pointer"
                    onClick={() => setCurrentImage(index)}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[50%]">
            <h1>{singleProduct.title}</h1>
            <p>{singleProduct.price}</p>
            <p>{singleProduct.description}</p>
            <Rating name="read-only" value={singleProduct.rating} readOnly />
            <div className="flex gap-[20px]">
              <button className="bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[15px] my-[15px] hover:bg-mainBlue duration-500 cursor-pointer">
                Add to Cart
              </button>
              <button className="bg-mainBlue text-whiteColor px-[40px] py-[10px] rounded-[15px] my-[15px] hover:bg-mainYellow duration-500 cursor-pointer">
                Add to Favourites
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent size={50} />
      )}
    </div>
  );
}

export default SingleProductPage;

// <div>
// {isLoading ? (
//   <div>
//     {/* leftSide */}
//     <div className="w-[50%]">
//       <img
//         src={singleProduct.thumbnail}
//         alt={singleProduct.title}
//         className="w-full h-[500px] object-cover"
//       />
//       <div>{singleProduct.images.map((el, index) => {
//           return <img key={index} src={el} alt={singleProduct.title} className="w-[100px] h-[100px] object-cover">
//       })}</div>
//     </div>
//     </div>

//     {/* rightSide */}
//     <div className="w-[50%]"></div>
//   </div>
// ) : (
//   <LoadingComponent size={50} />
// )}
// </div>
// );
