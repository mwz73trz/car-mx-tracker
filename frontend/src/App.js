import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCarPage from "./pages/car/CreateCarPage";
import UpdateCarPage from "./pages/car/UpdateCarPage";
import DeleteCarPage from "./pages/car/DeleteCarPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cars/create" element={<CreateCarPage />} />
          <Route path="cars/:id/update" element={<UpdateCarPage />} />
          <Route path="cars/:id/delete" element={<DeleteCarPage />} />
        </Routes>
      </Router>
    </div>
  );
}
