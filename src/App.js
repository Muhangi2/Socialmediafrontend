import "./App.css";
import Auth from "./Auth/Auth";
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
      {/* <Home /> */}
      {/* <Profilepage /> */}
      <Auth />
    </div>
  );
}

export default App;
