
export type Question = {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
};

export type Quiz = {
  id: string;
  title: string;
  userId: string;
  userName: string;
  questions: Question[];
};