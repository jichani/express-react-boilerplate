import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function FavoriteAsset({ isSelected }) {
  return <div className=" w-full h-full">{isSelected ? <MdFavorite /> : <MdFavoriteBorder />}</div>;
}
