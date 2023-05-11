"use client";
import { ReactNode, createContext, useState } from "react";

interface ITestProviderProps {
  children: ReactNode;
}

export const TestContext = createContext({});

export default function TestProvider({ children }: ITestProviderProps) {
  const [teste, setTest] = useState("ola");

  return (
    <TestContext.Provider value={{ teste }}>{children}</TestContext.Provider>
  );
}


// A pagina que for consumir esse contexto tem que "use clien"