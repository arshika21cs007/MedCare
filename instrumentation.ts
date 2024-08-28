export async function register() {
  // The code checks if the NEXT_RUNTIME environment variable is set to 'nodejs'
  //If this condition is true, it dynamically imports the sentry.server.config file using the import function. This file typically contains Sentry configurations specific to the server-side (Node.js) environment in a Next.js app.
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
// This checks if the NEXT_RUNTIME environment variable is set to 'edge'
//If this condition is true, it dynamically imports the sentry.edge.config file. This file contains Sentry configurations specific to the Edge environment.
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}
