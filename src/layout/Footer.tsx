import { Box, Grid, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#111", color: "#fff", p: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6">My App</Typography>
          <Typography variant="body2">
            A short description about your app or company.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6">Links</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit">Home</Link>
            <Link href="#" color="inherit">About</Link>
            <Link href="#" color="inherit">Contact</Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6">Social</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit">Twitter</Link>
            <Link href="#" color="inherit">GitHub</Link>
            <Link href="#" color="inherit">LinkedIn</Link>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}