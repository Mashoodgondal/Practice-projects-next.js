import Hero from "./heroSection/page";
import Carousel from "./slide/page";
// import imt from "@/app/image/lg1.jpg";
// import Slide from "./slide/page";
const images = [
  "./image/comp1.jpg",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-8">Simple Carousel Example</h1>
        {images.length > 0 && <Carousel images={images} />}
      </div>
      {/* <Carousel /> */}
      <Hero />
    </>
  );
}
