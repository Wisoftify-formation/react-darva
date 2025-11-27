import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Student } from "./pages/Student";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/:id" element={<Student />} />
      </Routes>
    </BrowserRouter>
  )
}