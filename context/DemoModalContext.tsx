"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface DemoModalContextType {
  isOpen: boolean;
  initialSolution: string;
  openDemoModal: (solution?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSolution, setInitialSolution] = useState<string>("");

  const openDemoModal = useCallback((solution?: string) => {
    if (solution) {
      setInitialSolution(solution);
    }
    setIsOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsOpen(false);
    setInitialSolution("");
  }, []);

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        initialSolution,
        openDemoModal,
        closeDemoModal,
      }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
