import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://taskmaster-server.vercel.app",
  }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});

export default baseAPI;
