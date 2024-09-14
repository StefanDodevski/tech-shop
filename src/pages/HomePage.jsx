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
  const { allProducts, loading, selectCategory, searchProduct } = useSelector(
    (state) => state.productStore
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectCategory) {
      ProductService.getAllProductsByCategoryService(selectCategory)
        .then((res) => dispatch(saveAllProductAction(res.data.products)))
        .catch((err) => console.log(err));
    } else {
      ProductService.getAllProductsService()
        .then((res) => dispatch(saveAllProductAction(res.data.products)))
        .catch((err) => console.log(err));
    }
  }, [selectCategory]);

  useEffect(() => {
    ProductService.getSearchProductsService(searchProduct)
      .then((res) => dispatch(saveAllProductAction(res.data.products)))
      .catch((err) => console.log(err));
  }, [searchProduct]);

  return (
    <div className="comntainer mx-auto flex flex-wrap items-center justify-center mt-[50px] gap-[10px]">
      {loading ? (
        allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} />;
        })
      ) : (
        <LoadingComponent size={80} />
      )}
    </div>
  );
}

export default HomePage;
