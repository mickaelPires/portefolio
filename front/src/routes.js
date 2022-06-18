import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ExperiencesProPage from "./pages/ExperiencesProPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

class routes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profil" element={<ProfilePage />}></Route>
          <Route
            path="/ExperiencesPro"
            element={<ExperiencesProPage />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default routes;
