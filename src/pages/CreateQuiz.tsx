import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

const CreateQuiz = () => {
  const [title, setTitle] = useState("Enter Quiz Name...");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const formEl = event.currentTarget;
    // const formData = new FormData(formEl);
    // const email = formData.get("email");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white/90">
      <div className="max-w-screen-xl mx-auto p-8 text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold leading-tight">Create a quiz!</h1>

        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col items-center"
        >
          <input
            type="text"
            id="name"
            name="title"
            className="text-5xl w-full font-bold text-center mb-8 p-5 pt-4 bg-slate-700 rounded-lg"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log("Quiz title changed to:", e.target.value);
            }}
          />
          <div className="flex flex-row gap-6 text-center w-full max-w-4xl mb-6">
            <div className="option bg-slate-700 p-8 pt-6 rounded-lg shadow-md flex flex-col gap-6 items-center justify-between">
              <h2 className="text-5xl font-bold leading-tight">
                Enter question text...
              </h2>
              <div className="px-3 flex justify-center gap-4 flex-wrap">
                <Card
                  key={1}
                  title="A"
                  copy="Option text goes here..."
                  buttonCopy="Select as correct"
                />
                <Card
                  key={2}
                  title="B"
                  copy="Option text goes here..."
                  buttonCopy="Select as correct"
                />
                <Button
                  copy="+"
                  variant="success"
                  onClick={() => {
                    console.log("Add option clicked");
                  }}
                />
              </div>
            </div>
            <Button
              copy="+"
              variant="success"
              onClick={() => {
                console.log("Add question clicked");
              }}
            />
          </div>
        </form>
        <div className="px-3 gap-4 flex justify-center">
          <Link to="/">
            <Button copy="Save Quiz" variant="success" />
          </Link>
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
