import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import Profilepage from "./Profilepage/Profilepage";
import { Navigate, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.authreducer.authdata);
  console.log(user);
  return (
    <div className="App">
      {/* lets add blur div */}
      <div className="appblur">
        <div className="blur"></div>
        <div className="blur"></div>
      </div>

      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />

        <Route
          path="/profile/:id"
          element={user ? <Profilepage /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
