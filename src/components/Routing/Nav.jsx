import { Grid, Button } from "@mui/material";
import React from "react";
import { navdata } from "./navdata";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <Grid container spacing={3}>
            {
                navdata.map((item)=>
                <Grid item xs={3}>
                    <Link to={item.path}>
                        <Button variant="contained" fullWidth color="warning">{item.title}</Button>
                    </Link>
                </Grid>
                )
            }
        </Grid>
    )
}