import { Moon, Sun, Home, Compass, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg transition-colors duration-300 ${
      isDark
        ? 'bg-black/80 border-zinc-800'
        : 'bg-white/80 border-gray-200'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-l from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              LinkUp
            </h1>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#home"
                className={`flex items-center space-x-2 transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </a>
              <a
                href="#explore"
                className={`flex items-center space-x-2 transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <Compass size={18} />
                <span>Explore</span>
              </a>
              <a
                href="#profile"
                className={`flex items-center space-x-2 transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <User size={18} />
                <span>Profile</span>
              </a>
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
