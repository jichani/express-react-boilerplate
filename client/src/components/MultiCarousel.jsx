import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel() {
  return (
    <Carousel responsive={responsive}>
      <div className=" w-full aspect-square">
        <img
          className=" w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="carousel1"
        />
      </div>
      <div className=" w-full aspect-square">
        <img
          className=" w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="carousel2"
        />
      </div>
      <div className=" w-full aspect-square">
        <img
          className=" w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1591273688202-4cfb3531c7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
          alt="carousel3"
        />
      </div>
    </Carousel>
  );
}
