import { useEffect } from "react";

//services
import ProductService from "../services/ProductsService";

//redux
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductAction } from "../store/productSlice";

//components
import CardProductComponent from "../components/CardProductComponent";
import LoadingComponent from "../components/LoadingComponent";

function HomePage() {
  const { allProducts, loading } = useSelector((state) => state.productStore);

  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProductsService()
      .then((res) => dispatch(saveAllProductAction(res.data.products)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center mt-[50px]">
      {!loading ? (
        allProducts.map((product) => {
          return <CardProductComponent key={product.id} />;
        })
      ) : (
        <LoadingComponent size={80} />
      )}
    </div>
  );
}

export default HomePage;
