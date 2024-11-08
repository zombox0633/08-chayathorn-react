import { createContext } from "react";

export type UserDataType = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
};

export type UserContextType = {
  user: UserDataType[];
  setUser: React.Dispatch<React.SetStateAction<UserDataType[]>>;
};

export const UserContext = createContext<UserContextType>({
  user: [],
  setUser: () => {
    throw new Error("setUser function must be overridden");
  },
});
