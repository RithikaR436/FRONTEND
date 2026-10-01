import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end gap-6 bg-gray-800 p-5">
      <Link className="text-white" to="/">Home</Link>
      <Link className="text-white" to="/about">About</Link>
      <Link className="text-white" to="/services">Services</Link>
      <Link className="text-white" to="/courses">Courses</Link>
      <Link className="text-white" to="/gallery">Gallery</Link>
      <Link className="text-white" to="/contact">Contact</Link>
      <Link className="text-white" to="/help">Help</Link>
    </nav>
  );
};

export default Navbar;