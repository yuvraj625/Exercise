import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
  );
}
