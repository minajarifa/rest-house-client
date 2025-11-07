import { CiUser } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center mt-6">  
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <CiUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>
            <label
              for="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <GoUpload className="w-6 h-6 text-gray-300 dark:text-gray-500" />
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="email"
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
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>
              <div className="mt-6 text-center ">
                <p className="text-sm ">
                  Already have an account? plaese
                  <Link className="mx-5 text-blue-500 hover:underline dark:text-blue-400">
                    Login
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

