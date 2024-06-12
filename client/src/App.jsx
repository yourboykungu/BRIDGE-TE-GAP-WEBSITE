import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "../pages/Course.jsx";
import Header from "../components/Header.jsx";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn.jsx";
import Institutions from "../pages/Institutions.jsx";

export default function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/digital-skills" element={<Course />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/institutions" element={<Institutions />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
