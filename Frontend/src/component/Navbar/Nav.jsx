import { useEffect, useRef, useState } from "react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { webLogo } from "../../assets/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user/Login/loginSlice";
import SearchModal from "./SearchModal";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dropdownRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cartData);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            className={`relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition-transform duration-300 ease-in-out transform ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    to={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {!token ? (
                <>
                  <Link
                    to="/sign-in"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Create account
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="-m-2 block p-2 font-medium text-red-600"
                >
                  Logout
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Header */}
      <header className="bg-white">
        <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-gray-400"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>

              <div className="ml-4 flex lg:ml-0 mr-4">
                <Link to="/">
                  <img alt="Logo" src={webLogo.logo} className="h-10 w-auto" />
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  {!token ? (
                    <>
                      <Link
                        to="/sign-in"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Sign in
                      </Link>
                      <span className="h-6 w-px bg-gray-200" />
                      <Link
                        to="/register"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Create account
                      </Link>
                    </>
                  ) : (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                      >
                        <UserIcon className="h-6 w-6" />
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg border rounded-md z-50">
                          <div className="py-2">
                            <Link
                              to="/dashboard"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Dashboard
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Icons */}
                <div className="flex lg:ml-6">
                  <div className="p-2 text-gray-400 hover:text-gray-500 cursor-pointer">
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      onClick={() => setShowModal(true)}
                    />
                  </div>
                </div>

                <div className="flex lg:ml-2">
                  <Link
                    to="/whishlist"
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <HeartIcon className="h-6 w-6" />
                  </Link>
                </div>

                <div className="ml-4 flow-root lg:ml-2">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {totalItems}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {showModal && <SearchModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Nav;
