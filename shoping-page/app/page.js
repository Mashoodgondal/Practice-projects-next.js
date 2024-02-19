import Hero from "./heroSection/page";
import Carousel from "./slide/page";
import img5 from "./image/comp1.jpg";
const images = [
  { src: { img5 }, alt: "Image 1", text: "Text Overlay 1" },
  { src: "/image2.jpg", alt: "Image 2", text: "Text Overlay 2" },
  { src: "/image3.jpg", alt: "Image 3", text: "Text Overlay 3" },
  // Add more images as needed
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Carousel
            key={index}
            src={image.src}
            alt={image.alt}
            text={image.text}
          />
        ))}
      </div>
      {/* <Carousel /> */}
      <Hero />
    </>
  );
}
