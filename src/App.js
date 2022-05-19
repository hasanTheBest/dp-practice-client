import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Views/About";
import Appointment from "./Views/Appointment";
import Dashboard from "./Views/Dashboard";
import MyHistory from "./Views/Dashboard/MyHistory";
import MyServices from "./Views/Dashboard/MyServices";
import Users from "./Views/Dashboard/Users";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

function App() {
  return (
    <>
      <Header />
      <main className="container px-4 lg:px-8 xl:px-16">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyServices />} />
            <Route path="myServices" element={<MyServices />} />
            <Route path="myHistory" element={<MyHistory />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
