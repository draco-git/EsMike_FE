import { baseService } from "./baseService";

export interface LoginProps {
  readonly email: string;
  readonly password: string;
}
const loginService = baseService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ email, password }: LoginProps) => ({
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

    signUp: build.mutation({
      query: ({ email, password }: LoginProps) => ({
        url: "/signup",
        method: "POST",
        body: { email, password },
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

const useSignUp = () => {
  const { useSignUpMutation } = loginService;
  const [signUp, response] = useSignUpMutation();
  return {
    signUp: ({ email, password }: { email: string; password: string }) =>
      signUp({ email, password }),
    response,
  };
};

export { loginService, useLogin, useCheckUser, useSignUp };
