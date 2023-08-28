import { AiOutlineMenu } from "react-icons/ai";

export default function MenuAsset({ isSelected }) {
  return <div className=" w-full h-full">{isSelected ? <AiOutlineMenu /> : <AiOutlineMenu />}</div>;
}
