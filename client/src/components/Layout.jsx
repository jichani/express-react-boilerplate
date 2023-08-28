import { Link } from "react-router-dom";
import GoBack from "../asset/GoBack";
import LogoAsset from "../asset/LogoAsset";
import { menuItmes } from "../lib/menuItems";

// 아무것도 프롭으로 안 주면 false가 되니까 상관없다.
export default function Layout({ children, isHeader, canGoBack, title, isFooter }) {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className=" relative max-w-sm w-full bg-gray-200">
        {/* 헤더 */}
        {isHeader && (
          <div className="z-10 bg-white absolute top-0 w-full h-20 border-b border-neutral-300/50 grid grid-cols-3 items-center">
            {/* 1 */}
            <div className="text-gray-400">{canGoBack && <GoBack />}</div>
            {/* 2 */}
            <div className="w-full flex justify-center items-center">{title ? title : <LogoAsset />}</div>
            {/* 3 */}
          </div>
        )}

        {/* children */}
        {children}
        {/* 푸터 */}
        {isFooter && (
          <div className="z-10 bg-white absolute bottom-0 w-full h-[100px] grid grid-cols-5 gap-2 p-2 border-t-2 border-neutral-300 cursor-pointer">
            {menuItmes.map((item) => (
              <Link to={item.url} key={item.title}>
                <div className="flex flex-col w-full h-full justify-center items-center space-y-1">
                  {/* 아이콘 */}
                  <div>{item.icon}</div>
                  {/* 타이틀 */}
                  <div className=" uppercase text-xs">{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
