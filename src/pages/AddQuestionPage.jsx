import { useContext } from 'react';
import QuestionForm from '../components/QuestionForm';
import { QuestionContext } from '../context/QuestionContext';

const AddQuestionPage = () => {
  const { addQuestion } = useContext(QuestionContext);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">New entry</p>
          <h2>Create your own practice prompt</h2>
        </div>
      </div>
      <QuestionForm onAddQuestion={addQuestion} />
    </section>
  );
};

export default AddQuestionPage;
