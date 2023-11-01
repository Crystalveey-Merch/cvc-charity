import React from "react"
import { SectionOne, SectionTwo, SectionThree } from "../Components/HomeComps"

export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}