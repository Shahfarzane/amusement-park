import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import Header from "./components/Header";
import { Home } from "./Home";
import Contact from "./Contact";
import Map from "./Map";
import Rooms from "./Rooms";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
