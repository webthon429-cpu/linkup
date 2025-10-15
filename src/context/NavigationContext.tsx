import { createContext, useContext, useState, ReactNode } from 'react';
import { PageType } from '../types';

interface NavigationContextType {
  currentPage: PageType;
  selectedPostId: string | null;
  selectedUserId: string | null;
  navigateTo: (page: PageType, id?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const navigateTo = (page: PageType, id?: string) => {
    setCurrentPage(page);

    if (page === 'post' && id) {
      setSelectedPostId(id);
    } else if (page === 'profile' && id) {
      setSelectedUserId(id);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        selectedPostId,
        selectedUserId,
        navigateTo
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
