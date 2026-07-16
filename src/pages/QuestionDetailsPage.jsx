import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

const QuestionDetailsPage = () => {
  const { selectedQuestion } = useContext(QuestionContext);

  if (!selectedQuestion) {
    return null;
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Selected question</p>
          <h2>{selectedQuestion.title}</h2>
        </div>
      </div>
      <p className="meta">{selectedQuestion.category} • {selectedQuestion.difficulty}</p>
      <p>{selectedQuestion.description}</p>
      <div className="answer-block">
        <h3>Suggested answer</h3>
        <p>{selectedQuestion.answer}</p>
      </div>
    </section>
  );
};

export default QuestionDetailsPage;
