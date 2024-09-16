import { useEffect, useState } from "react";

//services
import ProductService from "../services/ProductsService";

//redux
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductAction } from "../store/productSlice";

//components
import CardProductComponent from "../components/CardProductComponent";
import LoadingComponent from "../components/LoadingComponent";

function HomePage() {
  const [limitProducts, setLimitProducts] = useState(10);

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
      ProductService.getAllProductsService(limitProducts)
        .then((res) => dispatch(saveAllProductAction(res.data.products)))
        .catch((err) => console.log(err));
    }
  }, [selectCategory, limitProducts]);

  useEffect(() => {
    if (searchProduct) {
      ProductService.getSearchProductsService(searchProduct)
        .then((res) => dispatch(saveAllProductAction(res.data.products)))
        .catch((err) => console.log(err));
    }
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

      {!selectCategory && !searchProduct && (
        <button
          className="bg-mainBlue text-whiteColor px-[30px] py-[10px] rounded-[15px] my-[15px] hover:bg-mainYellow duration-500 cursor-pointer"
          onClick={() => setLimitProducts(limitProducts + 10)}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default HomePage;
