import PageHero from '@/components/ui/PageHero'
import About from '@/components/about'
import Misbox from '@/components/Misbox'
import Why from '@/components/Why'
import Expertise from '@/components/Expertise'
import Services from '@/components/services'
import StepsBox from '@/components/ui/StepsBox'

const AboutPage = () => {
  return (
    <>
        <PageHero 
            title="About Us"
            desc="With a legacy rooted in innovation and commitment, Logrite Nigeria Limited is your trusted partner for a world of possibilities. Our mission is to provide seamless logistics, executive shuttle services, asset financing solutions, and expert business and financial advisory." 
            bgUrl="assets/aboutUs.jpg"
        />
        <About />
        <Expertise />
        <Why />
        <Misbox />
        <StepsBox />
        <Services />
    </>
  )
}

export default AboutPage