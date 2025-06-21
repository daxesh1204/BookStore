import { Link, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [authUser,setAuthUser]=useAuth();
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/users/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          toast.success("Login Successfull");
          setAuthUser(res.data.user);
          setIsOpen(false);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  if (!isOpen) return null;
  return (
     <dialog id="my_modal_3" className="modal modal-open ">
      <div className="modal-box">
        <div className="text-black">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog"  >
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Login</h3>
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
            {errors.email && (
              <span className="text-sm text-red-500">email is required*</span>
            )}
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
            {errors.password && (
              <span className="text-sm text-red-500">
                Password is required*
              </span>
            )}
          </div>
          <div className="flex mt-4 justify-around">
            <button className="bg-secondary text-white rounded-md p-2 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registerd?
              <Link
                to="/signup"
                className="text-blue-500 underline cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
      </div>
    </dialog>
  );
};

export default Login;
