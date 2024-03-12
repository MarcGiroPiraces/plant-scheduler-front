import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useGetIsUserLoggedIn } from "./hooks/useGetIsUserLoggedIn";
import { AddPlantPage } from "./pages/AddPlant";
import { AddTransplantingPage } from "./pages/AddTransplanting";
import { AddWateringPage } from "./pages/AddWatering";
import { LoginUserPage } from "./pages/LoginUser";
import { PlantList } from "./plant/components/PlantList.component";

function App() {
  const { isUserLoggedIn } = useGetIsUserLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={isUserLoggedIn ? <Navigate to="/home" /> : <LoginUserPage />}
        />
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
