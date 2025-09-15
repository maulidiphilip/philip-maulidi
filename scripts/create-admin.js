const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    console.log('Creating admin user...');
    
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'maulidiphilip@gmail.com' }
    });

    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: 'maulidiphilip@gmail.com',
        password: hashedPassword,
        displayName: 'Philip Maulidi',
        role: 'ADMIN'
      }
    });

    console.log('Admin user created successfully!');
    console.log('Email: maulidiphilip@gmail.com');
    console.log('Password: admin123');
    console.log('Role: ADMIN');

    // Create a sample project
    await prisma.project.create({
      data: {
        title: 'Portfolio Website',
        description: 'A modern portfolio website built with Next.js',
        content: 'This is a comprehensive portfolio website showcasing my work and skills.',
        image: '/profile-photo.jpg',
        technologies: JSON.stringify(['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma']),
        githubUrl: 'https://github.com/maulidiphilip/portfolio',
        liveUrl: 'https://philip-maulidi.vercel.app',
        featured: true,
        published: true,
        authorId: admin.id
      }
    });

    console.log('Sample project created!');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
