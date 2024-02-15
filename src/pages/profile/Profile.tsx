import { Box, Typography } from "@mui/material";
import { profiles } from "./mockProfile";

export const Profile = () => {
  return (
    <Box
      sx={{
        // marginTop: "100px",
        height: "100%",
        gap: 3,
        background: "rgba(0,0,0)",
      }}
    >
      <center>
        {" "}
        <Typography variant="h1" color="white" sx={{ marginBottom: "40px" }}>
          Who's watching?
        </Typography>{" "}
      </center>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {profiles.map((profile) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
              gap: 2,
            }}
          >
            <Box
              component="img"
              sx={{
                height: "10vw",
                borderRadius: "4px",
                maxWidth: "200px",
              }}
              alt="profile image"
              src={profile.source}
            />
            <center>
              {" "}
              <Typography color="white">{profile.name}</Typography>{" "}
            </center>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
