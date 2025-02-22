import { ID, Permission, Query, Role } from "appwrite";
import { appWriteConfige, databases } from "./appwriteConfige";
import { Messages, Notifications, Transaction } from "../tanstack/mutasion";

//**********************Messages************************** */
export const sendMessage = async (data: {
  role: string;
  message: string;
  userId: string;
}) => {
  const promise = await databases.createDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.MESSAGES_COLLECTION_ID,
    ID.unique(),
    data
  );
  return promise;
};

export const getMessages = async (userId: string) => {
  const promise = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.MESSAGES_COLLECTION_ID,
    [Query.equal("userId", `${userId}`), Query.orderDesc("$createdAt")]
  );
  return promise.documents;
};

//**********************Transactions************************** */
export const getTransaction = async (userId: string) => {
  const data = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.TRANSACTION_COLLECTION_ID,
    [Query.equal("userId", `${userId}`), Query.orderAsc("$createdAt")]
  );
  return data?.documents;
};

export const getAllUsers = async () => {
  const data = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.USER_COLLECTION_ID,
    [ Query.orderDesc("$createdAt")]
  );
  return data.documents;
};

export const deletUsers = async (id: string) => {
  const data = await databases.deleteDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.USER_COLLECTION_ID,
    id
  );
  return data;
};

export const upDateUser = async (data: {
  $id:string,
  userId: string;
  amount?: number;
  code?: string;
  status?: string;
}) => {
  const datas = await databases.updateDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.USER_COLLECTION_ID,
    data.$id,
    {
      ...data,
    }
  );
  return datas;
};

export const SendTransaction = async (message: Transaction) => {
  const promise = await databases.createDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.TRANSACTION_COLLECTION_ID,
    ID.unique(),
    message
  );
  return promise;
};

//**********************Notifications************************** */
export const getNotification = async (userId: string) => {
  try {
      const promise = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.NOTIFICATION_COLLECTION_ID,
    [Query.equal("userId", `${userId}`), Query.orderDesc("$createdAt")]
  );
  console.log(promise);
  

  return promise.documents;
  
  } catch (error) {
    console.log(error);
    
  }

};

export const sendNotification = async (message: Notifications) => {
  try {
    const promise = await databases.createDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.NOTIFICATION_COLLECTION_ID,
    ID.unique(),
    message
  );
  return promise;
  } catch (error) {
    console.log(error);
    
  }
  
};
