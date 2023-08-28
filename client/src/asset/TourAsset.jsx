import { MdOutlineTour, MdTour } from "react-icons/md";

export default function TourAsset({ isSelected }) {
  return <div className=" w-full h-full">{isSelected ? <MdTour /> : <MdOutlineTour />}</div>;
}
