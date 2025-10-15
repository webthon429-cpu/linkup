import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import ProfileCard from './components/ProfileCard';
import TrendingSidebar from './components/TrendingSidebar';
import Footer from './components/Footer';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      isDark ? 'bg-black' : 'bg-white'
    } relative`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isDark ? '#000000' : '#ffffff',
          backgroundImage: isDark
            ? `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`
            : `radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10">
        <Header />

        <main id="home">
          <Hero />

          <CreatePost />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Feed />
              </div>
              <div className="lg:col-span-1">
                <TrendingSidebar />
              </div>
            </div>
          </div>

          <ProfileCard />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
