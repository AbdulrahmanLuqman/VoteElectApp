// import { ID } from "appwrite";
// import { account } from "./config";

// export async function createUserAccount(user) {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       user.username,
//       user.faceRecognitionLabel,
//       user.faceData
//     );
//   } catch (error) {
//     console.log("error", error);
//   }
// }
import { ID } from "appwrite";
import { account, appwriteConfig, databases } from "./config";

export async function createUserAccount(user) {
  try {
    // Ensure the "email" attribute exists, if not, set it to an empty string
    const email = user.email || "";

    const newAccount = await account.create(
      ID.unique(), // Generate a unique ID for the user
      email,
      user.password,
      user.username
    );

    console.log(newAccount);

    if (!newAccount) throw Error("Failed to create user account");

    const completeUser = {
      email: newAccount.email,
      faceRecognitionId: user.password,
      username: user.username,
      accountId: newAccount.$id, // Add accountId to the user object
      // Add other properties from the newAccount object as needed
    };
    console.log(completeUser);

    const savedUser = await saveUserToDB(completeUser);
    console.log("User account created and data saved:", savedUser);

    return savedUser; // Return the complete user object
  } catch (error) {
    console.error("Error creating user account:", error);
    throw error; // Throw an error if account creation fails
  }
}

export async function saveUserToDB(user) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseID,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser; // Return the newly created user document
  } catch (error) {
    console.log("error", error);
    throw error; // Propagate the error if saving fails
  }
}

export async function signInAccount(user) {
  try {
    const password = user.faceRecognitionId;

    // const session = await account.createEmailSession(
    //   user.email,
    //   user.faceRecognitionId
    // );
    // return session;
    const session = await account.createEmailPasswordSession(
      user.email,
      password
    );
    return session;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
