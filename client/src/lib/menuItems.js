import FavoriteAsset from "../asset/FavoriteAsset";
import HomeAsset from "../asset/HomeAsset";
import MenuAsset from "../asset/MenuAsset";
import QrAsset from "../asset/QrAsset";
import TourAsset from "../asset/TourAsset";

export const menuItmes = [
  { icon: <HomeAsset />, title: "home", url: "/" },
  { icon: <TourAsset />, title: "tour", url: "/tour" },
  { icon: <QrAsset />, title: "qr", url: "/qr" },
  { icon: <FavoriteAsset />, title: "favorite", url: "/favorite" },
  { icon: <MenuAsset />, title: "menu", url: "/menu" },
]