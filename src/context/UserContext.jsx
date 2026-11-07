import { createContext } from "react";
export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = {
    name: "Wasim",
    age: 23,
    email: "wasim@gmail.com",
    role: "Developer",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
