import { useTheme } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

function AppContent() {
  const { isDark } = useTheme();
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'post':
        return <PostPage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

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
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </AppProvider>
  );
}

export default App;
