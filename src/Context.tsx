import React, { createContext, useState,  ReactNode, useContext } from 'react';

// Define context types
interface AppContextType {
  scrolled: boolean;
  openSidebar: () => void;
  theme: string;
  switchTheme: () => void;
  smoothScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

// Create context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [scrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<string>('light');

  // Function to toggle theme
  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = targetId ? document.getElementById(targetId) : null;
  
    if (!targetElement) return;
  
    const offset = 50;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
  
    if ("scrollBehavior" in document.documentElement.style) {
      // Modern browsers
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback for older browsers
      window.scrollTo(0, offsetPosition);
    }
  };

  return (
    <AppContext.Provider value={{ 
      scrolled, 
      isSidebarOpen, 
      openSidebar, 
      closeSidebar, 
      theme, 
      switchTheme, 
      smoothScroll 
    }}>
      {children}
    </AppContext.Provider>
  );
}; 


export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
