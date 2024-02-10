import { baseService } from "./baseService";

const loginService = baseService.injectEndpoints({
  endpoints: (build) => ({
    login: build.query({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: "/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

const useLogin = ({ email, password }: { email: string; password: string }) => {
  const { useLoginQuery } = loginService;
  return useLoginQuery({ email, password });
};
export { loginService, useLogin };
