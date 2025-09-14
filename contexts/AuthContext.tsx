'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  role: string; 
  avatar?: string;
  createdAt: Date;
}

interface AuthContextType {
  user: AuthUser | null;
  userData: AuthUser | null; 
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ userData: AuthUser }>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  isAdmin: false,
  signIn: async () => ({ userData: {} as AuthUser }),
  signUp: async () => {},
  signOut: async () => {},
  logout: async () => {}
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (process.env.NODE_ENV !== 'production') {
        console.log('🔍 Checking authentication...');
      }
      const response = await fetch('/api/auth/me');
      if (process.env.NODE_ENV !== 'production') {
        console.log('📡 Auth API response status:', response.status);
      }
      
      if (response.ok) {
        const userData = await response.json();
        if (process.env.NODE_ENV !== 'production') {
          console.log('✅ Auth API returned user data:', userData);
        }
        setUser(userData);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.log('❌ Auth API failed:', response.status);
        }
        setUser(null);
      }
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('🚨 Auth check failed:', error);
      }
      setUser(null);
    } finally {
      setLoading(false);
      if (process.env.NODE_ENV !== 'production') {
        console.log('🏁 Auth check completed, loading set to false');
      }
    }
  };

  const signIn = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const { user: userData, token } = await response.json();
    if (process.env.NODE_ENV !== 'production') {
      console.log('🔐 Login successful, user data:', userData);
    }
    Cookies.set('auth-token', token, { expires: 7 });
    setUser(userData);
    
    return { userData };
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, displayName }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    const { user: userData, token } = await response.json();
    if (process.env.NODE_ENV !== 'production') {
      console.log('📝 Registration successful, user data:', userData);
    }
    Cookies.set('auth-token', token, { expires: 7 });
    setUser(userData);
  };

  const signOut = async () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👋 Signing out...');
    }
    Cookies.remove('auth-token');
    setUser(null);
  };

  // Alias for signOut to match navbar usage
  const logout = signOut;

  const isAdmin = user?.role === 'ADMIN';

  if (process.env.NODE_ENV !== 'production') {
    console.log('🔄 AuthContext state:', { 
      user, 
      userData: user, 
      loading, 
      isAdmin 
    });
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      userData: user, 
      loading, 
      isAdmin, 
      signIn, 
      signUp, 
      signOut,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}