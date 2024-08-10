import axios from "axios";

class CategoryService {
  static getAllCategoryService = () => axios.get("/products/category-list");
}

export default CategoryService;
