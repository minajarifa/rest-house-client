import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { GoUpload } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";


export default function Register() {
  const { signInWithGoogle, updateUserProfile, createUser,setLoading,loading } = useAuth();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    // user information by form
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.files[0];
    const info = { name, email, password, confirmPassword, image };
    const formData = new FormData();
    formData.append("image", image);
    // image upload from imgbb
    try {
      setLoading(true)
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );
      console.log(data.data.display_url);
      // create user
      const result = await createUser(email, password);
      console.log(result);
      // update user and added profile pic
      await updateUserProfile(name, data?.data?.display_url);
      // navigate and show a toast
      navigate("/");
      Swal.fire("User created successfully");
    } catch (error) {
      console.log(error);
    }
  };
  // handleGoogleSingin
  // TODO
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleRegister} className="w-full max-w-md">
            <div className="flex items-center justify-center mt-6">
              <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                sign up
              </p>
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <CiUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Username"
                name="name"
                required
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <label
              for="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <GoUpload className="w-6 h-6 text-gray-300 dark:text-gray-500" />
              {/* <h2 className="mx-3 text-gray-400">Profile Photo</h2> */}
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </label>
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="email"
                required
                name="email"
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
                required
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="password"
                required
                name="confirmPassword"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mt-6">
              <button disabled={loading} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {loading?<ImSpinner3 className="m-auto animate-spin"/>:"Continue"}
              </button>
              {/*  */}
              <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                or sign in with
              </p>
              <a
                href="#"
                className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <FcGoogle className="text-3xl" />
                <span className="mx-2">Sign in with Google</span>
              </a>
              {/*  */}
              <div className="mt-6 text-center ">
                <p className="text-sm ">
                  Already have an account? plaese
                  <Link
                    to="/Login"
                    className="mx-5 text-blue-500 hover:underline dark:text-blue-400"
                  >
                    login
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
