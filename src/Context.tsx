import React, { createContext, useState, ReactNode, useContext } from "react";

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

// ✅ Default values (to prevent undefined issue)
const defaultContextValue: AppContextType = {
  scrolled: false,
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  theme: "light",
  switchTheme: () => {},
  smoothScroll: () => {},
};

// ✅ Create context with default values
export const AppContext = createContext<AppContextType>(defaultContextValue);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  // Function to toggle theme
  const switchTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Function to open sidebar
  const openSidebar = (): void => {
    setIsSidebarOpen(true);
  };

  // Function to close sidebar
  const closeSidebar = (): void => {
    setIsSidebarOpen(false);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
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
    <AppContext.Provider
      value={{
        scrolled,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        theme,
        switchTheme,
        smoothScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom hook (No more undefined error)
export const useAppContext = (): AppContextType => {
  return useContext(AppContext);
};
