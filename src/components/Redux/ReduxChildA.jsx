import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const ReduxChildA=()=>{
    const myclr=useSelector((state)=>state.ColorReducer.color);
    return(
        <Grid container spacing={3} align="center">
            <Grid item xs={12}>
        <h1>Child A</h1>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{border:"5px solid black", backgroundColor:myclr}}>
                    <CardContent>
                        <h1>{myclr}</h1>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}