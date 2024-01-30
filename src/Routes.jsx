import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ContactPageDesktop = React.lazy(() => import("pages/ContactPageDesktop"));
const StudentLifePageDesktop = React.lazy(
  () => import("pages/StudentLifePageDesktop"),
);
const AdmissionPageDesktop = React.lazy(
  () => import("pages/AdmissionPageDesktop"),
);
const AcademicsPageDesktop = React.lazy(
  () => import("pages/AcademicsPageDesktop"),
);
const AboutPageDesktop = React.lazy(() => import("pages/AboutPageDesktop"));
const HomePageDesktop = React.lazy(() => import("pages/HomePageDesktop"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagedesktop" element={<HomePageDesktop />} />
          <Route path="/aboutpagedesktop" element={<AboutPageDesktop />} />
          <Route
            path="/academicspagedesktop"
            element={<AcademicsPageDesktop />}
          />
          <Route
            path="/admissionpagedesktop"
            element={<AdmissionPageDesktop />}
          />
          <Route
            path="/studentlifepagedesktop"
            element={<StudentLifePageDesktop />}
          />
          <Route path="/contactpagedesktop" element={<ContactPageDesktop />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
