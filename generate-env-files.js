const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const environments = {
  production: {
    production: true,
    apiUrl: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/trpc`
  },
  development: {
    production: false,
    apiUrl: `${process.env.API_URL}/trpc`
  }
};

// Write environment.ts
fs.writeFileSync(
  './src/environments/environment.ts',
  `export const environment = ${JSON.stringify(environments.production, null, 2)};`
);

// Write environment.development.ts
fs.writeFileSync(
  './src/environments/environment.development.ts',
  `export const environment = ${JSON.stringify(environments.development, null, 2)};`
);

console.log('Environment files generated successfully!');
