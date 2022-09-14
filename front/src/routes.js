import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ExperiencesProComponent from "./composants/ExperiencesProComponent";
import HomePage from "./pages/HomePage";
import ProfileComponent from "./composants/ProfileComponent";

class routes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/ProfilePage" element={<ProfileComponent />}></Route>
          <Route
            path="/ExperiencesProPage"
            element={<ExperiencesProComponent />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default routes;
