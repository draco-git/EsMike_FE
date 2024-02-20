import {
  AppBar,
  Avatar,
  Box,
  Button,
  Fade,
  IconButton,
  Paper,
  Popper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Logo } from "../../components/logo";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const buttons = [
  { name: "Home", path: "/home" },
  { name: "TvShows", path: "/tvshows" },
  {
    name: "Movies",
    path: "/movies",
  },
];
export const ProtectedNavbar = () => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenDropDown((previousOpen) => !previousOpen);
  };
  return (
    <>
      <AppBar position="fixed" sx={{ height: "80px", background: "black" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 0, mr: 3 }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 0.75 }}>
            {buttons.map((button) => {
              return (
                <>
                  <Button
                    variant="text"
                    onClick={() => {
                      navigate(button.path);
                    }}
                    sx={{
                      color: "grey",
                      ":hover": { textDecoration: "underline", color: "white" },
                    }}
                  >
                    {button.name}
                  </Button>
                </>
              );
            })}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Box>
              {openSearch ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid white",
                    px: 1,
                    minWidth: "400px",
                  }}
                >
                  <Box sx={{ cursor: "pointer" }}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      size="sm"
                      color={"white"}
                    />
                  </Box>
                  <TextField
                    variant={"outlined"}
                    InputProps={{
                      style: {
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        height: "40px",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                      },
                      flexGrow: 1,
                    }}
                  />
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setOpenSearch(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="sm"
                      color={"whiteSmoke"}
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  onClick={() => {
                    setOpenSearch(true);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
                </Box>
              )}
            </Box>
            <IconButton size={"small"} onClick={handleClick}>
              <Avatar variant="rounded" />
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "white", marginLeft: "5px" }}
                size="2xs"
              />

              <Popper
                sx={{ zIndex: 2 }}
                open={openDropDown}
                anchorEl={anchorEl}
                placement="bottom-end"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography sx={{ p: 2 }}>
                        The content of the Popper.
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
