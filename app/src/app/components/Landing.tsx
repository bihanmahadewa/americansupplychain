import { Link } from "react-router";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full bg-black flex flex-col items-center justify-center px-2">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <img src={"flag.png"} className="w-3/5 pointer-events-none" />
          </div>
          <div className="flex items-center justify-center border-l pl-4">
            <div className="prose">
              <h1 className="mb-8">American Supply Chain</h1>
              <Link
                to={{
                  pathname: "/map",
                }}
              >
                <div className="btn w-1/2 mb-12">Launch</div>
              </Link>
              <br />
              <br />
              <small>Developed for America</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
