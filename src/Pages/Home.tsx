import AboutComponent from "@/components/Home/AboutComponent"
import BlogSectionComponent from "@/components/Home/BlogSectionComponent"
import DesignedForComponent from "@/components/Home/DesignedForComponent"
import FAQs from "@/components/Home/FAQs"
import FeatureComponent from "@/components/Home/FeatureComponent"
import Footer from "@/components/Home/Footer"
import HeroComponent from "@/components/Home/HeroComponent"
import HowWorks from "@/components/Home/HowWorks"
import JoinTelegram from "@/components/Home/JoinTelegram"
import MissionComponent from "@/components/Home/MissionComponent"
import NavBarComponent from "@/components/Home/NavBarComponent"
import PartnersComponent from "@/components/Home/PartnersComponent"
import PassionComponent from "@/components/Home/PassionComponent"
import PricingComponent from "@/components/Home/PricingComponent"
import SignUpComponent from "@/components/Home/SignUpComponent"
import TestimonyComponent from "@/components/Home/TestimonyComponent"
import VisionComponent from "@/components/Home/VisionComponent"

const Home = () => {
    return (
        <>
            <NavBarComponent />
            <HeroComponent />
            <AboutComponent />
            <VisionComponent />
            <MissionComponent />
            <PassionComponent />
            <DesignedForComponent />
            <HowWorks />
            <FeatureComponent />
            <JoinTelegram />
            <SignUpComponent />
            <PricingComponent />
            <TestimonyComponent />
            <BlogSectionComponent />
            <FAQs />
            <PartnersComponent />
            <Footer />
        </>
    )
}

export default Home