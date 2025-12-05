import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../../Pages/Loader/Loading";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />;
  }

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Login success, welcome back buddy!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4   transition-colors duration-300">
      <div className="card bg-white dark:bg-gray-800 w-full max-w-md shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
        <div className="card-body p-8">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Welcome Back
          </h3>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            Login to your ZapShift account
          </p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-gray-700 dark:text-gray-200">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-1">
                  Email is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-gray-700 dark:text-gray-200">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input input-bordered w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm mt-1">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </span>
              )}
            </div>

            <div className="text-right">
              <Link
                className="link link-hover text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>

            <button className="btn bg-primary w-full mt-2 hover:bg-primary-focus text-white font-semibold">
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
            Don't have an account?{" "}
            <Link
              state={location?.state}
              to="/register"
              className="text-blue-500 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
            >
              Register Now
            </Link>
          </p>

          <div className="divider border-gray-300 dark:border-gray-600">OR</div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
