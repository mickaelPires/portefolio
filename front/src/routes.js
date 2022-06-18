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
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          <Route
            path="/ExperiencesProPage"
            element={<ExperiencesProPage />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default routes;
