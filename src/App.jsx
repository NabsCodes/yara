import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
