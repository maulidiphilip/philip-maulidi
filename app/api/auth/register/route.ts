import { NextRequest, NextResponse } from 'next/server';
import { createUser, generateToken } from '@/lib/auth';
import { prisma } from '@/lib/database';

// Define AuthUser type to match generateToken expectations
interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  role: string;
  avatar: string | undefined;
  createdAt: Date;
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, displayName } = await request.json();

    if (!email || !password || !displayName) {
      return NextResponse.json(
        { message: 'Email, password, and display name are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    const user = await createUser(email, password, displayName);

    // Transform user to match AuthUser type
    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      role: user.role,
      avatar: user.avatar === null ? undefined : user.avatar, // Convert null to undefined
      createdAt: user.createdAt,
    };

    const token = generateToken(authUser);

    return NextResponse.json({
      user,
      token,
      message: 'Registration successful'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}