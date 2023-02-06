import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/home/Landing";
import Intro from "./pages/home/Itro";
import Contact from "./pages/home/Contact";
import Test from "./pages/home/Test";
import Apidocs from "./pages/home/ApiDocs";
import Nav from "./pages/home/Nav";
import Footer from "./pages/home/Footer";
import E404 from "./pages/error/E404";

function Home() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="intro" element={<Intro />}></Route>
        <Route path="apidocs" element={<Apidocs />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<E404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
