import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import News from "./components/News";
import { TopBar } from "./components/TopBar";

function App() {
  const [category, setCategory] = useState("general");
  useEffect(() => {
    document.title = "Inshorts Clone";
  });

  return (
    <>
      <div className="container">
        <div className="side">
          <Sidebar setCategory={setCategory} category={category} />
        </div>
        <div className="nav">
          <Navbar />
        </div>
      </div>

      {/* ***************   Body   ****************** */}

      <div className="body_container">
        <TopBar />
        <News category={category} />
      </div>

      <Footer />
    </>
  );
}

export default App;
