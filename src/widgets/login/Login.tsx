import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register } = useForm();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        width: 500,
        gap: 2,
        background: "rgba(0,0,0,0.7)",
        color: "white",
      }}
    >
      <form>
        <center>
          <Typography variant="h1">Sign In</Typography>
        </center>
        <TextField
          required
          id="filled-required"
          label="Email or Phone Number"
          variant="outlined"
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          required
          id="filled-required"
          label="Password"
          variant="outlined"
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <Button variant="contained">
          <Typography variant="body1"> Submit </Typography>
        </Button>
      </form>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <Box>
        <Typography component="span" variant="subtitle2">
          New to Netlfix?
        </Typography>
        <Link
          to="/signup"
          style={{ textDecoration: "none", marginLeft: "8px", color: "white" }}
        >
          <Typography component="span">Sign Up now</Typography>
        </Link>
      </Box>
      <Typography variant="caption">
        This page is protected by google reCAPTCHA
      </Typography>
    </Box>
  );
};
