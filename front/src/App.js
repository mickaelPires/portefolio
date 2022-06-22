import "./App.css";
import NavBar from "./composants/NavBar";
import Routes from "./routes";

function App() {
  return (
    <div className="h-100 App">
      <div>
        <div className="fixed-bottom d-sm-none">
          <NavBar></NavBar>
        </div>
        <div className="d-none d-sm-block ">
          <NavBar></NavBar>
        </div>
      </div>
      <div id="containerPincipal" className="h-100 mx-3 mx-sm-5">
        <div className="h-100 px-sm-5">
          <div className="h-100 px-sm-5">
            <div className="h-100 bg-white px-sm-5">
              <Routes />
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
