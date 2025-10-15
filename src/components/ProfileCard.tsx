import { MapPin, Calendar, Link as LinkIcon, Edit, X, Save } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

const ProfileCard = () => {
  const { isDark } = useTheme();
  const { currentUser, updateProfile } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    bio: currentUser.bio,
    location: currentUser.location,
    website: currentUser.website
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: currentUser.name,
      bio: currentUser.bio,
      location: currentUser.location,
      website: currentUser.website
    });
    setIsEditing(false);
  };

  return (
    <section id="profile" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-50 blur-2xl" />

          <div className={`relative rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-zinc-900 border-zinc-800'
              : 'bg-white border-gray-200'
          } overflow-hidden`}>
            <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

            <div className="px-6 pb-6">
              <div className="flex items-end justify-between -mt-16 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 opacity-75 blur" />
                  <img
                    src={currentUser.avatar}
                    alt="Profile"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-black"
                  />
                </div>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className={`mb-4 px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                      isDark
                        ? 'border-zinc-700 text-gray-300 hover:bg-zinc-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Edit size={16} />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="mb-4 flex items-center space-x-2">
                    <button
                      onClick={handleSave}
                      className="group relative px-5 py-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative flex items-center space-x-2 text-white font-semibold text-sm">
                        <Save size={16} />
                        <span>Save</span>
                      </span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className={`px-5 py-2 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                        isDark
                          ? 'border-zinc-700 text-gray-300 hover:bg-zinc-800'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`text-2xl font-bold w-full px-3 py-2 rounded-lg border outline-none transition-colors ${
                        isDark
                          ? 'bg-zinc-800 border-zinc-700 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                      placeholder="Your name"
                    />
                  ) : (
                    <h2 className={`text-2xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentUser.name}
                    </h2>
                  )}
                  <p className={`text-base mt-1 transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    @{currentUser.username}
                  </p>
                </div>

                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-zinc-800 border-zinc-700 text-gray-300'
                        : 'bg-gray-50 border-gray-300 text-gray-800'
                    }`}
                    placeholder="Your bio"
                  />
                ) : (
                  <p className={`text-base leading-relaxed transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {currentUser.bio}
                  </p>
                )}

                <div className={`flex flex-wrap gap-4 text-sm transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`px-2 py-1 rounded border outline-none transition-colors ${
                          isDark
                            ? 'bg-zinc-800 border-zinc-700 text-gray-300'
                            : 'bg-gray-50 border-gray-300 text-gray-800'
                        }`}
                        placeholder="Location"
                      />
                    ) : (
                      <span>{currentUser.location}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>Joined {currentUser.joinedDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LinkIcon size={16} />
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className={`px-2 py-1 rounded border outline-none transition-colors ${
                          isDark
                            ? 'bg-zinc-800 border-zinc-700 text-gray-300'
                            : 'bg-gray-50 border-gray-300 text-gray-800'
                        }`}
                        placeholder="Website"
                      />
                    ) : (
                      <a href={`https://${currentUser.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {currentUser.website}
                      </a>
                    )}
                  </div>
                </div>

                <div className={`flex items-center space-x-8 pt-4 border-t transition-colors ${
                  isDark ? 'border-zinc-800' : 'border-gray-200'
                }`}>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentUser.postsCount}
                    </div>
                    <div className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Posts
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentUser.followersCount.toLocaleString()}
                    </div>
                    <div className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Followers
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentUser.followingCount}
                    </div>
                    <div className={`text-sm transition-colors ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Following
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
