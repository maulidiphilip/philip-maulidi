import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json(user);

  } catch {
    console.error('Auth check error:');
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
