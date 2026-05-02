import { Drawer } from "../components/Drawer";

export const Navigation = () => {
  return (
    <>
      <div className="navbar bg-black shadow-sm">
        <div className="drawer">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-start">
            <label htmlFor="nav-drawer" className="px-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <div className="prose px-4">
              <h4>American Supply Chain</h4>
            </div>
            <img src={"flag.png"} className="w-8 pointer-events-none" />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="nav-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Sidebar content here */}
            <Drawer />
          </div>
        </div>
      </div>
    </>
  );
};
