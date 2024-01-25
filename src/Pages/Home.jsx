import { Banner, SectionOne, SectionTwo, SectionThree, SectionFour, Patners } from "../Components/HomeComps"
import { MakeADonationSection } from "../Components/HomeComps/MakeADonationSection"

export const Home = () => {
    return (
        <div>
            <Banner />
            <SectionOne />
            <MakeADonationSection />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Patners />
        </div>
    )
}