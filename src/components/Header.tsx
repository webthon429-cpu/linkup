import { Moon, Sun, Home, Search, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { currentPage, navigateTo } = useNavigation();

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg transition-colors duration-300 ${
      isDark
        ? 'bg-black/80 border-zinc-800'
        : 'bg-white/80 border-gray-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              LinkUp
            </button>

            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigateTo('home')}
                className={`flex items-center space-x-2 transition-colors ${
                  currentPage === 'home'
                    ? isDark ? 'text-cyan-400' : 'text-blue-600'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </button>
              <button
                onClick={() => navigateTo('search')}
                className={`flex items-center space-x-2 transition-colors ${
                  currentPage === 'search'
                    ? isDark ? 'text-cyan-400' : 'text-blue-600'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <Search size={18} />
                <span>Network</span>
              </button>
              <button
                onClick={() => navigateTo('profile', 'current-user')}
                className={`flex items-center space-x-2 transition-colors ${
                  currentPage === 'profile'
                    ? isDark ? 'text-cyan-400' : 'text-blue-600'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <User size={18} />
                <span>Profile</span>
              </button>
            </nav>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700'
                : 'bg-gray-200 text-indigo-600 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
