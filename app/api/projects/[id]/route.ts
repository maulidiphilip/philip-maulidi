import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define the type for Project with included author, based on Prisma schema
type ProjectWithAuthor = {
  id: string;
  title: string;
  description: string;
  content: string | null;
  image: string | null;
  technologies: string; // JSON string as per Prisma schema
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    id: string;
    displayName: string | null;
    email: string;
  };
};

// GET /api/projects - Get all projects (public endpoint)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    
    const where: Record<string, unknown> = {};
    
    // For public access, only show published projects
    if (published !== 'false') {
      where.published = true;
    }
    
    if (featured === 'true') {
      where.featured = true;
    }

    const projects = await prisma.project.findMany({
      where,
      include: {
        author: {
          select: {
            id: true,
            displayName: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Parse technologies JSON string
    const projectsWithParsedTech = projects.map((project: ProjectWithAuthor) => {
      let technologies: string[] = [];
      if (typeof project.technologies === 'string') {
        try {
          technologies = JSON.parse(project.technologies);
        } catch {
          technologies = project.technologies.split(',').map(tech => tech.trim());
        }
      } else if (Array.isArray(project.technologies)) {
        technologies = project.technologies;
      } else {
        technologies = [];
      }
      return {
        ...project,
        technologies,
      };
    });

    return NextResponse.json(projectsWithParsedTech);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create new project (admin only)
export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      content,
      image,
      technologies,
      githubUrl,
      liveUrl,
      featured,
      published,
    } = body;

    // Validate required fields
    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        content: content || '',
        image,
        technologies: JSON.stringify(technologies || []),
        githubUrl,
        liveUrl,
        featured: featured || false,
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

    // Parse technologies for response
    const projectWithParsedTech = {
      ...project,
      technologies: JSON.parse(project.technologies),
    };

    return NextResponse.json(projectWithParsedTech, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}