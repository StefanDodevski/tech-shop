import { useEffect, useState } from "react";

//Services
import CategoryService from "../services/CategoryService";

//redux
import { useDispatch, useSelector } from "react-redux";
import { saveAllCategoryAction } from "../store/categorySlice";

//componenets
import LoadingComponent from "./LoadingComponent";
import { saveSelectCategoryAction } from "../store/productSlice";

function CategoryComponent() {
  const [toggleCategory, setToggleCategory] = useState(false);

  const { allCategory, categoryLoader } = useSelector(
    (state) => state.categoryStore
  );

  const dispach = useDispatch();

  useEffect(() => {
    CategoryService.getAllCategoryService()
      .then((res) => dispach(saveAllCategoryAction(res.data)))
      .catch((err) => console.log(err));
  }, []);

  function handleToggleCategory() {
    setToggleCategory(!toggleCategory);
  }

  return (
    <div className=" bg-lightGrayColor p-[10px]">
      <div className="container mx-auto flex items-center flex-col gap-[20px] lg:flex-row ">
        <button
          onClick={handleToggleCategory}
          className="bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[15px]"
        >
          {toggleCategory ? "Close Category" : "Show Category"}
        </button>

        {toggleCategory && (
          <ul className="flex flex-wrap items-center justify-center gap-[5px] w-full">
            <li
              className="w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px] py-[5px] hover:bg-mainYellow cursor-pointer duration-300"
              onClick={() => dispach(saveSelectCategoryAction(""))}
            >
              All Category
            </li>
            {categoryLoader ? (
              allCategory.map((cat, index) => {
                return (
                  <li
                    className="w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px] py-[5px] hover:bg-mainYellow cursor-pointer duration-300"
                    key={index}
                    onClick={() => dispach(saveSelectCategoryAction(cat))}
                  >
                    {cat}
                  </li>
                );
              })
            ) : (
              <div className="w-full flex items-center justify-center">
                <LoadingComponent size={30} />
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
