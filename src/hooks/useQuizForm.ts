// useQuizForm.ts
import { useState } from 'react';
import { initialQuiz, sampleQuizzes } from '../data/sampleQuiz';
import { generateQuizId, loadQuizzes, saveQuizLocalStorage } from '../services/quizServices';
import type { UseQuizFormReturn } from '../types/quiz';
import { DEFAULT_QUESTION, DEFAULT_USER_ID, DEFAULT_USER_NAME } from '../constants/quiz';

export const useQuizForm = (): UseQuizFormReturn => {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState(initialQuiz.questions);

    // Question management
    const handleQuestionUpdate = (
        questionIndex: number,
        updatedQuestion: (typeof initialQuiz.questions)[0]
    ) => {
        setQuestions(
            questions.map((q, i) => (i === questionIndex ? updatedQuestion : q))
        );
    };

    const addQuestion = () => {
        const newId =
            questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 0;
        const newQuestion = {
            id: newId,
            ...DEFAULT_QUESTION,
        };
        setQuestions([...questions, newQuestion]);
    };

    const removeQuestion = (questionIndex: number) => {
        const updatedQuestions = questions.filter((_, index) => index !== questionIndex)
        setQuestions(updatedQuestions);
    };

    // Quiz persistence
    const saveQuiz = () => {
        const existingQuizzes = loadQuizzes();
        const allQuizzes = [...sampleQuizzes, ...existingQuizzes];
        const id = generateQuizId(allQuizzes);
        
        const newQuiz = {
            id: id,
            title: title,
            userId: DEFAULT_USER_ID,
            userName: DEFAULT_USER_NAME,
            questions: questions,
        };
        
        try {
            saveQuizLocalStorage(newQuiz, existingQuizzes);
            return true;
        } catch {
            return false;
        }
    };

    return {
        title,
        questions,
        setTitle,
        handleQuestionUpdate,
        addQuestion,
        removeQuestion,
        saveQuiz
    };
};

export default useQuizForm;