import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-48 h-screen bg-gray-100 p-4 border-r">
      <ul className="space-y-4 font-medium">
        <li><Link to="/"> Home</Link></li>
        <li><a href="#"> Shorts</a></li>
        <li><a href="#"> Subscriptions</a></li>
        <li><a href="#"> Explore</a></li>
        <li><a href="#"> Liked</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
