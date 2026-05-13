import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JobCategories } from './components/JobCategories';
import { FeaturedJobs } from './components/FeaturedJobs';
import { Footer } from './components/Footer';
import { useParams } from 'react-router-dom';
import './App.scss'
import { LoginForm } from './components/auth/login';
import { RegisterForm } from './components/auth/register';

function HomePage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <Hero />
        <JobCategories />
        <FeaturedJobs />
      </main>
      <Footer />
    </div>
  );
}

function JobDetailPage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Job Details - ID: {id}</h1>
          <p className="text-gray-600 mt-4">Job details page will be implemented here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function JobListPage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Pretraga poslova</h1>
          <p className="text-gray-600 mt-4">Job list page will be implemented here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StudentProfilePage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Moj profil</h1>
          <p className="text-gray-600 mt-4">Student profile page will be implemented here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function EmployerDashboardPage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard poslodavca</h1>
          <p className="text-gray-600 mt-4">Employer dashboard page will be implemented here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ChatListPage({ onShowLogin, onShowRegister }: { onShowLogin: () => void; onShowRegister: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onShowLogin={onShowLogin} onShowRegister={onShowRegister} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Poruke</h1>
          <p className="text-gray-600 mt-4">Chat list page will be implemented here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <Router>
      {showLogin && (
        <LoginForm
          onClose={handleCloseAuth}
          onSwitchToRegister={handleShowRegister}
        />
      )}
      {showRegister && (
        <RegisterForm
          onClose={handleCloseAuth}
          onSwitchToLogin={handleShowLogin}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
        <Route path="/jobs" element={<JobListPage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
        <Route path="/job/:id" element={<JobDetailPage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
        <Route path="/student-profile" element={<StudentProfilePage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
        <Route path="/employer-dashboard" element={<EmployerDashboardPage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
        <Route path="/messages" element={<ChatListPage onShowLogin={handleShowLogin} onShowRegister={handleShowRegister} />} />
      </Routes>
    </Router>
  );
}
