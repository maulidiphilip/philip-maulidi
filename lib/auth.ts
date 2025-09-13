import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { prisma } from './database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  role: string;
  avatar?: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    return decoded;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) return null;
    
    const decoded = verifyToken(token);
    if (!decoded) return null;
    
    // Verify user still exists in database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        displayName: true,
        role: true,
        avatar: true,
      },
    });
    
    return user ? {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      role: user.role,
      avatar: user.avatar || undefined,
    } : null;
  } catch {
    return null;
  }
}

export async function createUser(email: string, password: string, displayName: string) {
  const hashedPassword = await hashPassword(password);
  
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      displayName,
      role: 'USER',
    },
    select: {
      id: true,
      email: true,
      displayName: true,
      role: true,
      avatar: true,
    },
  });
}

export async function authenticateUser(email: string, password: string): Promise<AuthUser | null> {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  
  if (!user) return null;
  
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) return null;
  
  return {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    role: user.role,
    avatar: user.avatar || undefined,
  };
}
