import "./App.css";
import NavBar from "./composants/NavBar";
import HomePage from "./pages/HomePage";
import ProfileComponent from "./composants/ProfileComponent";
import ExperiencesProComponent from "./composants/ExperiencesProComponent";
import TrainingComponent from "./composants/TrainingComponent";

import Routes from "./routes";

function App() {
  return (
    <div className="h-100 App">
      <div>
        <div className="fixed-bottom d-sm-none">
          <NavBar></NavBar>
        </div>
        <div className="fixed-top d-none d-sm-block ">
          <NavBar></NavBar>
        </div>
      </div>
      <div id="containerPincipal" className="h-100 mx-3 mx-sm-5">
        <div className="h-100 px-sm-5">
          <div className="h-100 px-sm-5">
            <div className="h-100 bg-white px-sm-5">
              {/* <Routes /> */}
              <div id="HomePage" class="border-bottom border-secondary py-5">
                <HomePage />
              </div>
              <div
                id="ProfilePage"
                class="border-bottom border-secondary  py-5"
              >
                <ProfileComponent />
              </div>
              <div
                id="ExperiencesProPage"
                class="border-bottom border-secondary  py-5"
              >
                <ExperiencesProComponent />
              </div>
              <div
                id="TrainingComponent"
                class="border-bottom border-secondary  py-5"
              >
                <TrainingComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
