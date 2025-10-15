import PostCard from './PostCard';

const Feed = () => {
  const posts = [
    {
      author: {
        name: 'Sarah Chen',
        username: 'sarahchen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
      },
      content: 'Just launched my new portfolio website using React and Tailwind CSS! The journey from concept to deployment taught me so much about modern web development. Excited to share it with the community!',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 234,
      comments: 42,
      timestamp: '2h ago'
    },
    {
      author: {
        name: 'Marcus Johnson',
        username: 'marcusj',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
      },
      content: 'Had an amazing brainstorming session with the team today. Innovation happens when creative minds collaborate. Here\'s to building the future, one idea at a time!',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 567,
      comments: 89,
      timestamp: '4h ago'
    },
    {
      author: {
        name: 'Emma Rodriguez',
        username: 'emma_codes',
        avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
      },
      content: 'Behind every successful project is countless hours of debugging. Remember: errors are just opportunities to learn something new. Keep coding, keep growing!',
      likes: 892,
      comments: 124,
      timestamp: '6h ago'
    },
    {
      author: {
        name: 'David Park',
        username: 'davidpark',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
      },
      content: 'Sunset coding sessions hit different. There\'s something magical about solving complex problems while watching the sky change colors. What\'s your favorite time to code?',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 445,
      comments: 78,
      timestamp: '8h ago'
    }
  ];

  return (
    <section id="explore" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feed;
