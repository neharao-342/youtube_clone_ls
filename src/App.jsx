import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  const watchLaterCount = JSON.parse(sessionStorage.getItem("watchLater") || "[]").length;

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar watchLaterCount={watchLaterCount} />
          <main className="flex-grow">
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch-later" element={<WatchLater />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
