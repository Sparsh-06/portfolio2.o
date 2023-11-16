import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Stacks from "./components/Stacks";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <Cover/>
          <Projects />
          <Stacks />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
