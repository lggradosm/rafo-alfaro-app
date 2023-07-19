import { useState } from "react";
import Nav from "./components/Header/Nav";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Projects from "@pages/Projects/Projects";
import Studio from "@pages/Studio/Studio";
import Footer from "@components/Footer/Footer";
import Contact from "@pages/Contact";
import PrivacyPolicies from "@pages/PrivacyPolicies";
import CookiesPolicies from "@pages/CookiesPolicies";
import ProjectDetail from "@pages/Projects/ProjectDetail";
import Team from "@pages/Studio/Team";
import Infrastructure from "@pages/Studio/Infrastructure";
import usePageLoadStatus from "./hooks/usePageLoadStatus";

function App() {
  const pageState = usePageLoadStatus();
  return (
    <BrowserRouter forceRefresh>
      <main className="relative bg-primaryColor box-border ">
          <Nav />
        <div className="font-manrope ">
          <Routes>
            <Route element={<Home />} path={"/*"} />
            <Route element={<Projects />} path={`/proyectos`} />
            <Route element={<ProjectDetail />} path={`/proyectos/*`} />

            <Route element={<Studio />} path={`/estudio`} />
            <Route element={<Team />} path={`/estudio/equipo`} />
            <Route
              element={<Infrastructure />}
              path={`/estudio/instalaciones`}
            />

            <Route element={<Contact />} path={`/contacto`} />

            <Route
              element={<PrivacyPolicies />}
              path={"/politica-de-privacidad"}
            />
            <Route
              element={<CookiesPolicies />}
              path={"/politica-de-cookies"}
            />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
