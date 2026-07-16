import Employee from './components/Employee';
import Header from './components/Header';
import { QuestionProvider } from './context/QuestionContext';
import AddQuestionPage from './pages/AddQuestionPage';
import HomePage from './pages/HomePage';
import QuestionDetailsPage from './pages/QuestionDetailsPage';

function App() {
  return (
    <QuestionProvider>
      <div className="app-shell">
        {/* <Header /> */}
        <main className="main-grid">
          <Employee />
          {/* <QuestionDetailsPage />
          <AddQuestionPage /> */}
        </main>
      </div>
    </QuestionProvider>
  );
}

export default App;
