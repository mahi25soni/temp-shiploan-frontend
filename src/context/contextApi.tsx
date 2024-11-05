"use client";
import React, { createContext, useContext, useState } from 'react';

interface NavbarContextType {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Home"); // Default tab

  return (
    <NavbarContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
