"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface EnterpriseModalContextType {
  isOpen: boolean;
  solutionName: string;
  openEnterpriseModal: (solutionName?: string) => void;
  closeEnterpriseModal: () => void;
}

const EnterpriseModalContext = createContext<EnterpriseModalContextType | undefined>(undefined);

export function EnterpriseModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionName, setSolutionName] = useState<string>("");

  const openEnterpriseModal = useCallback((solution?: string) => {
    if (solution) {
      setSolutionName(solution);
    }
    setIsOpen(true);
  }, []);

  const closeEnterpriseModal = useCallback(() => {
    setIsOpen(false);
    setSolutionName("");
  }, []);

  return (
    <EnterpriseModalContext.Provider
      value={{
        isOpen,
        solutionName,
        openEnterpriseModal,
        closeEnterpriseModal,
      }}
    >
      {children}
    </EnterpriseModalContext.Provider>
  );
}

export function useEnterpriseModal() {
  const context = useContext(EnterpriseModalContext);
  if (!context) {
    throw new Error("useEnterpriseModal must be used within an EnterpriseModalProvider");
  }
  return context;
}
