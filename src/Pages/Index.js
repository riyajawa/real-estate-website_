import React , {useState} from 'react'
import Footer from '../Components/Footer/Index'
import HeroSection from '../Components/HeroSection/Index'
import { homeObjone, homeObjtwo ,homeObjthree} from '../Components/InfoSection/Data'
import InfoSection from '../Components/InfoSection/Index'
import Navbar from '../Components/Navbar/Index'
import Services from '../Components/Services/Index'
import SideBar from '../Components/SideBar/Index'


const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle =() =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjone} />
        <InfoSection {...homeObjtwo} />
        <Services/>
        <InfoSection {...homeObjthree} />
        <Footer/>
        </>
    )
}

export default Home
