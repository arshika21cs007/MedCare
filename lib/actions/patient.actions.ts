"use server";

import { ID, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { InputFile } from "node-appwrite/file";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
//It uses users.create to create a new user with a unique ID, email, phone number, and name.
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    // Log the user object before parsing
    console.log("User object before parseStringify:", newUser);

    return parseStringify(newUser);
  } catch (error: any) {
    // If the user already exists (error code 409), it retrieves and returns the existing user.
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    //It uses users.get to fetch the user's details from Appwrite.
    const user = await users.get(userId);

    // Log the user object before parsing then returns the parsed user object.
    console.log("User object before parseStringify:", user);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

//REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBuffer(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );
             
        // If an identification document is provided, it first uploads the document to Appwrite's storage using storage.createFile.

// The file is uploaded with a unique ID, and the file's URL is generated for later access.
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    // It then creates a new patient document in the database using databases.createDocument, which includes the uploaded document's ID and URL along with other patient details.
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: 
          `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
          
        ...patient,
      }
    );

    // Log the patient object before parsing
    console.log("Patient object before parseStringify:", newPatient);

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    // It uses databases.listDocuments to fetch the patient's document from the Appwrite database, filtering by the userId.
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    // Log the patient object before parsing then returns the parsed patient object.
    console.log("Patient object before parseStringify:", patients.documents[0]);

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
