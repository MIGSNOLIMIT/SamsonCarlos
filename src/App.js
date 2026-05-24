import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import PillarPage from "./pages/PillarPage";
import ClusterPage from "./pages/ClusterPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import BlogPostPage from "./pages/BlogPostPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Navigate to="/projects" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/full-stack-developer"
            element={<PillarPage slug="full-stack-developer" />}
          />
          <Route
            path="/react-nextjs-developer"
            element={<PillarPage slug="react-nextjs-developer" />}
          />
          <Route
            path="/web-development-case-studies"
            element={<PillarPage slug="web-development-case-studies" />}
          />
          <Route path="/case-studies/:slug" element={<ClusterPage />} />
          <Route path="/engineering/:slug" element={<ClusterPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/category/:slug" element={<BlogCategoryPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
