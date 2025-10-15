import { TrendingUp, Hash } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

const TrendingSidebar = () => {
  const { isDark } = useTheme();
  const { trendingTags, suggestedUsers, toggleFollow } = useApp();

  const handleTrendingClick = (tag: string) => {
    alert(`Explore #${tag} posts! This feature will show all posts with this trending tag.`);
  };

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
              {trendingTags.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTrendingClick(item.tag)}
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
              {suggestedUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
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
                  <button
                    onClick={() => toggleFollow(user.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                      user.isFollowing
                        ? isDark
                          ? 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white'
                    }`}
                  >
                    {user.isFollowing ? 'Following' : 'Follow'}
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
