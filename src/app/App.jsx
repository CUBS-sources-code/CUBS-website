import ActiveSlider from "../components/ActiveSlider"
import HeroSection from "./components/HeroSection"
import Navbar from "../components/Navbar"
import ServiceSection from "./components/ServiceSection"
import OpenCards from "./components/OpenCards"
import ImageSlider from "../components/ImageSlider"
import CardFlip from "./components/CardFlip"

const App = () => {
    return (
        <div className="overflow-hidden">
            <div className="video-background"></div>
            <ActiveSlider />
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <OpenCards />
            <ImageSlider />
            <CardFlip />
        </div>
    );
};

export default App;