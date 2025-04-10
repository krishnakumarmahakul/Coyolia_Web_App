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
import Counceler from './pages/services/Career Counceling/Counceler'
import Solution from "./pages/Solutions/Solution";
import Ailearning from './pages/Solutions/Ai Learning & Development/Ailearning'
import Aitalent from './pages/Solutions/Ai talent acquisition & hr/Aitalent'
import Innovation from './pages/Solutions/Innovation and research/Innovation'

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/app" element={<App />} >
        </Route>
        <Route path="/" element={<Hero />}>
          {/* this is the about us */}
          <Route index element={<About />} />
          <Route path="about" element={<About />} >
            <Route path="leadership" element={<Leadership />} />
            <Route path="ourculture" element={<Ourculture />} />
            <Route path="ourteam" element={<Ourteam />} />
          </Route>
          {/* this is the service page */}
          <Route path="services" element={<Services />} >

          </Route>
          <Route path="ambarglow" element={<AmbarGlow />} />
          {/* this is the important section */}
          <Route path="important" element={<Important />}>
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="refund" element={<Refund />} />
            <Route path="termcondition" element={<Termcondition />} />
          </Route>
          {/* this is the contact us */}
          <Route path="contact" element={<Contact />} />
          {/* this is the solution part */}

          <Route path="solution" element={<Solution />}>
            <Route path="ailearning" element={<Ailearning />} />
            <Route path="aitalent" element={<Aitalent />} />
            <Route path="innovation" element={<Innovation />} />
          </Route>
        </Route>
        <Route path="counceler" element={<Counceler />} />
      </Routes>
    </>
  );
};

export default PageRouter;
