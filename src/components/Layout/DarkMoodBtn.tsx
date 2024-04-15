import { useState } from "react";
const DarkMoodBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "למצב יום" : "למצב לילה"}
    </button>
  );
};

export default DarkMoodBtn;