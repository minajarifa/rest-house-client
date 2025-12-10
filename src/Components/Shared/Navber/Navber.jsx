import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../Container";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const axiosSecure = useAxiosSecure();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalHandler = async () => {
    console.log("I want to be a host");
    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation");
      } else {
        toast.success("Please!, Wait for admin approval👊");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };

  return (
    <div className="z-10 w-full shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className="hidden md:block">
                  {/* {!user && ( */}
                  <button
                    // disabled={!user}
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer disabled:cursor-not-allowed hover:bg-neutral-100"
                  >
                    Host your home
                  </button>
                  {/* )} */}
                </div>
                {/* Modal */}
                {/* <HostModal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  modalHandler={modalHandler}
                /> */}
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw]  overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block px-4 py-3 font-semibold transition md:hidden hover:bg-neutral-100"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-3 font-semibold transition hover:bg-neutral-100"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 font-semibold transition cursor-pointer hover:bg-neutral-100"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
