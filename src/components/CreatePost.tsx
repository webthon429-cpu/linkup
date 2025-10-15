import { Image, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';

const CreatePost = () => {
  const { isDark } = useTheme();
  const { addPost } = useApp();
  const [postText, setPostText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);

  const handlePost = () => {
    if (postText.trim()) {
      addPost(postText, imageUrl || undefined);
      setPostText('');
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  return (
    <section id="create-post" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

          <div className={`relative rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-zinc-900 border-zinc-800'
              : 'bg-white border-gray-200'
          } overflow-hidden p-6`}>
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-75" />
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                  alt="Your avatar"
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-black"
                />
              </div>

              <div className="flex-1">
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={3}
                  className={`w-full resize-none outline-none transition-colors text-base ${
                    isDark
                      ? 'bg-transparent text-gray-300 placeholder-gray-500'
                      : 'bg-transparent text-gray-900 placeholder-gray-400'
                  }`}
                />

                {showImageInput && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL (e.g., https://...)"
                      className={`w-full px-3 py-2 rounded-lg border outline-none transition-colors text-sm ${
                        isDark
                          ? 'bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                )}

                <div className={`flex items-center justify-between pt-4 mt-4 border-t transition-colors ${
                  isDark ? 'border-zinc-800' : 'border-gray-200'
                }`}>
                  <button
                    onClick={() => setShowImageInput(!showImageInput)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'text-gray-400 hover:bg-zinc-800 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    } ${showImageInput ? (isDark ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-gray-900') : ''}`}
                  >
                    <Image size={20} />
                    <span className="text-sm font-medium">Add Image</span>
                  </button>

                  <button
                    onClick={handlePost}
                    className="group relative px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!postText.trim()}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative flex items-center space-x-2 text-white font-semibold text-sm">
                      <span>Post</span>
                      <Send size={16} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
