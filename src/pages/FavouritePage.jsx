import { useSelector } from "react-redux";
import CardProductComponent from "../components/CardProductComponent.jsx";

function FavouritePage() {
  const { allFavourite } = useSelector((state) => state.favouriteStore);
  return (
    <div className="container mx-auto mt-[50px] flex items-center gap-5">
      {allFavourite.map((favouriteItem) => {
        return (
          <CardProductComponent
            key={favouriteItem.id}
            product={favouriteItem}
          />
        );
      })}
    </div>
  );
}

export default FavouritePage;
