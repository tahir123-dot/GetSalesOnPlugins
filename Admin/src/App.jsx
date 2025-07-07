import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import AllProducts from "./pages/Products/AllProducts";
import OrderHistory from "./pages/Orders/Orderhistory";
import OrderDetail from "./pages/Orders/OrderDetail";
import AddNew from "./pages/Products/AddNew";
import Edit from "./pages/Products/Edit";
import User from "./pages/Users/User";
import Login from "./pages/Join/Login";
import Dashboard from "./pages/DashBoard";
import NoteFound from "./pages/NoteFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreateBlog from "./pages/Blog/CreateBlog";
import AllBlogs from "./pages/Blog/AllBlogs";
import SingleBlog from "./pages/Blog/SingleBlog";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname == "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <OrderDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allBlog"
          element={
            <ProtectedRoute>
              <AllBlogs/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/allBlog/:id"
          element={
            <ProtectedRoute>
              <SingleBlog/>
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;
