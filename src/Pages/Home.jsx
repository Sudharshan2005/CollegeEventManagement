import { Navbar } from "../Components/Navbar"
import { DisplayCarousel } from "../Components/Carousel"

export function Home() {
    return (
        <>
            <div className="h-[100vh] bg-gray-950">
                <Navbar />
                <div className="pt-2 m-3 h-[50vh]">
                    <DisplayCarousel />
                </div>
            </div>
        </>
    )
}