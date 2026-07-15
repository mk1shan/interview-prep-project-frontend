import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import LoginPage from './pages/LoginPage';
import QuestionsPage from './pages/QuestionsPage';
import RegisterPage from './pages/RegisterPage';
import ResultPage from './pages/ResultPage';
import SessionsPage from './pages/SessionsPage';
import StartInterviewPage from './pages/StartInterviewPage';

function App() {
  return (
    <AuthProvider>
      <div className="app-shell">
        <Navbar />
        <main className="content">
          <ProtectedRoute>
            <HomePage />
            <QuestionsPage />
            <StartInterviewPage />
            <InterviewPage />
            <ResultPage />
            <SessionsPage />
          </ProtectedRoute>
          <LoginPage />
          <RegisterPage />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
