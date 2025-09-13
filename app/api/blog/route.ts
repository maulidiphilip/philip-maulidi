import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/database';

// GET /api/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    
    const where = published === 'true' ? { published: true } : {};
    
    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            displayName: true,
            email: true,
          },
        },
      },
    });

    // Parse JSON strings back to arrays
    const formattedPosts = posts.map((post: any) => ({
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : [],
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create new blog post (Admin only)
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, content, excerpt, tags, featuredImage, published } = body;

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        content,
        excerpt: excerpt || '',
        tags: JSON.stringify(tags || []),
        featuredImage: featuredImage || '',
        published: published || false,
        authorId: user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            displayName: true,
            email: true,
          },
        },
      },
    });

    // Format response
    const formattedPost = {
      ...post,
      tags: JSON.parse(post.tags),
    };

    return NextResponse.json(formattedPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { message: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
