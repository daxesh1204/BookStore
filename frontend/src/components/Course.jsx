import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";
const Course = () => {
  // console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fugiat consequatur perspiciatis nulla deserunt veniam dolorum eaque,
            minus aliquid maxime. Quia, eligendi ut assumenda eveniet eos
            perferendis dicta amet modi eaque praesentium rem sed esse odit,
            quaerat reprehenderit molestiae, quisquam dolorem impedit. Nobis,
            quidem esse.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item, index) => {
            return <Cards item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
