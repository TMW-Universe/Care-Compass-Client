export default {
  api: {
    host: import.meta.env.VITE_API_HOST as string,
    port:
      typeof import.meta.env.VITE_API_PORT === "string"
        ? +import.meta.env.VITE_API_PORT
        : 5001,
  },
  auth: {
    authClientHost: import.meta.env.VITE_AUTH_CLIENT_HOST,
    authApiHost: import.meta.env.VITE_AUTH_API_HOST,
  },
};
