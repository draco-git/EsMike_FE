import { baseService } from "./baseService";

export interface LoginProps {
  readonly email: string;
  readonly password: string;
}

export interface SignUpProps extends LoginProps {
  readonly phone?: string;
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
      query: ({ email, password, phone }: SignUpProps) => ({
        url: "/signup",
        method: "POST",
        body: { email, password, phone },
      }),
    }),
  }),
});

const useLogin = () => {
  const { useLoginMutation } = loginService;
  const [login, response] = useLoginMutation();
  return {
    trigger: (props: LoginProps) => login(props),
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
    signUp: (props: SignUpProps) => signUp(props),
    response,
  };
};

export { loginService, useLogin, useCheckUser, useSignUp };
