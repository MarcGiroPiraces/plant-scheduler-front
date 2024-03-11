import { Navigate, Route, Routes } from "react-router-dom";
import { useGetIsUserLoggedIn } from "./hooks/useGetIsUserLoggedIn";
import { AddPlantPage } from "./pages/AddPlant";
import { AddTransplantingPage } from "./pages/AddTransplanting";
import { AddWateringPage } from "./pages/AddWatering";
import { LoginUserPage } from "./pages/LoginUser";
import { PlantList } from "./plant/components/PlantList.component";

function App() {
  const { isUserLoggedIn } = useGetIsUserLoggedIn();
  if (isUserLoggedIn === null) {
    return LoginUserPage();
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={isUserLoggedIn ? <PlantList /> : <LoginUserPage />}
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
