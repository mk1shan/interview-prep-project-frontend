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
            <Employee
  name1="John1"
  position1="React Developer1"
  salary1={2500}
/>
       <Employee
  name1="John1"
  position1="React Developer1"
  salary1={2500}
/>
          {/* <QuestionDetailsPage />
          <AddQuestionPage /> */}
        </main>
      </div>
    </QuestionProvider>
  );
}

export default App;
