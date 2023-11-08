import { Grid } from "@mui/material";
import React from "react";

export const PropsChild = ({ massege,Number,Name}) => {
  return (
    <Grid item xs={12} >
      <h1>Child Component</h1>
      <h2>{ massege}</h2>
      <h1>{Number}{Name}</h1>
    </Grid>
  );
};
