import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

export default function IconMenu() {
  return (
    <Box
      sx={{ width: 200, maxWidth: "100%", backgroundColor: "black", p: "10px" }}
    >
      <MenuList sx={{ color: "white" }}>
        <MenuItem>
          <ListItemIcon sx={{ color: "white" }}>
            <FontAwesomeIcon icon={faPencil} />
          </ListItemIcon>
          <ListItemText>Manage Profiles</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ color: "white" }}>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Transfer Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={{ color: "white" }}>
            <FontAwesomeIcon icon={faUser} />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <Divider sx={{ background: "white" }} />
        <MenuItem>
          <ListItemText>
            <center>Sign Out</center>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
