import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Register />}/>
        {/* <Route path="/login">{user ? <Navigate replace to="/" /> : <Login />}</Route> */}
        {/* <Route path="/register" >{user ? <Navigate to="/" /> : <Register />}</Route> */}
      </Routes>
    </Router>
  );
};

export default App;
