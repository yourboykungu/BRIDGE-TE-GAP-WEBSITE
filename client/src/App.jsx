import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "../pages/Course.jsx";
import Header from "../components/Header.jsx";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn.jsx";
import Institutions from "../pages/Institutions.jsx";
import Description from "../pages/description.jsx";
import Page from "../pages/Inst.page.jsx"; 
import Certification from "../pages/certification.jsx";

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
        <Route path="/institutions" element={<Description/>} />
        <Route path="/example" element={<Page/>} />
        <Route path="/certification" element={<Certification/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
