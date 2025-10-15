import PostCard from './PostCard';
import { useApp } from '../context/AppContext';

const Feed = () => {
  const { posts } = useApp();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
