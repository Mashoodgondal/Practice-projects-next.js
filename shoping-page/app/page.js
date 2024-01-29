// import HomePage from "./home/page";
// import Contect from "./contect/page";

export default function Home() {
  return (
    <>
      {/* <HomePage />
      <Contect /> */}

      {/* <div className="container w-[250px] mx-auto my-8 hover:bg-green-600 h-[500px]  bg-blue-500 "></div> */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-500 text-white p-4 h-24 w-32">Box 1</div>

        <div className="bg-green-500 text-white p-4 h-32 w-40">Box 2</div>

        <div className="bg-yellow-500 text-white p-4 h-20 w-56">Box 3</div>

        <div className="bg-red-500 text-white p-4 h-40 w-24">Box 4</div>

        <div className="bg-purple-500 text-white p-4 h-28 w-48">Box 5</div>

        <div className="bg-gray-500 text-white p-4 h-36 w-44">Box 6</div>
      </div>
    </>
  );
}
