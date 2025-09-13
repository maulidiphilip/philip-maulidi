// This is a one-time setup script
// Run with: node scripts/setup-admin.js

import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin (you'll need to download service account key)
const serviceAccount = JSON.parse(
  readFileSync(join(__dirname, '../philip-maulidi-portifolio-firebase-adminsdk-fbsvc-5c138fc228.json'), 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function setupAdmin() {
  const email = 'maulidiphilip@gmail.com';
  
  try {
    // Set custom claims for admin role
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    
    // Update user document in Firestore
    await admin.firestore().collection('users').doc(user.uid).set({
      email: email,
      role: 'admin',
      displayName: 'Philip Maulidi',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    console.log('Admin setup complete!');
  } catch (error) {
    console.error('Error setting up admin:', error);
  }
}

setupAdmin();