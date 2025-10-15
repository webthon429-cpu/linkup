import PostCard from './PostCard';
import { useApp } from '../context/AppContext';

const Feed = () => {
  const { posts } = useApp();

  return (
    <section id="explore" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feed;
