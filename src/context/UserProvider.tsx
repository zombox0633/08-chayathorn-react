import { ReactNode, useMemo, useState } from "react";
import { UserContext, UserDataType } from "./UserContext";

export type ContextProviderPropsType = {
  children: ReactNode;
};

export const UserProvider = ({ children }: ContextProviderPropsType) => {
  const [user, setUser] = useState<UserDataType[]>([]);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
