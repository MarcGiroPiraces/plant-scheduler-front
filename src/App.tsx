import { Navigate, Route, Routes } from "react-router-dom";
import { AddPlantPage } from "./pages/AddPlant";
import { AddTransplantingPage } from "./pages/AddTransplanting";
import { AddWateringPage } from "./pages/AddWatering";
import { PlantList } from "./plant/components/PlantList.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PlantList />} />
        <Route
          path="/transplanting/plant/:plantId/"
          element={<AddTransplantingPage />}
        />
        <Route path="/watering/plant/:plantId/" element={<AddWateringPage />} />
        <Route path="/plant/" element={<AddPlantPage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </>
  );
}

export default App;
