import axios from "axios";

const createHttpClient = (baseURL) => {
  const httpClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  httpClient.interceptors.request.use(
    (config) => {
      if (config.authType === "basic") {
        const { clientId, clientSecret } = config;
        config.headers.Authorization = `Basic ${btoa(
          `${clientId}:${clientSecret}`
        )}`;
      } else if (config.authType === "bearer") {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "jwtToken"
        )}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  httpClient.interceptors.response.use(
    (response) => {
      if (response.data && response.data.error) {
        return [response.data.error, null];
      }
      return [null, response.data];
    },
    (error) => {
      return Promise.reject([error, null]);
    }
  );

  return httpClient;
};

export default createHttpClient;
