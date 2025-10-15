import { TrendingUp, Hash } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TrendingSidebar = () => {
  const { isDark } = useTheme();

  const trending = [
    { tag: 'connect', posts: '12.5K' },
    { tag: 'inspire', posts: '8.9K' },
    { tag: 'social', posts: '7.2K' },
    { tag: 'webdev', posts: '6.8K' },
    { tag: 'innovation', posts: '5.4K' }
  ];

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-30 blur-xl" />

          <div className={`relative rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-zinc-900 border-zinc-800'
              : 'bg-white border-gray-200'
          } overflow-hidden p-6`}>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className={`${isDark ? 'text-purple-500' : 'text-purple-600'}`} size={20} />
              <h3 className={`font-bold text-lg transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Trending
              </h3>
            </div>

            <div className="space-y-4">
              {trending.map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'hover:bg-zinc-800'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <Hash className={`mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
                    <div className="flex-1">
                      <div className={`font-semibold transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.tag}
                      </div>
                      <div className={`text-sm transition-colors ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.posts} posts
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-30 blur-xl" />

          <div className={`relative rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-zinc-900 border-zinc-800'
              : 'bg-white border-gray-200'
          } overflow-hidden p-6`}>
            <h3 className={`font-bold text-lg mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Suggested Users
            </h3>

            <div className="space-y-4">
              {[
                {
                  name: 'Jessica Lee',
                  username: 'jessicalee',
                  avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                },
                {
                  name: 'Ryan Cooper',
                  username: 'ryancooper',
                  avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                },
                {
                  name: 'Maya Patel',
                  username: 'mayapatel',
                  avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-75" />
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="relative w-10 h-10 rounded-full object-cover border border-black"
                      />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {user.name}
                      </div>
                      <div className={`text-xs transition-colors ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        @{user.username}
                      </div>
                    </div>
                  </div>
                  <button className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}>
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TrendingSidebar;
