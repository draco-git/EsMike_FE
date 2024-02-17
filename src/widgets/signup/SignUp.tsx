import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const email = location.state?.email;

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
        <Typography variant="h1">Welcome back!</Typography>
        <Typography variant="h1">Joining Netflix is easy.</Typography>
        <Typography>
          Enter your password and you'll be watching in no time.
        </Typography>
        <Typography>Email</Typography>
        <Typography>{email}</Typography>
        <TextField
          label="Enter your Password"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0,0,0, 0.3)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(0,0,0)",
              },
              "&.Mui-active fieldset": {
                borderColor: "rgba(0,0,0)",
              },
              ":hover fieldset": {
                borderColor: "rgba(0,0,0, 0.7)",
              },
            },
          }}
        />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#0071eb",
          }}
        >
          <Typography sx={{ ":hover": { textDecoration: "underline" } }}>
            Forgot your password?
          </Typography>
        </Link>
        <Button variant="contained" sx={{ borderRadius: "4px" }}>
          <Typography fontSize="20px" fontWeight="400">
            Next
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
