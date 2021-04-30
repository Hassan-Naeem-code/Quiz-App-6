import React from "react";

export type QuizType = {
  category: string;
  correct_answer: string;
  difficult: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionType = {
  question: string;
  answer: string;
  options: string[];
  correct_answer: string;
};

export type questionPropsType = {
        questions?: any;
        answers: any,
        callback? : (e: React.MouseEvent<HTMLButtonElement>) => void;
        userAnswer? : any;
        questionNumber? : number;
        totalQuestions? : number;
};