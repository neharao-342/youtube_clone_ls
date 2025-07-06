import { Link } from "react-router-dom";

function Navbar({ watchLaterCount }) {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">MyYouTube</Link>

      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-1 rounded w-1/3 bg-white text-black placeholder-gray-500 focus:outline-none"
        disabled
      />

      <Link to="/watch-later" className="relative">
        Watch Later
        {watchLaterCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-white text-blue-700 rounded-full px-2 text-xs font-bold">
            {watchLaterCount}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
