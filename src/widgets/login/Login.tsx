import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextFieldController } from "../../components/textFieldController/TextFieldController";
import { useLogin } from "../../services/login";
import { useEffect } from "react";
import { loginMainContainer } from "./login.styles";

interface LoginFormInputs {
  readonly emailOrPhone: string;
  readonly password: string;
}

export const Login = () => {
  const { control, formState, handleSubmit } = useForm<LoginFormInputs>();
  const { errors } = formState;
  const { trigger, response } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (response?.data?.success) {
      localStorage.setItem("accessToken", response?.data?.response?.token);
      navigate("/browse");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    if (data.emailOrPhone && data.password) {
      trigger({
        email: data.emailOrPhone,
        password: data.password,
      });
    }
  };

  const commonTextFieldProps = {
    InputLabelProps: { style: { color: "white" } },
    InputProps: { style: { color: "white" } },
    required: true,
  };

  return (
    <Box sx={loginMainContainer}>
      <Typography variant="h1">Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ gap: 2, width: "100%" }}>
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
              label: "Email or phone number",
              error: !!errors.emailOrPhone?.message,
              variant: "outlined",
              ...commonTextFieldProps,
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
              label: "Password",
              error: !!errors.password?.message,
              type: "password",
              variant: "outlined",
              ...commonTextFieldProps,
            }}
          />

          <Button variant="contained" type="submit" sx={{ py: 0.75 }}>
            <Typography variant="body1" textTransform="none">
              Submit
            </Typography>
          </Button>
        </FormControl>
      </form>
      <FormControlLabel
        control={<Checkbox sx={{ color: "whitesmoke" }} />}
        label="Remember me"
      />
      <Box>
        <Typography component="span" variant="subtitle2">
          New to Netflix?
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
      <Typography variant="caption" sx={{ opacity: 0.6 }}>
        This page is protected by google reCAPTCHA
      </Typography>
    </Box>
  );
};
