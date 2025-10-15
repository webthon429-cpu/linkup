import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { useApp } from '../context/AppContext';

const PostPage = () => {
  const { isDark } = useTheme();
  const { navigateTo, selectedPostId } = useNavigation();
  const { posts, toggleLike, toggleSave, currentUser } = useApp();
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: '1',
      author: {
        name: 'Jordan Smith',
        username: 'jordansmith',
        avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content: 'This is amazing! Great work on this.',
      timestamp: '2h ago'
    },
    {
      id: '2',
      author: {
        name: 'Taylor Johnson',
        username: 'taylorj',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
      },
      content: 'Really insightful perspective. Thanks for sharing!',
      timestamp: '4h ago'
    }
  ]);

  const post = posts.find(p => p.id === selectedPostId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Post not found</p>
      </div>
    );
  }

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      author: {
        name: currentUser.name,
        username: currentUser.username,
        avatar: currentUser.avatar
      },
      content: commentText,
      timestamp: 'Just now'
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigateTo('home')}
          className={`flex items-center space-x-2 mb-6 transition-colors ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back to Feed</span>
        </button>

        <div
          className={`rounded-2xl overflow-hidden transition-all duration-300 ${
            isDark ? 'bg-zinc-900' : 'bg-white'
          } shadow-lg`}
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {post.author.name}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  @{post.author.username} · {post.timestamp}
                </p>
              </div>
            </div>

            <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {post.content}
            </p>

            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full rounded-xl mb-4"
              />
            )}

            <div className={`flex items-center justify-between pt-4 border-t ${
              isDark ? 'border-zinc-800' : 'border-gray-200'
            }`}>
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center space-x-2 transition-all hover:scale-105 ${
                  post.likedByUser
                    ? 'text-red-500'
                    : isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Heart size={20} fill={post.likedByUser ? 'currentColor' : 'none'} />
                <span>{post.likes}</span>
              </button>

              <button className={`flex items-center space-x-2 transition-colors ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}>
                <MessageCircle size={20} />
                <span>{comments.length}</span>
              </button>

              <button className={`flex items-center space-x-2 transition-colors ${
                isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
              }`}>
                <Share2 size={20} />
              </button>

              <button
                onClick={() => toggleSave(post.id)}
                className={`flex items-center space-x-2 transition-all hover:scale-105 ${
                  post.savedByUser
                    ? 'text-blue-500'
                    : isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Bookmark size={20} fill={post.savedByUser ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-8 rounded-2xl overflow-hidden ${
          isDark ? 'bg-zinc-900' : 'bg-white'
        } shadow-lg`}>
          <div className="p-6">
            <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Comments ({comments.length})
            </h3>

            <div className="flex space-x-3 mb-6">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className={`w-full px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 transition-all ${
                    isDark
                      ? 'bg-zinc-800 text-white placeholder-gray-500 focus:ring-cyan-500'
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
                  }`}
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleAddComment}
                    disabled={!commentText.trim()}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all ${
                      commentText.trim()
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Send size={16} />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className={`rounded-xl p-4 ${
                      isDark ? 'bg-zinc-800' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {comment.author.name}
                        </h4>
                        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          @{comment.author.username}
                        </span>
                        <span className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                          · {comment.timestamp}
                        </span>
                      </div>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
