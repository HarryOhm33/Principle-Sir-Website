import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Patents from "./pages/Patents";
// import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/themeContext";
import Footer from "./components/Footer";
import Awards from "./pages/Awards";
import Memberships from "./pages/Memberships";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/memberships" element={<Memberships />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
