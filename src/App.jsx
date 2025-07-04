import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/MainHome.jsx";
import SlashReveal from "./components/SlashReveal.jsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("seenIntro", "true");
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro ? (
        <SlashReveal onFinish={handleIntroFinish} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
