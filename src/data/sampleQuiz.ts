
import type { Quiz } from "../types/Quiz.ts";

const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Frontend Basics",
    userId: "user-123",
    userName: "Bas",
    questions: [
      {
        id: "1",
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
        id: "2",
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
  },
  {
    id: "2",
    title: "JavaScript Fundamentals",
    userId: "user-456",
    userName: "Alice",
    questions: [
      {
        id: "1",
        text: "Which of the following is a primitive data type in JavaScript?",
        options: [
          "String",
          "Object",
          "Array",
          "Function",
        ],
        correctOptionIndex: 0,
      }, 
      {
        id: "2",
        text: "What is the output of 'typeof null' in JavaScript?",
        options: [
          "'null'",
          "'object'",
          "'undefined'",
          "'boolean'",
        ],
        correctOptionIndex: 1,
      },
    ],
  },
];

export default sampleQuizzes;