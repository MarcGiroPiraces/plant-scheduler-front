import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar.component";
import { useGetIsUserLoggedIn } from "./hooks/user/useGetIsUserLoggedIn";
import { AddPlantPage } from "./pages/AddPlant";
import { AddSpotPage } from "./pages/AddSpot";
import { AddTransplantingPage } from "./pages/AddTransplanting";
import { AddWateringPage } from "./pages/AddWatering";
import { HomePage } from "./pages/Home";
import { LoginUserPage } from "./pages/LoginUser";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={isUserLoggedIn ? <Navigate to="/home" /> : <LoginUserPage />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/transplanting/plant/:plantId/"
          element={<AddTransplantingPage />}
        />
        <Route path="/watering/plant/:plantId/" element={<AddWateringPage />} />
        <Route path="/plant/" element={<AddPlantPage />} />
        <Route path="spot/" element={<AddSpotPage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </>
  );
}

export default App;
