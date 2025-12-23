import { Link } from "react-router-dom";
import Button from "../components/Button";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <h1 className="text-9xl font-bold leading-tight mb-4">404</h1>
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Page Not Found
        </h2>
        <p className="text-xl font-normal leading-tight mb-8 text-white/70">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="p-3 flex justify-center">
          <Link to="/">
            <Button copy="Go Back Home" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
