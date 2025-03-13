import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import QuizPage from "./pages/Quizzes/QuizPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="quizzes" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
