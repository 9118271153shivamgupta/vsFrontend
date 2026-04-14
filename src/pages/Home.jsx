import Booking from "../components/book3D/Booking";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import EndToEnd from "../components/interior_Sliders/EndToEnd";
import FalseCeiling from "../components/interior_Sliders/FalseCelling";
import Kitchen from "../components/interior_Sliders/Kitchen";
import LivingRoom from "../components/interior_Sliders/LivingRoom";
import CustomersPage from "../components/ourCustomers/CustomersPage";
import CustomerReviews from "../components/reviews/CustomerReviews";
import What_I_Do from "../components/whatIDo/What_I_Do";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";

const Home = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center bg-radial-[at_top_right] from-indigo-50 to-white">
    <Hero/>
    <WhyChooseUs/>
    <FalseCeiling/>
    <EndToEnd/>
    <Kitchen/>
    <LivingRoom/>
    <Booking/>
    <CustomerReviews/>
    <CustomersPage/>
    <What_I_Do/>
    <Footer/>
  </div>
);

export default Home;