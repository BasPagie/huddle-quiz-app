
import type { Quiz } from "../types/Quiz.ts";

const sampleQuizzes: Quiz[] = [
  {
    id: 98,
    title: "Frontend Basics",
    userId: "user-1",
    userName: "Admin",
    questions: [
      {
        id: 0,
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
        id: 1,
        text: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JSON XML",
          "JavaScript Extension Language",
        ],
        correctOptionIndex: 0,
      },
      {
        id: 2,
        text: "Which hook is used for managing state in functional components?",
        options: [ 
          "useState",
          "useEffect",
          "useContext",
          "useReducer",
        ],
        correctOptionIndex: 0,
      }
    ],
  },
  {
    id: 99,
    title: "JavaScript Fundamentals",
    userId: "user-1",
    userName: "Admin",
    questions: [
      {
        id: 0,
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
        id: 1,
        text: "What is the output of 'typeof null' in JavaScript?",
        options: [
          "'null'",
          "'object'",
          "'undefined'",
          "'boolean'",
        ],
        correctOptionIndex: 1,
      },
      {
        id: 2,
        text: "Which method is used to add an element to the end of an array?",
        options: [
          "push()",
          "pop()",
          "shift()",
          "unshift()",
        ],
        correctOptionIndex: 0,
      }
    ],
  }
];

export default sampleQuizzes;