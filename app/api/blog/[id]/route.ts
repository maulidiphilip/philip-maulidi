// app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/database';

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET /api/blog/[id]
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, displayName: true, email: true } },
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : [],
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ message: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// PUT /api/blog/[id]
export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const { title, content, excerpt, tags, image, published } = body;

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        content,
        excerpt: excerpt || '',
        tags: JSON.stringify(tags || []),
        image: image || '',
        published: published || false,
        updatedAt: new Date(),
      },
      include: {
        author: { select: { id: true, displayName: true, email: true } },
      },
    });

    return NextResponse.json({
      ...post,
      tags: JSON.parse(post.tags),
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ message: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE /api/blog/[id]
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    await prisma.blogPost.delete({ where: { id } });

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ message: 'Failed to delete blog post' }, { status: 500 });
  }
}
