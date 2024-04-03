import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar.component";
import { useGetUserData } from "./hooks/user/useGetUserData";
import { AddPlantPage } from "./pages/AddPlant";
import { AddSpotPage } from "./pages/AddSpot";
import { AddTransplantingPage } from "./pages/AddTransplanting";
import { AddWateringPage } from "./pages/AddWatering";
import { DetailPlantPage } from "./pages/DetailPlant";
import { HomePage } from "./pages/Home";
import { LoginUserPage } from "./pages/LoginUser";
import { UserData } from "./providers/userDataProvider";

function App() {
  const { userData } = useGetUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData && (userData as UserData).isUserLoggedIn === false) {
      navigate("/login");
    }
    if (!userData) return;
  }, [userData, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={
            (userData as UserData)?.data ? (
              <Navigate to="/home" />
            ) : (
              <LoginUserPage />
            )
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/transplanting/plant/:plantId/"
          element={<AddTransplantingPage />}
        />
        <Route path="/watering/plant/:plantId/" element={<AddWateringPage />} />
        <Route path="/plant/" element={<AddPlantPage />} />
        <Route path="/plant/:id/" element={<DetailPlantPage />} />
        <Route path="spot/" element={<AddSpotPage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </>
  );
}

export default App;
