import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";

const About = () => {
    return (
        <div>
            <h1>About us page</h1>
            <h4>Learning React from scratch</h4>
            <ProfileFunctional name={"Kaushik"}/>
            <Profile name={"Kaushik Class"}/>
        </div>
    )
}

export default About;