// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import { App } from "./App.tsx";
import { LandingPage } from "./components/Landing.tsx";
import { Interface } from "./components/Interface.tsx";

// Router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// Providers
import StoreProvider from "@/lib/context/StoreProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/map",
        element: <Interface />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>,
);
