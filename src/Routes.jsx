import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Blog = React.lazy(() => import("pages/Blog"));
const AboutVTwo = React.lazy(() => import("pages/AboutVTwo"));
const About = React.lazy(() => import("pages/About"));
const HomepageVTwo = React.lazy(() => import("pages/HomepageVTwo"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepagevtwo" element={<HomepageVTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutvtwo" element={<AboutVTwo />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
