import { Box, Typography } from "@mui/material";
import { profiles } from "./mockProfile";

export const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "rgba(0,0,0)",
      }}
    >
      <Box
        sx={{
          gap: 3,
          width: "100%",
        }}
      >
        <center>
          <Typography
            color="white"
            sx={{ mb: "40px", fontSize: "54px", fontWeight: 700 }}
          >
            Who's watching?
          </Typography>
        </center>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
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
              <img
                style={{
                  height: "200px",
                  borderRadius: "4px",
                  maxWidth: "200px",
                }}
                alt="profile image"
                src={profile.source}
              />
              <center>
                <Typography fontSize={18} color="white">
                  {profile.name}
                </Typography>
              </center>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
