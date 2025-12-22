import "./App.css";
import cardImage from "./assets/react.svg";
import Button from "../components/Button";
import Card from "../components/Card";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-8">Huddle</h1>
        <p className="text-2xl font-normal leading-tight mb-8">
          The Office Quiz App!
        </p>

        <div className="p-3 flex justify-center gap-4">
          <Card title="Option 1" copy="Question 1" image={cardImage} />
        </div>

        <div className="p-3 flex justify-center">
          <Button
            copy="value"
            variant="primary"
            onClick={() => {
              console.log("Button clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
