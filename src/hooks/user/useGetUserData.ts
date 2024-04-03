import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { UserData } from "../../providers/userDataProvider";
import { useUserDataContext } from "./useUserDataContext";

export const useGetUserData = () => {
  const { userData, setUserData } = useUserDataContext();
  console.log("hola");

  useEffect(() => {
    console.log("hola2");
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      setUserData({
        isUserLoggedIn: false,
      } as UserData);
    } else {
      const decodedToken = jwtDecode(token as string);
      setUserData({
        isUserLoggedIn: true,
        data: decodedToken,
      } as UserData);
    }
  }, [setUserData]);

  return { userData };
};
