import { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import QuestionCard from '../components/QuestionCard';
import SearchBar from '../components/SearchBar';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

const HomePage = () => {
  const { questions, setSelectedQuestion } = useContext(QuestionContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(questions.map((question) => question.category))], [questions]);

  const filteredQuestions = questions.filter((question) => {
    const matchesCategory = category === 'All' || question.category === category;
    const matchesSearch =
      question.title.toLowerCase().includes(search.toLowerCase()) ||
      question.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Practice library</p>
          <h2>Browse interview questions</h2>
        </div>
      </div>
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter categories={categories} activeCategory={category} onChange={setCategory} />
      <div className="card-grid">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} onSelect={setSelectedQuestion} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
