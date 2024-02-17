import { Box, Button, FormControl, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { textFieldSX } from "./signUp.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextFieldController } from "../../components/textFieldController/TextFieldController";
import { useSignUp } from "../../services";
import { useEffect, useState } from "react";

interface SignUpFormInputs {
  readonly email: string;
  readonly password: string;
  readonly phone?: string;
}
const SignUp = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [show, setShow] = useState(false);
  const { control, handleSubmit, formState } = useForm<SignUpFormInputs>({
    defaultValues: { email },
  });
  const { errors } = formState;
  const { signUp, response } = useSignUp();
  const navigate = useNavigate();
  useEffect(() => {
    if (response?.data?.success) {
      localStorage.setItem(
        "accessToken",
        response?.data?.response?.body?.token
      );
      navigate("/browse");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    if (data.email && data.password) {
      signUp({
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          margin: "100px",
          gap: 1,
          width: "450px",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>STEP 1 OF 3</Typography>
        <Typography variant="h1">
          Create a password to start your membership
        </Typography>
        <Typography fontSize={18} fontWeight={350}>
          Just a few more steps and you're done! We hate paperwork, too.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl sx={{ gap: 1, width: "100%", py: 1 }}>
            <TextFieldController
              name="email"
              textFieldProps={{
                label: "Email",
                variant: "outlined",
                sx: textFieldSX,
                InputLabelProps: { style: { color: "black" } },
                error: !!errors.email?.message,
              }}
              controllerProps={{
                control,
                rules: {
                  pattern: {
                    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
                    message: "Invalid email",
                  },
                },
              }}
            />
            <TextFieldController
              name="password"
              textFieldProps={{
                label: "Add a Password",
                variant: "outlined",
                type: "password",
                sx: textFieldSX,
                InputLabelProps: { style: { color: "black" } },
                error: !!errors.password?.message,
              }}
              controllerProps={{
                control,
                rules: {
                  minLength: {
                    value: 6,
                    message: "Password should contain min 6 characters",
                  },
                },
              }}
            />
            {show && (
              <TextFieldController
                name="phone"
                textFieldProps={{
                  label: "Phone number",
                  variant: "outlined",
                  sx: textFieldSX,
                  InputLabelProps: { style: { color: "black" } },
                  helperText: "Optional",
                  error: !!errors.phone?.message,
                }}
                controllerProps={{
                  control,
                  rules: {
                    pattern: {
                      value: new RegExp(`^([6789]\\d{9}$)`),
                      message: "Invalid phone number",
                    },
                  },
                }}
              />
            )}
            {!show && (
              <Button
                variant="contained"
                sx={{ borderRadius: "4px", py: 0.75, mt: 0.75 }}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <Typography fontSize="20px" fontWeight="400">
                  Next
                </Typography>
              </Button>
            )}
            {show && (
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "4px", py: 0.75, mt: 0.75 }}
              >
                <Typography fontSize="20px" fontWeight="400">
                  Submit
                </Typography>
              </Button>
            )}
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
