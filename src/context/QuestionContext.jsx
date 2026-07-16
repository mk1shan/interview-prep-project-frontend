import { createContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialQuestions } from '../data/questions';

export const QuestionContext = createContext(null);

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useLocalStorage('interview-questions', initialQuestions);
  const [selectedQuestionId, setSelectedQuestionId] = useState(initialQuestions[0].id);

  const addQuestion = (question) => {
    const nextQuestion = {
      id: Date.now(),
      ...question,
    };

    setQuestions((current) => [nextQuestion, ...current]);
    setSelectedQuestionId(nextQuestion.id);
  };

  const selectedQuestion = useMemo(() => {
    return questions.find((question) => question.id === selectedQuestionId) || questions[0] || null;
  }, [questions, selectedQuestionId]);

  const value = useMemo(
    () => ({
      questions,
      addQuestion,
      selectedQuestion,
      setSelectedQuestion: setSelectedQuestionId,
    }),
    [questions, selectedQuestion],
  );

  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
};

export default QuestionProvider;
