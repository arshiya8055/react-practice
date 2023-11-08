import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PropsMain } from "../PropsMain";
import { TodoList } from "../TodoList/TodoList";
import { ApiFetch } from "../ApiFetching/ApiFetch";
import { Nav } from "./Nav";
import { ReduxParent } from "../Redux/ReduxParent";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PropsMain />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/api" element={<ApiFetch />} />
        <Route path="/reduxparent" element={<ReduxParent />} />
      </Routes>
    </BrowserRouter>
  );
};
