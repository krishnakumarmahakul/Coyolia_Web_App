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
import Leadership from "./pages/aboutus/LeadershipPrinciple/Leadership"
import Ourculture from "./pages/aboutus/OurCulture/Ourculture"
import Ourteam from "./pages/aboutus/OurTeam/Ourteam"
import Careercouncelling from './pages/services/Career Counceling/Careercouncelling'
const PageRouter = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Hero />}>
        <Route index element={<About />} />
        {/* this is the about us */}
        <Route path="about" element={<About />} >
          <Route path="leadership" element={<Leadership/>} />
          <Route path="ourculture" element={<Ourculture/>} />
          <Route path="ourteam" element={<Ourteam/>} />
        </Route>
        {/* this is the service page */}
        <Route path="services" element={<Services />} >
          <Route path="careercouncelling" element={<Careercouncelling/>} />
        </Route>
        <Route path="ambarglow" element={<AmbarGlow />} />
        {/* this is the important section */}
        <Route path="important" element={<Important />}>
          <Route path="privacypolicy" element={<Privacypolicy/>} />
          <Route path="refund" element={<Refund/>} />
          <Route path="termcondition" element={<Termcondition/>} />
        </Route>
        {/* this is the contact us */}
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
