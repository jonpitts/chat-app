import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirebasePage from "./pages/firebase/FirebasePage";
import Home from "./pages/Home";

function App() {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, [setColorMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firebase" element={<FirebasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
