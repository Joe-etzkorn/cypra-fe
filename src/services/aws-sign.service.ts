import {
  signIn,
  signOut,
  type SignInInput,
  confirmSignIn,
  fetchUserAttributes,
  getCurrentUser,
  fetchAuthSession,
} from "aws-amplify/auth";

async function awsSignIn({ username, password }: SignInInput) {
  try {
    await awsSignOut();
    const signInOutput = await signIn({
      username,
      password,
    });

    if (signInOutput.isSignedIn) {
      const currentUser = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      const authSession = await fetchAuthSession();
      return {
        ...signInOutput,
        nextStep: signInOutput.nextStep,
        user: {
          ...currentUser,
          attributes: userAttributes,
        },
        authSession,
      };
    }
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

async function awsSignOut() {
  try {
    await signOut();
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

async function confirmNewPassword({
  newPassword,
  username,
}: {
  newPassword: string;
  username: string;
}) {
  try {
    const confirmSignInOutput = await confirmSignIn({
      challengeResponse: newPassword,
      options: {
        userAttributes: {
          name: username,
          given_name: username,
          family_name: username,
          phone_number: "+0123456789",
        },
      },
    });
    return confirmSignInOutput;
  } catch (error) {
    console.error("Error confirming new password:", error);
    throw error;
  }
}

export const AwsService = {
  awsSignIn,
  confirmNewPassword,
  awsSignOut,
};
