import React from "react";
import { PropsMain } from "./components/PropsMain";
import { TodoList } from "./components/TodoList/TodoList";
import { Card, CardContent } from "@mui/material";
import { ApiFetch } from "./components/ApiFetching/ApiFetch";
import { Landing } from "./components/Routing/Landing";
import { configstore } from "./components/Redux/Store/configstore";
import { Provider } from "react-redux";

function App() {
  const mystore=configstore()
  return (
    <Provider store={mystore}>
      <Card>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
    </Provider>
    
  );
}

export default App;
