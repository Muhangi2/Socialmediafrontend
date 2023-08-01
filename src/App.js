import "./App.css";
import Home from "./Home/Home";
import Profilepage from "./Profilepage/Profilepage";

function App() {
  return (
    <div className="App">
      {/* lets add blur div */}
      <div className="appblur">
        <div className="blur"></div>
        <div className="blur"></div>
      </div>
      {/* pagess */}
      <Home />
      {/* <Profilepage /> */}
    </div>
  );
}

export default App;