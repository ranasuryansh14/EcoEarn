import Navbar from "../components/Navbar"
import MainPoster from "../components/MainPoster"
import ShuffleHero from "../components/ShuffleHero"
import ImageTextComponent from "../components/ImageTextComponent"
import ProductCard from "../components/ProductCard"
import SwipeCards from "../components/SwipeCards"
import { RevealLinks } from "../components/RevealLinks"
import Footer from "../components/Footer"

export default function LandingPage() {
    return (
        <>
            <div>
                <Navbar />
                <MainPoster />
                <div className="mt-10"></div>
                <ShuffleHero/>
                <div className="mt-10"></div>
                <ProductCard/>
                {/* <div className="mt-10"></div>
                <ImageTextComponent/> */}
                 <div className="mt-10 text-center text-5xl text-bold text-black">Our Products</div>
                <SwipeCards/>
                <RevealLinks/>
                <ImageTextComponent/>
                <Footer/>


            </div>
        </>
    )
}