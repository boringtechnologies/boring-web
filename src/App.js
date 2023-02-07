import { Route, Routes } from "react-router-dom";
import Contactpage from "./components/contact/contactpage.jsx";
import Homepage from "./components/home/homepage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Softwarepage from "./components/software/softwarepage.jsx";
import Webpage from "./components/web/webpage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/service/web" element={<Webpage />} />
        <Route path="/service/software" element={<Softwarepage />} />
      </Routes>
    </div>
  );
}

export default App;
