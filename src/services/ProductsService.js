import axios from "axios";

class ProductService {
  static getAllProductsService = () => axios.get("/products");
  static getProductByIdService = (id) => axios.get(`/products/${id}`);
  static getAllProductsByCategoryService = (category) => {
    return axios.get(`/products/category/${category}`);
  };
  static getSearchProductsService = (search) =>
    axios.get(`/products/search?q=${search}`);
}

export default ProductService;
