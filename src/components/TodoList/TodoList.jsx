import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [copydata, setCopyData] = useState([]);
  const [indexnum, setIndexNum] = useState(null);
  const [edit, setEdit] = useState(false);

  const handleDelete = (index) => {
    const result = data.filter((elem, i) => i !== index);
    setData(result);
  };

  const handleSearch = () => {
    const result = copydata.filter((item) =>
      item.toUpperCase().includes(search.toUpperCase())
    );
    setData(result);
  };

  const handleAdd = () => {
    if (edit === true) {
      data.splice(indexnum, 1, text);
      setIndexNum(null);
      setEdit(false);
      setText("");
    } else {
      setData([...data, text]);
      setCopyData([...copydata, text]);
      setText("");
    }
  };

  const handleUpdate = (item, index) => {
    setText(item);
    setIndexNum(index);
    setEdit(true);
  };

  return (
    <Grid container spacing={3} align="center">
      <Grid item xs={12}>
        <h1>TodoList</h1>
      </Grid>
      <Grid item xs={8}>
        <TextField
          fullWidth
          label="Search Here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={handleSearch}
          variant="contained"
          fullWidth
          sx={{ height: 55 }}
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={8}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          label="Type Text Here..."
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleAdd}
          variant="contained"
          sx={{ height: 55, bgcolor: edit ? "orange" : "green" }}
          color="success"
          fullWidth
        >
          {edit ? "Update" : "Add"}
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() => setText("")}
          variant="contained"
          sx={{ height: 55 }}
          color="error"
          fullWidth
        >
          Clear
        </Button>
      </Grid>
      {data.map((item, index) => (
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <h2>{index + 1}</h2>
              <h1>{item}</h1>
              <Button
                onClick={() => handleDelete(index)}
                variant="contained"
                fullWidth
                color="error"
              >
                Delete
              </Button>
              <br />
              <br />
              <Button
                onClick={() => handleUpdate(item, index)}
                variant="contained"
                fullWidth
                color="secondary"
              >
                Update
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
