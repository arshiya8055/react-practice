import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { PropsChild } from "./PropsChild";

export const PropsMain = () => {
  const [msg, setMsg] = useState("My Msg...");
  const [name, setName] = useState("Name");
  const [num, setNum] = useState(0);

  const handleAll = () => {
    setName("-ARSHIYA");
    setNum(8055837233)
    
  };
  return (
    <Grid container spacing={3} sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <h1>Parent Component</h1>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setMsg("PickupBiz Learning")} 
          variant="contained"
          fullWidth
        >
          Send To Child
        </Button>
        <br />
        <br />
        <Button onClick={handleAll} variant="contained" fullWidth>
          Send To Buy Function
        </Button>
      </Grid>
      <PropsChild massege={msg} Name={name} Number={num} />
    </Grid>
  );
};
