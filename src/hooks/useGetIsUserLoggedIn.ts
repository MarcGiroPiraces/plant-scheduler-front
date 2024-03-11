import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { IsUserLoggedIn } from "../providers/isUserLoggedInProvider";
import { useIsUserLoggedInContext } from "./useIsUserLoggedInContext";

export const useGetIsUserLoggedIn = () => {
  const { isUserLoggedIn, setIsUserLoggedInData } = useIsUserLoggedInContext();
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token === "undefined" || token === null) {
      setIsUserLoggedInData(null);
    } else {
      const decodedToken = jwtDecode(token as string) as IsUserLoggedIn;
      setIsUserLoggedInData(decodedToken);
    }
  }, [setIsUserLoggedInData]);

  return { isUserLoggedIn };
};
