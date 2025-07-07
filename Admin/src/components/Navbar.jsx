import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { href, Link, useNavigate } from "react-router-dom"; // ✅ for redirect
import { data } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/auth/adminSlice";

const navigation = [
  { name: "DashBoard", href: "/admin" },
  { name: "Users", href: "/users" },
  { name: "Products", href: "/products" },
  { name: "Orders", href: "/orders" },
  { name: "Blog", href: "/allBlog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get login state from Redux
  const { admin } = useSelector((state) => state.auth);

  const logoutButton = () => {
    dispatch(logout());
    navigate("/login"); // ✅ redirect to login
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Left: Logo & Nav Links */}
              <div className="flex items-center">
                <div className="mr-2 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-black hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </DisclosureButton>
                </div>

                <img className="h-12 w-auto" src={data.logo} alt="AdminZone" />

                <div className="hidden sm:ml-10 sm:flex sm:space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-indigo-600 hover:underline px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Auth Buttons */}
              <div className="hidden sm:flex items-center gap-4">
                {admin && (
                  <button
                    onClick={logoutButton}
                    className="px-4 py-1 rounded border border-red-500 text-red-600 hover:bg-red-50 text-sm"
                  >
                    Logout
                  </button>
                )}
                <div>
                  <Link
                    to="/blog"
                    className="px-4 py-1.5 rounded border border-blue-500 bg-blue-500 text-gray-100 hover:bg-gray-100 hover:text-gray-900 text-sm"
                  >
                    Add Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Nav Panel */}
          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  {item.name}
                </DisclosureButton>
              ))}

              <div className="mt-4 space-y-2">
                {admin && (
                  <button
                    onClick={logoutButton}
                    className="block w-full text-center px-3 py-2 rounded border border-red-500 text-red-600 hover:bg-red-50 text-sm"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
