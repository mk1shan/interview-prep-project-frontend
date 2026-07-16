import { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
  const [form, setForm] = useState({
    title: '',
    category: 'Behavioral',
    difficulty: 'Medium',
    description: '',
    answer: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddQuestion(form);
    setForm({
      title: '',
      category: 'Behavioral',
      difficulty: 'Medium',
      description: '',
      answer: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a question</h2>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} required />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Behavioral</option>
          <option>Technical</option>
          <option>Leadership</option>
        </select>
      </label>
      <label>
        Difficulty
        <select name="difficulty" value={form.difficulty} onChange={handleChange}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </label>
      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} required />
      </label>
      <label>
        Suggested answer
        <textarea name="answer" value={form.answer} onChange={handleChange} required />
      </label>
      <button type="submit">Save question</button>
    </form>
  );
};

export default QuestionForm;
