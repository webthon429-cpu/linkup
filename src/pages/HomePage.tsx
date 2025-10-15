import { useTheme } from '../context/ThemeContext';
import Hero from '../components/Hero';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import TrendingSidebar from '../components/TrendingSidebar';

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <div>
      <Hero />
      <CreatePost />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Feed />
          </div>
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
