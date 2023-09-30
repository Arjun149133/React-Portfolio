import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className=" bg-sky-900">
      <Nav />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
