// React Router
import { Outlet } from "react-router";

// Components
import { Navigation } from "./layout/Navigation";

// Providers
import { PointProvider } from "@/lib/context/PointProvider";

// Styles
import "./index.css";

export const App = () => {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] w-screen">
        <Navigation />
        <PointProvider>
          <Outlet />
        </PointProvider>
      </div>
    </>
  );
};
