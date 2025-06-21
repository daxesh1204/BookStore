function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="mt-5 my-3 p-3">
        <div className="card bg-base-100 w-92  shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image1} alt="BookImages!!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary p-5">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
