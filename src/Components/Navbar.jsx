import { useState } from "react"
import { Select, Option } from "@material-tailwind/react"

export function Navbar() {

        const [active, setActive] = useState("Home")


    return (
        <>
            <div className="flex justify-around align-middle pt-3">
                <div className="pt-4">
                    <h1 className="text-white text-3xl">College</h1>
                </div>
                <div>
                    <ul className="text-white flex justify-around">
                        <li onClick={() => setActive("Home")} className={`cursor-pointer m-4 p-2 ${active === "Home" ? "bg-white text-black rounded-lg" : "hover:bg-white hover:text-black hover:rounded-lg"}`}>Home</li>
                        <li onClick={() => setActive("Events")} className={`cursor-pointer m-4 p-2 ${active === "Events" ? "bg-white text-black rounded-lg" : "hover:bg-white hover:text-black hover:rounded-lg"}`}>Events</li>
                        <li onClick={() => setActive("Venues")} className={`cursor-pointer m-4 p-2 ${active === "Venues" ? "bg-white text-black rounded-lg" : "hover:bg-white hover:text-black hover:rounded-lg"}`}>Venues</li>
                        <li onClick={() => setActive("Soon")} className={`cursor-pointer m-4 p-2 ${active === "Soon" ? "bg-white text-black rounded-lg" : "hover:bg-white hover:text-black hover:rounded-lg"}`}>Soon</li>
                        <li onClick={() => setActive("Account")} className={`cursor-pointer m-4 p-2 ${active === "Account" ? "bg-white text-black rounded-lg" : "hover:bg-white hover:text-black hover:rounded-lg"}`}>Account</li>
                    </ul>
                </div>
                <div className="pt-3">
                    <Select variant="outlined" label="LogIn/SignUp" size="lg" error>
                        <Option>User</Option>
                        <Option>Admin</Option>
                    </Select>
                </div>
            </div>
        </>
    )
}