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
export const getTransaction = async () => {
  const data = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.TRANSACTION_COLLECTION_ID
  );
  return data?.documents;
};

export const getAllUsers = async () => {
  const data = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.USER_COLLECTION_ID
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

export const upDateUser = async (data:{userId:string, amount?:number, code?:string}) => {
  const datas = await databases.updateDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.USER_COLLECTION_ID,
    data.userId,
    {
      ...data,
      
    },
    
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
  const promise = await databases.listDocuments(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.NOTIFICATION_COLLECTION_ID,
    [Query.equal("userId", `${userId}`), Query.orderDesc("createdAt")]
  );
  return promise.documents;
};

export const sendNotification = async (message: Notifications) => {
  const promise = await databases.createDocument(
    appWriteConfige.DATABASE_ID,
    appWriteConfige.NOTIFICATION_COLLECTION_ID,
    ID.unique(),
    message
  );
  return promise;
};
