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
  mobileMenuBg: "bg-[#1E3A8A]", // ✅ added
  text: "text-[#1F2937]",
  navText: "text-white",
  primary: "text-[#1E3A8A]",
  secondary: "text-[#F59E0B]",
  accent: "text-[#9CA3AF]",
  cardBg: "bg-white",
  button: "bg-[#1E3A8A] text-white",
  buttonHover: "hover:bg-[#1D4ED8]",
  border: "border-gray-200",
  shadow: "shadow-md",
};

// Dark Theme adaptations
const darkTheme = {
  name: "dark",
  background: "bg-gray-900",
  navBg: "bg-gray-800",
  mobileMenuBg: "bg-gray-900", // ✅ added
  text: "text-gray-100",
  navText: "text-white",
  primary: "text-[#F59E0B]",
  secondary: "text-[#1E3A8A]",
  accent: "text-[#9CA3AF]",
  cardBg: "bg-gray-800",
  button: "bg-[#F59E0B] text-[#1F2937]",
  buttonHover: "hover:bg-amber-500",
  border: "border-gray-700",
  shadow: "shadow-lg",
};
