import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${theme.background}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Light Theme using the provided color scheme
const lightTheme = {
  name: "light",
  background: "bg-gray-50",
  navBg: "bg-[#1E3A8A]",
  mobileMenuBg: "bg-[#1E3A8A]",
  text: "text-[#1F2937]",
  navText: "text-white",
  primary: "text-[#1E3A8A]",
  primaryBg: "bg-[#1E3A8A]",
  secondary: "text-[#D97706]",
  secondaryBg: "bg-amber-100",
  secondaryText: "text-[#B45309]",
  accent: "text-gray-600",
  cardBg: "bg-white",
  button: "bg-[#1E3A8A] text-white cursor-pointer",
  buttonHover: "hover:bg-[#1D4ED8]",
  border: "border-gray-200",
  shadow: "shadow-md",
  tableHeaderBg: "bg-gray-100",
  rowHoverBg: "bg-gray-50",
};

// Dark Theme adaptations
const darkTheme = {
  name: "dark",
  background: "bg-gray-900",
  navBg: "bg-gray-800",
  mobileMenuBg: "bg-gray-900",
  text: "text-gray-100",
  navText: "text-white",
  primary: "text-[#F59E0B]",
  primaryBg: "bg-[#F59E0B]",
  secondary: "text-[#60A5FA]",
  secondaryBg: "bg-blue-950/60",
  secondaryText: "text-blue-300",
  accent: "text-[#9CA3AF]",
  cardBg: "bg-gray-800",
  button: "bg-[#F59E0B] text-[#1F2937] cursor-pointer",
  buttonHover: "hover:bg-amber-500",
  border: "border-gray-700",
  shadow: "shadow-lg",
  tableHeaderBg: "bg-gray-700/80",
  rowHoverBg: "bg-gray-700/40",
};
