import { useThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
