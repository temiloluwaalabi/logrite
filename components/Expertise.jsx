import Heading from "./ui/heading"
import ExpertiseBox from "./ui/ExpertiseBox"
import Barani from "./ui/Barani"
import { expertiseContent } from "@/utils/constants"

// Step into the world of [Company Name] and discover how we are reshaping the IT industry with our visionary approach. Dive into our story, explore our comprehensive range of services, and witness the transformative impact we bring to businesses. Unleash the power of innovation and join us on a journey that will revolutionize your perception of IT solutions.
const Expertise = () => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-10 px-4 py-20 gap-10">
        <div className="flex flex-1">
            <Heading
                subtitle="OUR EXPERTISE"
                beforeText="Unveiling Logrite's"  
                text="Unparalleled" 
                afterText="Capabilities"
                desc="Dive into Logrite's multifaceted expertise encompassing logistics mastery, elevated charter travel, empowering financing solutions, strategic business guidance, and elevated onboard facilities. Our charter vehicles boast modern comfort, equipped with advanced technology, onboard entertainment, and tailored amenities."
            
            />
        </div>
        <div className="relative flex flex-col flex-1">
            <div className="w-[16px] h-[16px] bg-dark-blue top-0 left-0" />
            <div className="flex flex-col gap-6">
                {
                    expertiseContent.map((item) => (
                        <ExpertiseBox title={item.title} description={item.description} key={item.title}  />
                    ))
                }
            </div>
            <div className="w-[100%]">
                <Barani />
            </div>
        </div>
        
    </section>
  )
}

export default Expertise