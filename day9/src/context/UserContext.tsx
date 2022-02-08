import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Willian");
  const [location, setLocation] = useState("Mars");

  return (
    <UserContext.Provider value={{ name, setName, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
};
