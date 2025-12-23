import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import CreateQuiz from "./pages/CreateQuiz.tsx";
import JoinQuiz from "./pages/JoinQuiz.tsx";
import PlayQuiz from "./pages/PlayQuiz.tsx";
import PageNotFound from "./pages/404.tsx";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-quiz", element: <CreateQuiz /> },
  { path: "/join-quiz", element: <JoinQuiz /> },
  { path: "/play-quiz", element: <PlayQuiz /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
