import {
  AppBar,
  Avatar,
  Box,
  Button,
  Popover,
  TextField,
  Toolbar,
} from "@mui/material";
import { Logo } from "../../components/logo";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import IconMenu from "./IconMenu.tsx";

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
  const profileButton = useRef<HTMLDivElement | null>(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
  const dropDownIconRef = useRef<SVGSVGElement | null>(null);

  const rotateFontAwesomeIcon = () => {
    if (dropDownIconRef.current) {
      const currDeg = dropDownIconRef.current.style.transform;
      if (currDeg === "rotate(0deg)") {
        dropDownIconRef.current.style.transform = "rotate(180deg)";
      } else {
        dropDownIconRef.current.style.transform = "rotate(0deg)";
      }
      dropDownIconRef.current.style.transition = "transform";
      dropDownIconRef.current.style.transitionDuration = "0.6s";
      dropDownIconRef.current.style.transitionTimingFunction = "ease-in";
    }
  };
  const handlePopoverOpen = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setAnchorEl(profileButton.current);
    rotateFontAwesomeIcon();
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl((prev) => {
      if (prev) return null;
      return event.currentTarget;
    });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    rotateFontAwesomeIcon;
  };

  const openDropDown = !!anchorEl;

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

            <Box sx={{ flexGrow: 0 }}>
              <Box
                ref={profileButton}
                sx={{ display: "flex" }}
                onClick={handleClick}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                aria-owns={openDropDown ? "mouse-over-popover" : undefined}
              >
                <Avatar variant="rounded" />
                <FontAwesomeIcon
                  ref={dropDownIconRef}
                  icon={faCaretDown}
                  style={{
                    color: "white",
                    marginLeft: "5px",
                    alignSelf: "center",
                    transition: "transform 2s",
                    transitionTimingFunction: "ease",
                  }}
                  size="2xs"
                />
              </Box>

              <Popover
                id="mouse-over-popover"
                open={openDropDown}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <IconMenu />
                </Box>
              </Popover>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
