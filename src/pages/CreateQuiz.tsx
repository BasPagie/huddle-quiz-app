import { Link } from "react-router-dom";
import cardImage from "../assets/react.svg";
import Button from "../components/Button";
import Card from "../components/Card";

const CreateQuiz = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">Create a quiz!</h1>

        <div className="px-3 flex justify-center gap-4">
          <Card title="Option 1" copy="Question 1" image={cardImage} />
        </div>

        <div className="px-3 gap-4 flex justify-center">
          <Link to="/">
            <Button copy="Back home" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
