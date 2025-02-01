import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import PetCards from "./Components/PetCards/PetCards";
import ShelterPage from "./Components/Shelters/ShelterPage";
import LoginPage from "./Components/login/login";
import RegisterPage from "./Components/Register/register";
import PetManager from "./Components/Admin/admin";
import AdminLoginPage from "./Components/adminLogin/adminLogin";
import PetForm from "./Components/Admin/Addpet";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <PetManager />
            // <Layout>
            // </Layout>
          }
        />
        <Route
          path="/addPet"
          element={
            <PetForm />
            // <Layout>
            // </Layout>
          }
        />
        <Route
          path="/PetCards"
          element={
            <Layout>
              <PetCards />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route
          path="/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Shelters"
          element={
            <Layout>
              <ShelterPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
