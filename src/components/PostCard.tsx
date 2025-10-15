import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const PostCard = ({ author, content, image, likes, comments, timestamp }: PostCardProps) => {
  const { isDark } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />

      <div className={`relative rounded-2xl border transition-all duration-300 ${
        isDark
          ? 'bg-zinc-900 border-zinc-800'
          : 'bg-white border-gray-200'
      } overflow-hidden`}>
        <div className="p-4 sm:p-6">
          <div className="flex items-start space-x-3">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-75" />
              <img
                src={author.avatar}
                alt={author.name}
                className="relative w-12 h-12 rounded-full object-cover border-2 border-black"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`font-semibold transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {author.name}
                  </h3>
                  <p className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    @{author.username} · {timestamp}
                  </p>
                </div>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`transition-colors duration-200 ${
                    isSaved
                      ? 'text-purple-500'
                      : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
                </button>
              </div>

              <p className={`mt-3 text-base leading-relaxed transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}>
                {content}
              </p>

              {image && (
                <div className="mt-4 rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt="Post content"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className={`flex items-center space-x-6 mt-4 pt-4 border-t transition-colors ${
                isDark ? 'border-zinc-800' : 'border-gray-200'
              }`}>
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 ${
                    isLiked
                      ? 'text-red-500'
                      : isDark ? 'text-gray-400 hover:text-red-500' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                  <span className="text-sm font-medium">{likeCount}</span>
                </button>

                <button className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 ${
                  isDark ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <MessageCircle size={20} />
                  <span className="text-sm font-medium">{comments}</span>
                </button>

                <button className={`flex items-center space-x-2 transition-all duration-200 hover:scale-110 ${
                  isDark ? 'text-gray-400 hover:text-green-500' : 'text-gray-600 hover:text-green-500'
                }`}>
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
