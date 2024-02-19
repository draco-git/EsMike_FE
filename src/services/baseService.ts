import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseService = createApi({
  reducerPath: "esmarkv1",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9080",
    mode: "cors",
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      headers.set("authorization", `Bearer ${token as string}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export { baseService };
