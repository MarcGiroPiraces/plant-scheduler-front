import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface UserData {
  isUserLoggedIn: boolean;
  data?: {
    id: number;
    email: string;
    name: string;
    iat: number;
    exp: number;
  };
}

interface UserDataContextProps {
  userData: UserData | null;
  setUserData: Dispatch<SetStateAction<UserData | null>>;
}

export const UserDataContext = createContext<UserDataContextProps>({
  userData: { isUserLoggedIn: false },
  setUserData: () => {},
});

export function UserDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
