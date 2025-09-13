# Portfolio Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="file:./prisma/dev.db"

# JWT Secret (change this in production)
JWT_SECRET="your-secret-key-change-this-in-production"

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

## Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Create admin user:**
   ```bash
   node create-admin.js
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Admin Credentials

After running the setup script:
- **Email:** maulidiphilip@gmail.com
- **Password:** admin123
- **Role:** ADMIN

## Features

- Full CRUD operations for projects
- Admin dashboard with table view
- User project gallery with detail pages
- Cloudinary image upload integration
- JWT-based authentication
- Role-based access control

## Troubleshooting

If you encounter Prisma client generation issues on Windows:
1. Run your terminal/IDE as Administrator
2. Delete `node_modules/.prisma` folder
3. Run `npx prisma generate` again
