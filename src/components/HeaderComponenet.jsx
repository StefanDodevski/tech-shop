/* eslint-disable react/prop-types */
// icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function HeaderComponenet({ setToggleHeader }) {
  function handleCloseHeader() {
    setToggleHeader(false);
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto h-[90px] py-[15px]">
      <div>
        <p>
          Need help? Call us:{" "}
          <a href="tel:+(+98) 0234 456 789 ">(+98) 0234 456 789 </a>
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-[36px]">
        <div className="flex items-center gap-[10px]">
          {/* icon */}
          <CiLocationOn size={28} />
          {/* text */}
          <span>Our Store</span>
        </div>
        <div className="flex items-center gap-[10px]">
          {/* icon */}
          <CiDeliveryTruck size={28} />
          {/* text */}
          <span>Track Your Order</span>
        </div>

        <IoMdClose size={28} onClick={handleCloseHeader} />
      </div>
    </div>
  );
}

export default HeaderComponenet;
