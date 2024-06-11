import React from "react";
import Home from "../components/Home";
import MA from "../components/MA";
import ErrorPage from "../components/erorr-page";

import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function BrowsRout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maaaaaaaaaa" element={<MA />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
