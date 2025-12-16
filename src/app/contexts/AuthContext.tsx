import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'pelanggan' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string, role: string) => boolean;
  register: (userData: Omit<User, 'id' | 'role'>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const register = (userData: Omit<User, 'id' | 'role'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      role: 'pelanggan',
    };
    setUser(newUser);
  };

  const login = (username: string, password: string, role: string): boolean => {
    // Mock login - in real app this would call an API
    if (username && password) {
      const mockUser: User = {
        id: '1',
        name: role === 'admin' ? 'Admin User' : 'Budi Santoso',
        email: role === 'admin' ? 'admin@laundry.com' : 'budi@email.com',
        phone: '08123456789',
        role: role as 'pelanggan' | 'admin',
      };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
