import HomeBody from "../components/MyHomeBody.js";
import CarouselContainer from "../components/MyCarousel";
// import Carousel, { CarouselItem } from "../components/MyCarrousel";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";

export default function MainPage() {



  return (
    <>
      <MyHeader />
      <HomeBody />

      {/* <Carousel>
        {
          images.map((item, index) => <CarouselItem key={index} item={item} />)
        }
      </Carousel> */}
      <MyFooter />

    </>
  );
}