import LogoAsset from "./asset/LogoAsset";
import Layout from "./components/Layout";
import { tourItems } from "./lib/tourItems";

export default function Page() {
  return (
    <Layout isFooter>
      <div className=" w-full h-full flex flex-col py-16 px-4 space-y-8">
        {/* 슬로건 */}
        <div>
          <div className="flex items-center">
            <LogoAsset />
            <span className=" text-2xl font-semibold">과</span>
          </div>
          <p className=" text-2xl font-semibold">함께하는 Deagu 여행</p>
        </div>
        {/* 상품리스트 */}
        <div className="flex flex-col space-y-4">
          {/* db */}
          {tourItems.map((item, index) => (
            <div
              style={{ backgroundImage: `url(${item.bgImage})` }}
              className="group transition-all duration-300 cursor-pointer relative bg-cover bg-center w-full h-20 rounded-md border border-gray-300"
            >
              <div className="w-full h-full bg-gradient-to-r from-gray-900/50 to-gray-700/50 group-hover:from-gray-900/70 group-hover:to-gray-700/70" />
              <div className=" absolute inset-0 w-full h-full flex flex-col text-white px-4 justify-center">
                <h2 className=" group-hover:text-white font-medium text-gray-200 ">{item.title}</h2>
                <p className=" text-sm text-gray-200 group-hover:text-white">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
