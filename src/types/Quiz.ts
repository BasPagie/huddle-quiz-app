import type { initialQuiz } from "../data/sampleQuiz";

// Supabase Database Types (match actual DB schema)
export interface DbOption {
  id: string;
  question_id: string;
  text: string;
  is_correct: boolean;
  order_index: number;
}

export interface DbQuestion {
  id: string;
  quiz_id: string;
  text: string;
  order_index: number;
  Options: DbOption[];
}

export interface DbQuiz {
  id: string;
  name: string;
  week_number: number;
  type: string;
  created_by: string;
  created_at: string;
  Questions: DbQuestion[];
}

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