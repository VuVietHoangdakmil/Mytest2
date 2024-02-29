import { createContext } from "react";
import { Card } from "../../interface/card";

export interface typeContextProfile {
  Cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}
const contextGlobal = createContext<typeContextProfile>({
  Cards: [],
  setCards: () => {},
});

export { contextGlobal };
