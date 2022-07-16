
import { Pathology } from "./pages/pathology";
import { Ophthalmology } from "./pages/ophthalmology";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import { GalleryTab } from "./pages/gallerytab";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pathology" element={<Pathology />} />
          <Route exact path="/ophthalmology" element={<Ophthalmology />} />
          <Route exact path="/gallery" element={<GalleryTab />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
