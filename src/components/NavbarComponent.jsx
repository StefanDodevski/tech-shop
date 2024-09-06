import { useEffect, useState } from "react";
//Components
import HeaderComponenet from "./HeaderComponenet";
import CategoryComponent from "./CategoryComponent";
//Images
import logo from "../assets/logo.png";
// Icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

// Clerk
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

function NavbarComponent() {
  const [toggleHeader, setToggleHeader] = useState(true);
  const [totalProductLS, setTotalProductLS] = useState(0);

  // let totalProduct = JSON.parse(localStorage.getItem("total_product"));
  const { totalProduct } = useSelector((state) => state.cartStore);

  useEffect(() => {
    let isTotal = JSON.parse(localStorage.getItem("total_product"));
    if (isTotal) {
      setTotalProductLS(isTotal);
    }
  }, [totalProduct]);

  return (
    <div>
      {toggleHeader && <HeaderComponenet setToggleHeader={setToggleHeader} />}

      {/* Main NavBar */}
      <div className="bg-mainBlue h-full py-[10px] lg:h-[100px]">
        <div className="container mx-auto flex items-center justify-between h-full flex-col lg:flex-row gap-[15px]">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          {/* Search Bar */}
          <div className="bg-whiteColor rounded-[20px]">
            <input
              type="text"
              placeholder="Search any things"
              className="px-[27px] py-[17px] rounded-[20px] placeholder:text-textColor"
            />
            <button className="bg-mainYellow text-whiteColor px-[27px] py-[17px] rounded-[20px] ">
              Search
            </button>
          </div>

          {/* Login/Cart/Favourite */}
          <div className="flex items-center gap-[15px]">
            <div className="flex items-center">
              <CiUser size={28} color="white" />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <div className="flex items-center gap-[5px]">
              <CiHeart size={28} color="white" />
              <span className="bg-mainYellow rounded-full text-whiteColor w-5 h-5  flex items-center justify-center">
                0
              </span>
              <span className="text-whiteColor">Favourite</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <CiShoppingCart size={28} color="white" />
              <span className="bg-mainYellow rounded-full text-whiteColor w-5 h-5  flex items-center justify-center">
                {totalProductLS}
              </span>
              <Link to={"/cart"} className="text-whiteColor">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Component */}

      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
