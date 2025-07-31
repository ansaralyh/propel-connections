import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Careers from "./pages/careers/Careers";
import Affliates from "./pages/affliates/Affliates";
import Press from "./pages/press/Press";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/affliates" element={<Affliates />} />
        <Route path="/press" element={<Press />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
