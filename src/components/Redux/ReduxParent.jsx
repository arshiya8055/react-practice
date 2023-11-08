import { Button, Grid } from "@mui/material";
import React from "react";
import { ReduxChildA } from "./ReduxChildA";
import { ReduxChildB } from "./ReduxChildB";
import { ReduxChildC } from "./Store/Reducers/ReduxChildC";
import { ReduxChildD } from "./ReduxChildD";
import { useDispatch } from "react-redux";

export const ReduxParent = () => {
  const allcolors = ["RED", "AQUA", "DEEPPINK", "ORANGE", "blue", "khaki"];

  const dispatch = useDispatch();

  const handleSend = (item) => {
    const type = "CLR";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };
  return ( 
    <Grid container spacing={3} align="center">
      <Grid item xs={12}>
        <h1>Child Parent</h1>
      </Grid>
      {allcolors.map((item) => (
        <Grid item xs={2}>
          <Button
            onClick={() => handleSend(item)}
            variant="contained"
            color="success"
            sx={{bgcolor:item}}
            fullWidth
          >
            {item}
          </Button>
        </Grid>
      ))}
      <Grid item xs={3}>
        <ReduxChildA />
      </Grid>
      <Grid item xs={3}>
        <ReduxChildB />
      </Grid>
      <Grid item xs={3}>
        <ReduxChildC />
      </Grid>
      <Grid item xs={3}>
        <ReduxChildD />
      </Grid>
    </Grid>
  );
};
