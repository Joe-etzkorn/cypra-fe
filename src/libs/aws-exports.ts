const awsConfig = {
  Auth: {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    mandatorySignIn: true,
  },
};

export default awsConfig;
