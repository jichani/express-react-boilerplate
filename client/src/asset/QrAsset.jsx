import { BsQrCode } from "react-icons/bs";

export default function QrAsset({ isSelected }) {
  return <div className=" w-full h-full">{isSelected ? <BsQrCode /> : <BsQrCode />}</div>;
}
