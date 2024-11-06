import { ReactNode, useEffect, useMemo, useState } from "react";
import { UserContext, UserDataType } from "./UserContext";

export type ContextProviderPropsType = {
  children: ReactNode;
};

export const UserProvider = ({ children }: ContextProviderPropsType) => {
  const [user, setUser] = useState<UserDataType[]>(() => {
    try {
      const storedData = localStorage.getItem("user");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Error parsing localStorage data: ", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
