import { contextGlobal, typeContextProfile } from "../context/context";
import { Card } from "../../interface/card";
import React, { useState } from "react";
type typeProvider = {
  children: React.ReactNode;
};

const ProviderBa: React.FC<typeProvider> = ({ children }) => {
  const [Cards, setCards] = useState<Card[]>([
    { define: "", img: "", terms: "" },
    { define: "", img: "", terms: "" },
    { define: "", img: "", terms: "" },
  ]);
  const data: typeContextProfile = {
    Cards,
    setCards,
  };
  return (
    <contextGlobal.Provider value={data}>{children}</contextGlobal.Provider>
  );
};
export default ProviderBa;
