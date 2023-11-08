import { Card, CardContent, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const ApiFetch = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(()=>{
    getApi();
  },[])
  return (
    <Grid container spacing={3} align="center">
      <Grid item xs={12}>
        <h1>Api Fetching</h1>
      </Grid>
      {
        data.map((item)=>
         <Grid item xs={4}>
            <Card sx={{bgcolor:"khaki"}}>
                <CardContent>
                    <img src={item.image} height={180} alt="" />
                    <h2>{item.category}</h2>
                    <h3>₹{item.price}</h3>
                    <Rating value={item.rating.rate} />
                </CardContent>
            </Card>
         </Grid>
        )
      }
    </Grid>
  );
};
