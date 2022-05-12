import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Views/About";
import Appointment from "./Views/Appointment";
import Home from "./Views/Home";

function App() {
  return (
    <>
      <Header />
      <main className="container px-4 lg:px-8 xl:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
