import { AppBar, Box, Button, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", zIndex: "2", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img height={80} style={{ border: "10px solid red" }} />
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            href="/signup"
          >
            SignUp
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
