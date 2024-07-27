import Navbar from "../Components/Header/Navbar";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner.js";
import CaseStudies from "../Components/CaseStudies/CaseStudies";
import ContactUs from "../Components/ContactUs/ContactUs";
import PositiveusFooter from "../Components/PositiveusFooter/PositiveusFooter";
import Services from "../Components/Services/Services";
import Team from "../Components/Team/Team";
import Testimonials from "../Components/Testimonials/Testimonials";
import WorkingProcess from "../Components/WorkingProcess/WorkingProcess";

export default function Home() {
  return (
    <div className="xl:w-[1240px] w-full mx-auto xl:px-0 px-5">
    <Navbar />
      <Banner />
      <Services />
      <About />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <PositiveusFooter />
    </div>
  );
}
