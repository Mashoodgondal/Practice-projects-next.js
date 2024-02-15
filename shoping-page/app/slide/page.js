import Image from "next/image";

import img1 from "@/app/image/coat2.jpg";
import img2 from "@/app/image/coat1.jpg";
import img3 from "@/app/image/comp2.jpg";
import img4 from "@/app/image/comp1.jpg";
import img5 from "@/app/image/lg1.jpg";
import img6 from "@/app/image/lg2.jpg";
import Card from "../(components)/card/page";

const Slider = () => {
  return (
    <div className="p-6 md:p-4 grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:text-center  ">
      <div>
        <Card
          img={img5}
          title="Boost your business"
          para=" Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order"
        />
      </div>
      <div>
        <Card
          img={img4}
          title="Labtop: Desire genaration "
          para=" Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order"
        />
      </div>
      <div>
        <Card
          img={img3}
          title="PC for progress"
          para=" Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order"
        />
      </div>
      <div>
        <Card
          img={img2}
          title="Ladies Shopping"
          para=" Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order"
        />
      </div>
      <div>
        <Card
          img={img1}
          title="Find your dress"
          para=" Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order"
        />
      </div>
      <div>
        <Card
          img={img6}
          title="Bag detaile shopping"
          para="  Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order"
        />
      </div>
    </div>
  );
};

export default Slider;
