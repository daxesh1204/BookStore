import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3" className="modal modal-open">
        <div className="modal-box border-[2px] shadow-md p-7 rounded-md relative  md:w-[500px]">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <hr />
            <div className="mt-4 space-y-2">
              <span>Name:</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-500">Name is required*</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your valid email"
                className="w-80 px-3 py-1 outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">email is required*</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">password is required*</span>}
            </div>
            <div className="flex mt-4 justify-around">
              <button className="bg-secondary text-white rounded-md p-2 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <div className="">
                Already registerd?
                <Link
                  className="text-blue-500 underline cursor-pointer"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
