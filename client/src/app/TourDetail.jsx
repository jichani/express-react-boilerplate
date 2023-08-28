import Layout from "../components/Layout";
import MultiCarousel from "../components/MultiCarousel";

export default function TourDetail() {
  return (
    <Layout isHeader isFooter canGoBack>
      <div className=" w-full h-full flex flex-col items-center space-y-4">
        <h2>TOUR DETAIL</h2>
        {/* 캐러셀 */}
        <div className=" w-full h-full">
          <MultiCarousel />
        </div>
      </div>
    </Layout>
  );
}
