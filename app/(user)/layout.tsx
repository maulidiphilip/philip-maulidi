'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import UserNavbar from '@/components/UserNavbar';
import Footer from '@/components/Footer';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Redirect admins to admin dashboard (except for login/register pages)
  useEffect(() => {
    if (!loading && user && isAdmin && !pathname.includes('/login') && !pathname.includes('/register')) {
      router.push('/admin/dashboard');
    }
  }, [user, isAdmin, loading, pathname, router]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render user layout if admin is being redirected
  if (user && isAdmin && !pathname.includes('/login') && !pathname.includes('/register')) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
