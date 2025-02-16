import { Account, Client, Databases, Storage } from "appwrite";

  const client: Client = new Client();

export const appWriteConfige = {
  PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  CARD_ID: import.meta.env.VITE_APPWRITE_CARD_COLLECTION_ID,
  NOTIFICATION_COLLECTION_ID: import.meta.env.VITE_APPWRITE_NOTIFICATION_COLLECTION_ID,
  USER_COLLECTION_ID: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  TRANSACTION_COLLECTION_ID:import.meta.env.VITE_APPWRITE_TRANSACTION_COLLECTION_ID,
  MESSAGES_COLLECTION_ID:import.meta.env.VITE_APPWRITE_MESSAGES_COLLECTION_ID
 
};

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(appWriteConfige.PROJECT_ID); // Replace with your project ID

export const account: Account = new Account(client);
export const databases: Databases = new Databases(client);
export const storage: Storage = new Storage(client);

export default client