import { MapPin, Calendar, Link as LinkIcon, Edit } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProfileCard = () => {
  const { isDark } = useTheme();

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
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                    alt="Profile"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-black"
                  />
                </div>

                <button className={`mb-4 px-6 py-2 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                  isDark
                    ? 'border-zinc-700 text-gray-300 hover:bg-zinc-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}>
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className={`text-2xl font-bold transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Alex Thompson
                  </h2>
                  <p className={`text-base transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    @alexthompson
                  </p>
                </div>

                <p className={`text-base leading-relaxed transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  Full-stack developer passionate about creating beautiful and functional web experiences. Building the future, one line of code at a time.
                </p>

                <div className={`flex flex-wrap gap-4 text-sm transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>Joined March 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LinkIcon size={16} />
                    <a href="#" className="text-blue-500 hover:underline">
                      alexthompson.dev
                    </a>
                  </div>
                </div>

                <div className={`flex items-center space-x-8 pt-4 border-t transition-colors ${
                  isDark ? 'border-zinc-800' : 'border-gray-200'
                }`}>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      248
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
                      12.5K
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
                      892
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
