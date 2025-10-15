import { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: string;
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
  likedByUser: boolean;
  savedByUser: boolean;
}

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  joinedDate: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
}

interface TrendingTag {
  tag: string;
  posts: string;
}

interface SuggestedUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing: boolean;
}

interface AppContextType {
  posts: Post[];
  currentUser: User;
  trendingTags: TrendingTag[];
  suggestedUsers: SuggestedUser[];
  addPost: (content: string, image?: string) => void;
  toggleLike: (postId: string) => void;
  toggleSave: (postId: string) => void;
  toggleFollow: (userId: string) => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      username: 'sarahchen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    content: 'Just launched my new portfolio website using React and Tailwind CSS! The journey from concept to deployment taught me so much about modern web development. Excited to share it with the community!',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 234,
    comments: 42,
    timestamp: '2h ago',
    likedByUser: false,
    savedByUser: false
  },
  {
    id: '2',
    author: {
      name: 'Marcus Johnson',
      username: 'marcusj',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    content: 'Had an amazing brainstorming session with the team today. Innovation happens when creative minds collaborate. Here\'s to building the future, one idea at a time!',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 567,
    comments: 89,
    timestamp: '4h ago',
    likedByUser: false,
    savedByUser: false
  },
  {
    id: '3',
    author: {
      name: 'Emma Rodriguez',
      username: 'emma_codes',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    content: 'Behind every successful project is countless hours of debugging. Remember: errors are just opportunities to learn something new. Keep coding, keep growing!',
    likes: 892,
    comments: 124,
    timestamp: '6h ago',
    likedByUser: false,
    savedByUser: false
  },
  {
    id: '4',
    author: {
      name: 'David Park',
      username: 'davidpark',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
    },
    content: 'Sunset coding sessions hit different. There\'s something magical about solving complex problems while watching the sky change colors. What\'s your favorite time to code?',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 445,
    comments: 78,
    timestamp: '8h ago',
    likedByUser: false,
    savedByUser: false
  }
];

const initialUser: User = {
  id: 'current-user',
  name: 'Alex Thompson',
  username: 'alexthompson',
  avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  bio: 'Full-stack developer passionate about creating beautiful and functional web experiences. Building the future, one line of code at a time.',
  location: 'San Francisco, CA',
  website: 'alexthompson.dev',
  joinedDate: 'March 2024',
  postsCount: 248,
  followersCount: 12500,
  followingCount: 892
};

const initialTrendingTags: TrendingTag[] = [
  { tag: 'connect', posts: '12.5K' },
  { tag: 'inspire', posts: '8.9K' },
  { tag: 'social', posts: '7.2K' },
  { tag: 'webdev', posts: '6.8K' },
  { tag: 'innovation', posts: '5.4K' }
];

const initialSuggestedUsers: SuggestedUser[] = [
  {
    id: 'user1',
    name: 'Jessica Lee',
    username: 'jessicalee',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    isFollowing: false
  },
  {
    id: 'user2',
    name: 'Ryan Cooper',
    username: 'ryancooper',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    isFollowing: false
  },
  {
    id: 'user3',
    name: 'Maya Patel',
    username: 'mayapatel',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    isFollowing: false
  }
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [currentUser, setCurrentUser] = useState<User>(initialUser);
  const [trendingTags] = useState<TrendingTag[]>(initialTrendingTags);
  const [suggestedUsers, setSuggestedUsers] = useState<SuggestedUser[]>(initialSuggestedUsers);

  const addPost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: currentUser.name,
        username: currentUser.username,
        avatar: currentUser.avatar
      },
      content,
      image,
      likes: 0,
      comments: 0,
      timestamp: 'Just now',
      likedByUser: false,
      savedByUser: false
    };

    setPosts([newPost, ...posts]);
    setCurrentUser(prev => ({
      ...prev,
      postsCount: prev.postsCount + 1
    }));
  };

  const toggleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likedByUser: !post.likedByUser,
          likes: post.likedByUser ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const toggleSave = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          savedByUser: !post.savedByUser
        };
      }
      return post;
    }));
  };

  const toggleFollow = (userId: string) => {
    setSuggestedUsers(suggestedUsers.map(user => {
      if (user.id === userId) {
        const wasFollowing = user.isFollowing;
        setCurrentUser(prev => ({
          ...prev,
          followingCount: wasFollowing ? prev.followingCount - 1 : prev.followingCount + 1
        }));
        return {
          ...user,
          isFollowing: !user.isFollowing
        };
      }
      return user;
    }));
  };

  const updateProfile = (updates: Partial<User>) => {
    setCurrentUser(prev => ({ ...prev, ...updates }));
  };

  return (
    <AppContext.Provider
      value={{
        posts,
        currentUser,
        trendingTags,
        suggestedUsers,
        addPost,
        toggleLike,
        toggleSave,
        toggleFollow,
        updateProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
