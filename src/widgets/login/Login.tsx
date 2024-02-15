import {
  Box,
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextFieldController } from "../../components/TextFieldController";
import { useLogin } from "../../services/login";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface LoginFormInputs {
  emailOrPhone: string;
  password: string;
}

interface ApiResponse {
  success: boolean;
  response?: {
    body: Array<{ id: string }>;
  };
}

type LoginApiResponse =
  | { data: ApiResponse }
  | { error: FetchBaseQueryError | SerializedError };

export const Login = () => {
  const { control, formState, handleSubmit } = useForm<LoginFormInputs>();
  const { errors } = formState;
  const { trigger, response } = useLogin();
  const navigate = useNavigate();
  // const { data, error } = response;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log(data);
    if (data.emailOrPhone && data.password) {
      const resp: LoginApiResponse = await trigger({
        email: data.emailOrPhone,
        password: data.password,
      });
      console.log("7778", resp);
      if ("data" in resp) {
        const responseData: ApiResponse = resp.data;
        console.log(responseData.response?.body[0]?.id);
        navigate("browse");
      } else {
        const error: FetchBaseQueryError | SerializedError = resp.error;
        console.error(error);
      }

      console.log("7775", response?.data, response?.error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 68px",
        width: "450px",
        gap: 2,
        background: "rgba(0,0,0,0.7)",
        color: "white",
        minHeight: "707px",
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ gap: 2, width: "100%" }}>
          <Typography variant="h1">Sign In</Typography>
          <TextFieldController<LoginFormInputs>
            name="emailOrPhone"
            controllerProps={{
              control,
              rules: {
                pattern: {
                  value: new RegExp("^(.+@.+|d{10})$"),
                  message: "pattern mis match",
                },
                onChange(event) {
                  return event.target.value;
                },
              },
            }}
            textFieldProps={{
              required: true,
              label: "Email or phone number",
              variant: "outlined",
              error: !!errors.emailOrPhone?.message,
              InputLabelProps: { style: { color: "white" } },
            }}
          />

          <TextFieldController<LoginFormInputs>
            name="password"
            controllerProps={{
              control,
              rules: {
                minLength: { message: "min length is 6", value: 6 },
                onChange(event) {
                  return event.target.value;
                },
              },
            }}
            textFieldProps={{
              required: true,
              label: "Password",
              variant: "outlined",
              error: !!errors.password?.message,
              type: "password",
              InputLabelProps: { style: { color: "white" } },
            }}
          />

          <Button variant="contained" type="submit">
            <Typography variant="body1"> Submit </Typography>
          </Button>
        </FormControl>
      </form>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl>
      <Box>
        <Typography component="span" variant="subtitle2">
          New to Netlfix?
        </Typography>
        <Link
          to="/signup"
          style={{ textDecoration: "none", marginLeft: "8px", color: "white" }}
        >
          <Typography variant="subtitle1" component="span">
            Sign Up now
          </Typography>
        </Link>
      </Box>
      <Typography variant="caption">
        This page is protected by google reCAPTCHA
      </Typography>
    </Box>
  );
};
