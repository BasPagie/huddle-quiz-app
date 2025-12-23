
import type { Quiz } from "../types/Quiz.ts";

const sampleQuiz: Quiz = {
  id: "quiz-1",
  title: "Frontend Basics",
  questions: [
    {
      id: "q1",
      text: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A CSS framework",
        "A backend language",
        "A database",
      ],
      correctOptionIndex: 0,
    },
    {
      id: "q2",
      text: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "JavaScript Extension Language",
      ],
      correctOptionIndex: 0,
    },
  ],
};

export default sampleQuiz;