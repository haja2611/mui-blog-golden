import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

export default function BasicSelect() {
  const [contact, setContact] = React.useState("");

  const handleChange = (event) => {
    setContact(event.target.value);
  };

  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "10px ",
        padding: "20px 5px",
      }}
    >
      <CardContent>
        <form>
          {" "}
          <Typography variant="h5" gutterBottom="5px">
            Contact to
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={12} item>
              <Select
                value={contact}
                onChange={handleChange}
                fullWidth
                required
              >
                <MenuItem value={1}>Marketing</MenuItem>
                <MenuItem value={2}>Sales</MenuItem>
                <MenuItem value={3}>HR</MenuItem>
              </Select>
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="number"
                label="Phone Number"
                placeholder="Enter Phone Number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} md={12} item>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: "10px 10px 10px 0" }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
