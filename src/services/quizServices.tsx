import type { Quiz } from "@/types";

export const loadQuizzes = () => {
  try {
    const local = localStorage.getItem("quizzes");
    return local ? JSON.parse(local) : [];
  } catch {
    return [];
  }
};

export const saveQuizLocalStorage = (
  newQuiz: Quiz,
  existingQuizzes: Quiz[]
) => {
  const updated = [...existingQuizzes, newQuiz];
  localStorage.setItem("quizzes", JSON.stringify(updated));
  return true;
};

export const generateQuizId = (existingQuizzes: Quiz[]) => {
  return existingQuizzes.length > 0
    ? Math.max(...existingQuizzes.map((q) => q.id))
    : -1;
};

export const clearQuizzes = () => {
  localStorage.clear();
  window.location.reload();
};
