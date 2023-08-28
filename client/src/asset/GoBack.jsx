import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(-1)을 적어주면 뒤로 간다.
    navigate(-1);
  };
  return (
    <div onClick={handleClick} className="mx-2 w-8 h-8 flex justify-center items-center bg-gray-800 rounded-full cursor-pointer">
      <MdArrowBackIosNew color="white" size="20" />
    </div>
  );
}
