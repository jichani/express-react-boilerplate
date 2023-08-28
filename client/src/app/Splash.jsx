import { useEffect } from "react";
import LogoAsset from "../asset/LogoAsset";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/home");
    }, 4000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Layout>
      <div className="relative w-full h-full bg-cover bg-left bg-[url('https://cphoto.asiae.co.kr/listimglink/1/2022042813502148152_1651121421.jpg')]">
        {/* 빈박스 */}
        <div className=" w-full h-full bg-white/30" />
        {/* 로고 영역 */}
        <div className="flex flex-col absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] items-center">
          <h1 className="text-xl">세상의 모든 여행</h1>
          <div>
            <LogoAsset large />
          </div>
        </div>
      </div>
    </Layout>
  );
}
