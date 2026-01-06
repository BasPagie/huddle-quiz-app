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

export interface OptionCardProps {
  questionIndex: number;
  optionIndex: number;
  isCorrect: boolean;
  canRemove: boolean;
  onTextChange: (text: string) => void;
  onSetCorrect: () => void;
  onRemove: () => void;
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