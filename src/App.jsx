import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zones from "./pages/Zones/Zones";
import Developers from "./pages/Developers/Developers";
import Contact from "./pages/Contact Us/Contact";
import UnitDetails from "./pages/units/UnitDetails"
import Layout from "./components/Layout/Layout";
import Units from './pages/units/units'
import ZonesData from './pages/Zones/ZonesData'
import DevelopersData from "./pages/Developers/DevelopersData";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/units/:id" element={<UnitDetails/>}/>
        <Route path="/units" element={<Units />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/zones/:id" element={<ZonesData/>}/>
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:id" element={<DevelopersData/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;