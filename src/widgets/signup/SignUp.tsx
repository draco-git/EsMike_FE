import { Box, Button, FormControl, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { textFieldSX } from "./signUp.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextFieldController } from "../../components/textFieldController/TextFieldController";

interface SignUpFormInputs {
  readonly email: string;
  readonly password: string;
  readonly phone?: string;
}
const SignUp = () => {
  const location = useLocation();
  const email = location.state?.email;
  const { control } = useForm<SignUpFormInputs>({ defaultValues: { email } });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    if (data.email && data.password) {
      ({
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
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>STEP 1 OF 3</Typography>
        <Typography variant="h1">
          Create a password to start your membership
        </Typography>
        <Typography variant="h1">
          Just a few more steps and you're done! We hate paperwork, too.
        </Typography>
        <Typography>
          Enter your password and you'll be watching in no time.
        </Typography>
        <form>
          <FormControl>
            <TextFieldController
              name="email"
              textFieldProps={{
                label: "Email",
                variant: "outlined",
                sx: textFieldSX,
              }}
              controllerProps={{
                control,
                rules: {
                  pattern: {
                    value: new RegExp("^(.+@.+|d{10})$"),
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
                sx: textFieldSX,
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
            <TextFieldController
              name="phone"
              textFieldProps={{
                label: "Phone number",
                variant: "outlined",
                sx: textFieldSX,
              }}
              controllerProps={{
                control,
                rules: {
                  pattern: {
                    value: new RegExp("^(d{10})$"),
                    message: "Invalid Phone number",
                  },
                },
              }}
            />
            <Button variant="contained" sx={{ borderRadius: "4px" }}>
              <Typography fontSize="20px" fontWeight="400">
                Next
              </Typography>
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: "4px" }}
            >
              <Typography fontSize="20px" fontWeight="400">
                Submit
              </Typography>
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
