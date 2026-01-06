import type { initialQuiz } from "../data/sampleQuiz";

// General Quiz Type Definitions
export interface Quiz {
  id: number;
  title: string;
  userName: string;
  userId: string;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctOptionIndex: number;
  }[];
}

export interface QuizFormProps {
  title?: string;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctOptionIndex: number;
  }[];
  onTitleChange: (newTitle: string) => void;
  onQuestionUpdate: (
    questionIndex: number,
    updatedQuestion: {
      id: number;
      text: string;
      options: string[];
      correctOptionIndex: number;
    }
  ) => void;
  onQuestionAdd: () => void;
  onQuestionRemove: (questionIndex: number) => void;
  runForm: (e: React.FormEvent) => void;
}

export interface QuizEditorProps {
  questionIndex: number;
  question: {
    id: number;
    text: string;
    options: string[];
    correctOptionIndex: number;
  };
  onQuestionUpdate: (
    questionIndex: number,
    updatedQuestion: {
      id: number;
      text: string;
      options: string[];
      correctOptionIndex: number;
    }
  ) => void;
  onQuestionRemove: (questionIndex: number) => void;
}

export interface UseQuizFormReturn {
  title: string;
  questions: typeof initialQuiz.questions;
  setTitle: (title: string) => void;
  handleQuestionUpdate: (index: number, question: typeof initialQuiz.questions[0]) => void;
  addQuestion: () => void;
  removeQuestion: (index: number) => void;
  saveQuiz: () => boolean;
}