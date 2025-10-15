import { useState } from 'react';
import { MapPin, Link as LinkIcon, Calendar, Edit, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { useApp } from '../context/AppContext';
import PostCard from '../components/PostCard';

const ProfilePage = () => {
  const { isDark } = useTheme();
  const { navigateTo, selectedUserId } = useNavigation();
  const { currentUser, posts } = useApp();
  const [isEditing, setIsEditing] = useState(false);

  const isOwnProfile = selectedUserId === 'current-user';

  const profileData = isOwnProfile ? currentUser : {
    id: selectedUserId || '',
    name: 'Jessica Lee',
    username: 'jessicalee',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    bio: 'Senior Product Designer at TechCorp. Passionate about creating beautiful and accessible user experiences.',
    location: 'New York, NY',
    website: 'jessicalee.design',
    joinedDate: 'January 2023',
    postsCount: 156,
    followersCount: 8900,
    followingCount: 432
  };

  const userPosts = isOwnProfile
    ? posts.filter(post => post.author.username === currentUser.username)
    : posts.slice(0, 2);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isOwnProfile && (
          <button
            onClick={() => navigateTo('search')}
            className={`flex items-center space-x-2 mb-6 transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <ArrowLeft size={20} />
            <span>Back to Network</span>
          </button>
        )}

        <div
          className={`rounded-2xl overflow-hidden transition-all duration-300 ${
            isDark ? 'bg-zinc-900' : 'bg-white'
          } shadow-lg mb-8`}
        >
          <div
            className="h-48 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"
          />

          <div className="px-8 pb-8">
            <div className="flex items-end justify-between -mt-16 mb-6">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-32 h-32 rounded-full border-4 object-cover shadow-xl"
                style={{
                  borderColor: isDark ? '#18181b' : '#ffffff'
                }}
              />

              {isOwnProfile && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                    isDark
                      ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  <Edit size={18} />
                  <span>Edit Profile</span>
                </button>
              )}

              {!isOwnProfile && (
                <button
                  className="px-8 py-2.5 rounded-full font-medium transition-all bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105"
                >
                  Follow
                </button>
              )}
            </div>

            <div className="mb-6">
              <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {profileData.name}
              </h1>
              <p className={`text-lg mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                @{profileData.username}
              </p>

              {isEditing ? (
                <div className="mb-6 space-y-4">
                  <textarea
                    defaultValue={profileData.bio}
                    className={`w-full px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 transition-all ${
                      isDark
                        ? 'bg-zinc-800 text-white placeholder-gray-500 focus:ring-cyan-500'
                        : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
                    }`}
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-2.5 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className={`flex-1 py-2.5 rounded-xl font-medium transition-all ${
                        isDark
                          ? 'bg-zinc-800 text-white hover:bg-zinc-700'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {profileData.bio}
                </p>
              )}

              <div className={`flex flex-wrap gap-4 mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {profileData.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} />
                    <span>{profileData.location}</span>
                  </div>
                )}
                {profileData.website && (
                  <div className="flex items-center space-x-2">
                    <LinkIcon size={18} />
                    <a
                      href={`https://${profileData.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={isDark ? 'text-cyan-400 hover:underline' : 'text-blue-600 hover:underline'}
                    >
                      {profileData.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>Joined {profileData.joinedDate}</span>
                </div>
              </div>

              <div className="flex space-x-8">
                <div>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {profileData.postsCount}
                  </span>
                  <span className={`ml-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Posts
                  </span>
                </div>
                <div>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {profileData.followersCount.toLocaleString()}
                  </span>
                  <span className={`ml-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Followers
                  </span>
                </div>
                <div>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {profileData.followingCount.toLocaleString()}
                  </span>
                  <span className={`ml-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Following
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isOwnProfile ? 'Your Posts' : 'Recent Posts'}
          </h2>

          <div className="space-y-6">
            {userPosts.length > 0 ? (
              userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className={`text-center py-16 rounded-2xl ${
                isDark ? 'bg-zinc-900' : 'bg-white'
              } shadow-lg`}>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  No posts yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
