import { useState } from "react"
import HomePage from "./pages/HomePage"


function App() {
  let [isDarkMode, setIsDarkMode] = useState(false)

  let toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`${isDarkMode ? "dark": ""}`}>
      <HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
