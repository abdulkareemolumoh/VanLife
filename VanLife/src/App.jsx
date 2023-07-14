import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About/About";
import Vans from "../pages/Vans/Vans";
import Home from "../pages/Home";
import VanDetails from "../pages/Vans/VanDetails";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostNavBar from "../components/HostNavBar";
import HostVan from "../pages/Host/HostVan";
import HostVanDetails from "../pages/Host/HostVanDetails";
import HostVanInfo from "../pages/Host/HostVanInfo";
import HostVanPricing from "../pages/Host/HostVanPricing";
import HostVanPhoto from "../pages/Host/HostVanPhoto";
import "bootstrap/dist/css/bootstrap.min.css";

import "../server";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostNavBar />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVan />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photo" element={<HostVanPhoto />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
