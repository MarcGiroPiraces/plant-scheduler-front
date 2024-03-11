import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface IsUserLoggedIn {
  id: number;
  email: string;
  name: string;
  iat: number;
  exp: number;
}

interface IsUserLoggedInContextProps {
  isUserLoggedIn: IsUserLoggedIn | null;
  setIsUserLoggedInData: Dispatch<SetStateAction<IsUserLoggedIn | null>>;
}

export const IsUserLoggedInContext =
  createContext<IsUserLoggedInContextProps | null>(null);

export function IsUserLoggedInContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isUserLoggedIn, setIsUserLoggedInData] =
    useState<IsUserLoggedIn | null>(null);

  return (
    <IsUserLoggedInContext.Provider
      value={{ isUserLoggedIn, setIsUserLoggedInData }}
    >
      {children}
    </IsUserLoggedInContext.Provider>
  );
}
