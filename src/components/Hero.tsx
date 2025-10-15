import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TextType from './TextType';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <TextType
              text={[
                'Connect. Share. Inspire.',
                'Your Social World Starts Here',
                'Welcome to LinkUp'
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A mini platform to post, follow, and engage with a vibrant community of creators and innovators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                document.getElementById('create-post')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative flex items-center space-x-2 text-white font-semibold">
                <span>Get Started</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => {
                document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'border-zinc-700 text-gray-300 hover:bg-zinc-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-l from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text`}>
                10K+
              </div>
              <div className={`text-sm sm:text-base mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-l from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text`}>
                50K+
              </div>
              <div className={`text-sm sm:text-base mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Posts Shared
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-l from-indigo-500 via-purple-500 to-blue-500 text-transparent bg-clip-text`}>
                100K+
              </div>
              <div className={`text-sm sm:text-base mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Connections Made
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
