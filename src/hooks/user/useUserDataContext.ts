import { useContext } from "react";
import { UserDataContext } from "../../providers/userDataProvider";

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      "useUserDataContext must be used within a UserDataProvider"
    );
  }

  return context;
};
