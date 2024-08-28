import * as sdk from "node-appwrite";


// Extract environment variables
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

// Initialize Appwrite client
const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)   // Set the Appwrite endpoint
  .setProject(PROJECT_ID!)  // Set the project ID
  .setKey(API_KEY!);        // Set the API key

// Export initialized Appwrite services
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

// Example function to verify connection
export const checkAppwriteConnection = async (): Promise<void> => {
  try {
    const health = new sdk.Health(client);
    const response = await health.get();
    console.log('Appwrite connection successful:', response);
  } catch (error) {
    console.error('Failed to connect to Appwrite:', error);
  }
};

// Optional: Check the connection status on startup
checkAppwriteConnection();

// Function to upload a file with retry logic
export const uploadFileWithRetry = async (fileData: File, retries = 3): Promise<sdk.Models.File | undefined> => {
  try {
    const response = await storage.createFile(BUCKET_ID!, 'unique()', fileData);
    console.log('File uploaded successfully:', response);
    return response;
  } catch (error: any) {
    if (retries > 0) {
      console.warn(`Upload failed, retrying... (${retries} retries left)`, error);
      return uploadFileWithRetry(fileData, retries - 1);
    } else {
      console.error('Upload failed after retries:', error);
      throw error; // Rethrow after all retries fail
    }
  }
};
