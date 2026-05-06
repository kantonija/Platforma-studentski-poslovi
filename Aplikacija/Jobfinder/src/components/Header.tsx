import { BriefcaseIcon, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

export function Header({ onShowLogin, onShowRegister }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => 
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userType, setUserType] = useState<'student' | 'employer' | null>(() => 
    localStorage.getItem('userType') as 'student' | 'employer' | null
  );

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType(null);
    window.location.href = '/';
  };

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">JobFinder</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Poslovi</Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition">Pretraži</Link>
          {isLoggedIn && (
            <Link to="/messages" className="text-gray-700 hover:text-blue-600 transition">
              Poruke
            </Link>
          )}
          {isLoggedIn && userType === 'employer' && (
            <Link to="/employer-dashboard" className="text-gray-700 hover:text-blue-600 transition">
              Dashboard
            </Link>
          )}
          {isLoggedIn && userType === 'student' && (
            <Link to="/student-profile" className="text-gray-700 hover:text-blue-600 transition">
              Moj profil
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                to={userType === 'student' ? '/student-profile' : '/employer-dashboard'}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">
                  {userType === 'student' ? 'Profil' : 'Dashboard'}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-gray-700 hover:text-red-600 transition flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Odjava</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onShowLogin}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Prijavi se</span>
              </button>
              <button
                onClick={onShowRegister}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Registriraj se
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
