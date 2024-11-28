import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";

export const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: awsConfig.Auth.userPoolId,
        userPoolClientId: awsConfig.Auth.userPoolWebClientId,
      },
    },
  });
};
