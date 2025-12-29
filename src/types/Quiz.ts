
export type Question = {
  id: number;
  text: string;
  options: string[];
  correctOptionIndex: number;
};

export type Quiz = {
  id: number;
  title: string;
  userId: string;
  userName: string;
  questions: Question[];
};