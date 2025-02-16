import { ID, Query } from "appwrite";
import { account, appWriteConfige, databases } from "./appwriteConfige";
import { signInProps, SignUpParams } from "@/types";

//let number = "679714147";
export const getUserInfo = async (email: string, password: string) => {
  try {
    const user = await databases.listDocuments(
      appWriteConfige.DATABASE_ID!,
      appWriteConfige.USER_COLLECTION_ID!,
      [Query.equal("email", [email]), Query.equal("password", [password])]
    );

    if (!user) {
      return null;
    }

    return user.documents[0];
  } catch (error) {
    console.log(error);
  }
};



export const signIn = async ( email:string, password:string  ) => {
  try {
    let ses = await getSes()

    if (ses) {
     const login = await account.get()
      console.log(login);

      return login
    }
   await account.createEmailPasswordSession(email, password);
    const userIn = await account.get();
    if(!userIn) return false
    return userIn;
  } catch (error) {
    console.error("Error", error);
  }
};

export const deleteSession = async () => {
  try {
    const deleteSes = account.deleteSession("current")
    if(!deleteSes) return false
    return deleteSes;
  } catch (error) {
    console.error("Error", error);
  }
};

export const getSes = async()=>{
const result = await account.getSession(
    'current' // sessionId
);
if (!result) return false
return result
}

export const signUp = async ({ ...userData }: SignUpParams) => {
  const { email, firstName, lastName, password } = userData;

  let newUserAccount;
  console.log(appWriteConfige);

  try {
    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    if (!newUserAccount) throw new Error("Error creating user");

    await databases.createDocument(
      appWriteConfige.DATABASE_ID!,
      appWriteConfige.USER_COLLECTION_ID!,
      ID.unique(),
      {
        ...userData,
        userId: newUserAccount.$id,
      }
    );

    const session = await getUserInfo(email, password);
   
    if (!session) {
      return null;
    }
 

    
    return session;

  } catch (error) {
    console.error("Error", error);
  }
};

export const getAdmine = async () => {
  const result = await databases.listDocuments(
    appWriteConfige.DATABASE_ID!,
    appWriteConfige.USER_COLLECTION_ID!,
    [Query.equal("admin", true) ]
  );
  return result.documents[0];
};

export const getEmailSession = async () => {
  const result = await account.get();
  return result;
};

export const deleteEmailSession = async () => {
  const result = await account.getSession("current");
  return result;
};

export const getUserById = async(id:string)=>{
  const result = await databases.getDocument(
    appWriteConfige.DATABASE_ID!,
    appWriteConfige.USER_COLLECTION_ID!,
    id
  );
  return result;
}