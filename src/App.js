import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/Views/About";
import Home from "./Components/Views/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
