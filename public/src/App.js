import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
export default function App() {
  console.log(Math.round(Math.random() * 1000));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
