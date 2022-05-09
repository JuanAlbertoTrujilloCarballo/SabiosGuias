import CarouselContainer from "./MyCarousel";
import MyBodyImage from "./MyBodyImage.js";
import "./MyHomeBody.css";


export default function HomeBody() {

  const images = [
    {
      src: "/img/imagen_sabios_1.jpg",
      alt: "imagen 1",
      frase: "Es un bonito perro"
    }, {
      src: "/img/imagen_sabios_2.jpg",
      alt: "imagen 2",
      frase: "Es una anciana muy feliz"
    }, {
      src: "/img/imagen_sabios_3.jpg",
      alt: "imagen 3",
      frase: "Unos niños felices junto a unos abuelos felices"
    }
  ];


  return (
    <>
      <div>
        <CarouselContainer />
      </div>

      <div className="container-body">
        {
          images.map((item, index) => <MyBodyImage key={index} src={item.src} alt={item.alt} frase={item.frase}/>)
        }
        </div>
    </>
  );
}