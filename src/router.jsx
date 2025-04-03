import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/aboutus/AboutUs";
import Services from "./pages/services/Services";
import AmbarGlow from "./pages/ambarglow/Ambarglow";
import Important from "./pages/important/Important";
import Contact from "./pages/contactus/ContactUs";
import Hero from "./components/herosection/Hero";
import Privacypolicy from "./pages/important/privacy Policy/Privacypolicy";
import Refund from "./pages/important/refundPolicy/Refund";
import Termcondition from "./pages/important/term & condition/Termcondition";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Hero />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="ambarglow" element={<AmbarGlow />} />
        <Route path="important" element={<Important />}>
          <Route path="privacypolicy" element={<Privacypolicy/>} />
          <Route path="refund" element={<Refund/>} />
          <Route path="termcondition" element={<Termcondition/>} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
