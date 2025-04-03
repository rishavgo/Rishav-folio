
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import ExperienceMain from './components/Experience/ExperienceMain'
import FooterMain from './components/Footer/FooterMain'
import Helpersection from './components/Helpersection'
import HeroGradient from './components/herosection/HeroGradient'
import HeroMain from './components/herosection/HeroMain'
import SubHeroSection from './components/herosection/SubHeroSection'
import NavbarMain from './components/navbar/navbarmain'
import ProjectsMain from './components/ProjectsSection/ProjectsMain'
import SkillsMain from './components/SkillsSection/SkillsMain'
import SubSkills from './components/SkillsSection/SubSkills'
function App() {
  return <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>a
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/> 
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    <Helpersection/>
  </main>
}

export default App
