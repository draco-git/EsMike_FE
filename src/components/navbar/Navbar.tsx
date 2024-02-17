import { AppBar, Box, Button, Toolbar } from "@mui/material";

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
          <img height={80} style={{ border: "10px solid red" }} />
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
