import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Login() {
  const { signInWithGoogle, signIn, loading, setLoading, resetPassword } =
    useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      // login user
      const result = await signIn(email, password);
      console.log(result);
      navigate("/");
      Swal.fire("User created successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      Swal.fire(`${error.message}`);
      setLoading(false);
    }
  };
  // reset Password
  const handleResetPassword = async () => {
    if (!email) return Swal.fire("Please write your email first!");
    try {
      await resetPassword(email);
      toast.success("Resent success! Please chack your email for further process....")
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`)
      setLoading(false);
    }
    console.log(email);
  };
  // handleGoogleSingin
  const handleGoogleRegister = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      // navigate and show a toast
      navigate("/");
      Swal.fire("User login successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleLoginSubmit} className="w-full max-w-md">
            <h1 className="mt-3 text-2xl font-semibold text-center text-gray-800 capitalize sm:text-3xl dark:text-white">
              sign In
            </h1>
            <div className="relative flex items-center mt-8">
              <span className="absolute ">
                <MdOutlineEmail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="email"
                name="email"
                onBlur={e=>setEmail(e.target.value)}
                required
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="password"
                name="password"
                required
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            <div className="mt-6">
              <button
                disabled={loading}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                {loading ? (
                  <ImSpinner3 className="m-auto animate-spin" />
                ) : (
                  "Login"
                )}
              </button>
              <button
                onClick={handleResetPassword}
                className="mt-4 text-center text-gray-600 dark:text-gray-400"
              >
                forgate password
              </button>
              <button
                onClick={handleGoogleRegister}
                className="flex items-center justify-center w-full px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FcGoogle className="text-3xl" />
                <span className="mx-2">Sign in with Google</span>
              </button>
              <div className="mt-6 text-center ">
                <p className="text-sm text-blue-500 ">
                  Don’t have an account yet?
                  <Link
                    to="/Register"
                    className="dark:text-blue-400 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
