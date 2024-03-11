import { useContext } from "react";
import { IsUserLoggedInContext } from "../providers/isUserLoggedInProvider";

export const useIsUserLoggedInContext = () => {
  const context = useContext(IsUserLoggedInContext);
  if (!context) {
    throw new Error(
      "useIsUserLoggedInContext must be used within a IsUserLoggedInProvider"
    );
  }

  return context;
};
