import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListMenu from "./pages/ListMenu";
import AddMenu from "./pages/AddMenu";
import UpdateMenu from "./pages/UpdateMenu";

export default function App() {
  return (
    <BrowserRouter>
      <h1>KFC</h1>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<ListMenu />} />
        <Route path="/add" element={<AddMenu />} />
        <Route path="/update/:id" element={<UpdateMenu />} />
      </Routes>
    </BrowserRouter>
  );
}