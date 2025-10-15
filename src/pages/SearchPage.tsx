import { useState } from 'react';
import { Search, Users, UserPlus, UserCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { useApp } from '../context/AppContext';

const SearchPage = () => {
  const { isDark } = useTheme();
  const { navigateTo } = useNavigation();
  const { suggestedUsers, toggleFollow } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const allUsers = [
    ...suggestedUsers,
    {
      id: 'user4',
      name: 'Chris Anderson',
      username: 'chrisanderson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      bio: 'Product Designer creating intuitive experiences',
      isFollowing: false
    },
    {
      id: 'user5',
      name: 'Sophia Martinez',
      username: 'sophiamartinez',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      bio: 'UX Researcher passionate about user behavior',
      isFollowing: false
    },
    {
      id: 'user6',
      name: 'James Wilson',
      username: 'jameswilson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      bio: 'Data Scientist exploring AI and machine learning',
      isFollowing: false
    },
    {
      id: 'user7',
      name: 'Olivia Brown',
      username: 'oliviabrown',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      bio: 'Marketing Strategist helping brands grow',
      isFollowing: false
    },
    {
      id: 'user8',
      name: 'Michael Davis',
      username: 'michaeldavis',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      bio: 'DevOps Engineer automating infrastructure',
      isFollowing: false
    }
  ];

  const filteredUsers = searchQuery
    ? allUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.bio && user.bio.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : allUsers;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Users className={isDark ? 'text-cyan-400' : 'text-blue-600'} size={32} />
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Grow Your Network
            </h1>
          </div>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Discover and connect with professionals in your industry
          </p>
        </div>

        <div className={`relative mb-8 rounded-2xl overflow-hidden ${
          isDark ? 'bg-zinc-900' : 'bg-white'
        } shadow-lg`}>
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className={isDark ? 'text-gray-500' : 'text-gray-400'} size={20} />
          </div>
          <input
            type="text"
            placeholder="Search by name, username, or interests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-14 pr-6 py-4 text-lg focus:outline-none transition-all ${
              isDark
                ? 'bg-zinc-900 text-white placeholder-gray-500'
                : 'bg-white text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                isDark ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-white hover:shadow-xl'
              } shadow-lg cursor-pointer`}
              onClick={() => navigateTo('profile', user.id)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {user.name}
                  </h3>
                  <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    @{user.username}
                  </p>
                  {user.bio && (
                    <p className={`text-sm line-clamp-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {user.bio}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFollow(user.id);
                }}
                className={`w-full mt-4 py-2.5 px-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 ${
                  user.isFollowing
                    ? isDark
                      ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {user.isFollowing ? (
                  <>
                    <UserCheck size={18} />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    <span>Follow</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-16">
            <Users className={`mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} size={48} />
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No users found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
