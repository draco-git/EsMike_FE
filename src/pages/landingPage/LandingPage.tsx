import { Box, Button, TextField, Typography } from "@mui/material";
import { Navbar } from "../../components/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Box sx={{ color: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography fontSize="48px" fontWeight={700}>
          Unlimited movies, TV shows and more
        </Typography>
        <Typography fontSize={20}>Watch anywhere. Cancel anytime.</Typography>
        <Typography fontSize={20}>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
      </Box>
      <Box
        sx={{
          my: 2,
          display: "flex",
          mx: "48px",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <TextField
          sx={{ minWidth: "400px" }}
          label="Email Address"
          color="secondary"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            navigate("/signup", { state: { email } });
          }}
          sx={{ textTransform: "none", fontSize: "24px", px: 1 }}
          endIcon={<FontAwesomeIcon icon={faChevronRight} />}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};
export const LandingPage = () => {
  return (
    <Box>
      <img
        style={{
          zIndex: "-1",
          position: "absolute",
          height: "100vh",
          width: "100vw",
        }}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <Box
        sx={{
          zIndex: "-1",
          position: "absolute",
          height: "100vh",
          width: "100vw",
          opacity: "0.7",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(20,20,20,1) 40%, rgba(0,0,0,1) 90%)",
        }}
      />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SignUp />
      </Box>
    </Box>
  );
};
