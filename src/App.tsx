import { Link } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">Huddle</h1>
        <p className="text-2xl font-normal leading-tight">
          The Office Quiz App!
        </p>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/create-quiz">
            <Button copy="Create Quiz" variant="primary" />
          </Link>
          <Link to="/join-quiz">
            <Button copy="Join Quiz" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
