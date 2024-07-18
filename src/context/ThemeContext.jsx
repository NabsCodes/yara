import { createContext, useState, useEffect } from "react";

// Create a context for theme to be accessible in the component tree
export const ThemeContext = createContext();

// ThemeProvider component to wrap around the app/component tree
const ThemeProvider = ({ children }) => {
  // Function to get the preferred theme from localStorage or system preference
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme"); // Attempt to fetch theme from localStorage
    if (storedTheme) return storedTheme; // Return stored theme if available
    // Fallback to system theme preference if no stored theme is found
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  };

  // State to hold the current theme
  const [theme, setTheme] = useState(getPreferredTheme);
  // State to hold the system's theme preference
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  // Effect to update systemTheme state on system preference change
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () =>
      setSystemTheme(mediaQuery.matches ? "dark" : "light"); // Update systemTheme based on system preference
    mediaQuery.addEventListener("change", handleChange); // Listen for changes
    return () => mediaQuery.removeEventListener("change", handleChange); // Cleanup listener on component unmount
  }, []);

  // Effect to apply the theme to the document and store it in localStorage
  useEffect(() => {
    if (theme === "system") {
      document.documentElement.className = systemTheme; // Apply system theme if 'system' is selected
    } else {
      document.documentElement.className = theme; // Apply chosen theme
    }
    localStorage.setItem("theme", theme); // Store current theme in localStorage
  }, [theme, systemTheme]); // Re-run effect if theme or systemTheme changes

  // Function to update the theme state
  const setMode = (mode) => {
    setTheme(mode);
  };

  // Provide the theme and setMode function to the component tree
  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export ThemeProvider for use in the app
export default ThemeProvider;
