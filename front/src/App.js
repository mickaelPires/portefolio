import logo from "./logo.svg";
import "./App.css";
import NavBar from "./composants/NavBar";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <div className="fixed-bottom d-sm-none">
        <NavBar></NavBar>
      </div>
      <div className="d-none d-sm-block ">
        <NavBar></NavBar>
      </div>
      <div className="mt-5">
        <Routes />
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
