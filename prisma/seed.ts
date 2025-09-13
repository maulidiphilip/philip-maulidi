import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await hashPassword('admin123');
  
  const admin = await prisma.user.upsert({
    where: { email: 'maulidiphilip@gmail.com' },
    update: {},
    create: {
      email: 'maulidiphilip@gmail.com',
      password: adminPassword,
      displayName: 'Philip Maulidi',
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Create sample projects
  const project1 = await prisma.project.upsert({
    where: { id: 'sample-project-1' },
    update: {},
    create: {
      id: 'sample-project-1',
      title: 'E-learning Platform',
      description: 'A comprehensive online learning platform built with Next.js',
      content: 'Full-stack e-learning platform with video streaming, quizzes, and progress tracking.',
      technologies: JSON.stringify(['Next.js', 'React', 'TypeScript', 'Prisma', 'SQLite']),
      githubUrl: 'https://github.com/maulidiphilip/elearning',
      liveUrl: 'https://elearning-demo.vercel.app',
      featured: true,
      published: true,
      authorId: admin.id,
    },
  });

  const project2 = await prisma.project.upsert({
    where: { id: 'sample-project-2' },
    update: {},
    create: {
      id: 'sample-project-2',
      title: 'Task Management App',
      description: 'A modern task management application with team collaboration',
      content: 'Built with React and Node.js, featuring real-time updates and team workspaces.',
      technologies: JSON.stringify(['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io']),
      githubUrl: 'https://github.com/maulidiphilip/taskmanager',
      featured: false,
      published: true,
      authorId: admin.id,
    },
  });

  console.log('✅ Sample projects created');

  // Create sample blog post
  const blogPost = await prisma.blogPost.upsert({
    where: { slug: 'getting-started-with-nextjs' },
    update: {},
    create: {
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      excerpt: 'Learn the basics of Next.js and build your first application',
      content: `# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier and more efficient. In this post, we'll explore the key features and get you started with your first Next.js project.

## Key Features

- **Server-Side Rendering (SSR)**: Improve performance and SEO
- **Static Site Generation (SSG)**: Pre-render pages at build time
- **API Routes**: Build full-stack applications
- **File-based Routing**: Intuitive page creation

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

That's it! You now have a Next.js application running locally.`,
      tags: JSON.stringify(['Next.js', 'React', 'Web Development', 'Tutorial']),
      readTime: 5,
      published: true,
      featured: true,
      authorId: admin.id,
    },
  });

  console.log('✅ Sample blog post created');
  console.log('🎉 Database seeded successfully!');
  console.log('\n📝 Admin credentials:');
  console.log('Email: maulidiphilip@gmail.com');
  console.log('Password: admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
