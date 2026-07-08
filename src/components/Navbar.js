import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Store</h1>
        <div className="flex gap-6">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/cart" className="text-white hover:text-blue-200">
            Cart
          </Link>
          <Link to="/profile" className="text-white hover:text-blue-200">
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
