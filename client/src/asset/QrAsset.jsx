import { LuQrCode } from "react-icons/lu";

export default function QrAsset({ isSelected }) {
  return <div className=" w-full h-full">{isSelected ? <LuQrCode size={24} /> : <LuQrCode size={24} />}</div>;
}
