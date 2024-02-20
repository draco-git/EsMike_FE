import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Logo } from "../logo";

export interface NavbarConfig {
  readonly showSignInButton?: boolean;
}
export const Navbar = ({ showSignInButton = true }: NavbarConfig) => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", zIndex: "2", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>
        {showSignInButton && (
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              href="login"
            >
              SignIn
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
