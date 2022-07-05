import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCarPage from "./pages/car/CreateCarPage";
import UpdateCarPage from "./pages/car/UpdateCarPage";
import DeleteCarPage from "./pages/car/DeleteCarPage";
import FuelsPage from "./pages/fuel/FuelsPage";
import AddFuelPage from "./pages/fuel/AddFuelPage";
import UpdateFuelPage from "./pages/fuel/UpdateFuelPage";
import DeleteFuelPage from "./pages/fuel/DeleteFuelPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars/create" element={<CreateCarPage />} />
          <Route path="cars/:id/update" element={<UpdateCarPage />} />
          <Route path="cars/:id/delete" element={<DeleteCarPage />} />
          <Route path="cars/:id/fuels" element={<FuelsPage />} />
          <Route path="cars/:id/fuels/add" element={<AddFuelPage />} />
          <Route path="fuels/:id/update" element={<UpdateFuelPage />} />
          <Route path="fuels/:id/delete" element={<DeleteFuelPage />} />
        </Routes>
      </Router>
    </div>
  );
}
