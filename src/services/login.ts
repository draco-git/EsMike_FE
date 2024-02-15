import { baseService } from "./baseService";

const loginService = baseService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
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

const useLogin = () => {
  const { useLoginMutation } = loginService;
  const [login, response] = useLoginMutation();
  return {
    trigger: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    response,
  };
};

export { loginService, useLogin };
