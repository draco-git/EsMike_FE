import { Box, Button, Typography } from "@mui/material";
import { Navbar } from "../../components/navbar";
import { useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { useCheckUser } from "../../services";
import { TextFieldController } from "../../components/textFieldController/TextFieldController.tsx";
import { useForm } from "react-hook-form";

export const LandingPage = () => {
  const { checkUserExists } = useCheckUser();
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith("/login");

  const EmailInputCard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const textFieldRef = useRef<HTMLLabelElement>(null);
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm<{ email: string }>();
    const handleClick = (email: string) => {
      if (!email) {
        textFieldRef.current?.focus();
      } else {
        checkUserExists({ email }).then((response) => {
          if ("data" in response && response?.data?.success)
            navigate("login", { state: { email } });
          else navigate("/signup", { state: { email } });
        });
      }
    };
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
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            my: 2,
            display: "flex",
            mx: "48px",
            justifyContent: "center",
            gap: 1,
          }}
          onSubmit={handleSubmit((data) => {
            handleClick(data.email);
          })}
        >
          <TextFieldController
            name="email"
            textFieldProps={{
              label: "Email Address",
              color: "secondary",
              InputLabelProps: {
                style: { color: "white" },
                ref: textFieldRef,
              },
              InputProps: { style: { color: "white" } },
              value: email,
              onChange: (e) => setEmail(e.target.value),
              onKeyDown: (event) => {
                if (event.code === "Enter") {
                  handleClick(email);
                }
              },
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

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", fontSize: "24px", px: 1 }}
            endIcon={<FontAwesomeIcon icon={faChevronRight} />}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    );
  };
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
      <Navbar showSignInButton={!isLoginPage} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {isLoginPage ? <Outlet /> : <EmailInputCard />}
      </Box>
    </Box>
  );
};
