import { Link } from "react-router";

export const Drawer = () => {
  return (
    <>
      <div className="menu bg-black min-h-full w-80 m-0 p-0">
        <div className="navbar bg-black shadow-sm">
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
        <div className="p-8 flex flex-col justify-center">
          <Link
            to={{
              pathname: "/",
            }}
          >
            <button className="btn btn-sm w-full">Home</button>
          </Link>
          <br />
          <Link
            to={{
              pathname: "/map",
            }}
          >
            <button className="btn btn-sm w-full">Map</button>
          </Link>
        </div>
      </div>
    </>
  );
};
