import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      apiUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.API_URL // Expo injectera le secret en prod
          : process.env.API_URL, // .env pour le dev
    },
  };
};
