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

    checkUser: build.mutation({
      query: ({ email }: { email: string }) => ({
        url: "/checkUser",
        method: "POST",
        body: { email },
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

const useCheckUser = () => {
  const { useCheckUserMutation } = loginService;
  const [checkUser, response] = useCheckUserMutation();
  return {
    checkUserExists: ({ email }: { email: string }) => checkUser({ email }),
    response,
  };
};

export { loginService, useLogin, useCheckUser };
