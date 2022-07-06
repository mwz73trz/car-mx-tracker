import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CheckLoginPage from "./pages/CheckLoginPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CreateCarPage from "./pages/car/CreateCarPage";
import UpdateCarPage from "./pages/car/UpdateCarPage";
import DeleteCarPage from "./pages/car/DeleteCarPage";
import FuelsPage from "./pages/fuel/FuelsPage";
import AddFuelPage from "./pages/fuel/AddFuelPage";
import UpdateFuelPage from "./pages/fuel/UpdateFuelPage";
import DeleteFuelPage from "./pages/fuel/DeleteFuelPage";
import OilsPage from "./pages/oil/OilsPage";
import CreateOilPage from "./pages/oil/CreateOilPage";
import UpdateOilPage from "./pages/oil/UpdateOilPage";
import DeleteOilPage from "./pages/oil/DeleteOilPage";

export default function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="cars/create"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateCarPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateCarPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteCarPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/fuels"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <FuelsPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/fuels/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <AddFuelPage username={username} />}
              />
            }
          />
          <Route
            path="fuels/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateFuelPage username={username} />}
              />
            }
          />
          <Route
            path="fuels/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteFuelPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/oils"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <OilsPage username={username} />}
              />
            }
          />
          <Route
            path="cars/:id/oils/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateOilPage username={username} />}
              />
            }
          />
          <Route
            path="oils/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateOilPage username={username} />}
              />
            }
          />
          <Route
            path="oils/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteOilPage username={username} />}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
