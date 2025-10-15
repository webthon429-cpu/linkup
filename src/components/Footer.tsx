import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark
        ? 'bg-zinc-950 border-zinc-800'
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className={`text-sm transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Made with
            </span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span className={`text-sm transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              for the Web Design Challenge
            </span>
          </div>

          <div className={`text-sm transition-colors ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2025 LinkUp. Designed for Production.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Privacy
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Terms
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
