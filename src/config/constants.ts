export default {
  api: {
    host: import.meta.env.VITE_API_HOST,
  },
  msal: {
    loginConfig: {
      redirectUri: import.meta.env.BASE_URL,
    },
  },
};
