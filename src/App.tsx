import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import { Footer } from "./sections";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  );
}
