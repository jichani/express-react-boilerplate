import GoBack from "../asset/GoBack";
import LogoAsset from "../asset/LogoAsset";

// 아무것도 프롭으로 안 주면 false가 되니까 상관없다.
export default function Layout({ children, isHeader, canGoBack, title, isFooter }) {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className=" relative max-w-sm w-full bg-gray-200">
        {/* 헤더 */}
        {isHeader && (
          <div className="w-full h-20 border-b border-neutral-300/50 grid grid-cols-3 items-center">
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
        {isFooter && <div className="absolute bottom-0 w-full h-[100px] grid grid-cols-5 gap-2 p-2 border-t-2 border-neutral-300">푸터</div>}
      </div>
    </div>
  );
}
