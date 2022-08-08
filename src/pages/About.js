import React from "react";
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';

import useAuth from "../hook/useAuth";

const About = () => {
    const { auth } = useAuth();

    return (
        <div>
            <h1>About</h1>
            <br />
            <h2>Welcome to Recollection Application</h2>
            <p>You are currently logged in as <b>{auth?.roles[0]}</b>.</p>
            <p>For this role, you are able to perform the following tasks:</p>
            {auth?.roles[0] === "ROLE_ADMIN"
                ?
                (<ul>
                    <li>View the list of warranty categories</li>
                </ul>)
                :
                (<ul>
                    <li>View all warranties created by current logged in user</li>
                    <li>Create new warranty</li>
                    <li>Delete existing warranty</li>
                    <li>Update existing warranty</li>
                </ul>)
            }

            <p>Click on the links below to find out more about the developer and project:</p>
            <UilLinkedin size="30" /> <a href="https://www.linkedin.com/in/kheehouytan" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>https://www.linkedin.com/in/kheehouytan</a>
            <br />
            <UilGithub size="30" /> <a href="https://github.com/KheeForDev/react/tree/recollection-frontend" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>https://github.com/KheeForDev/react/tree/recollection-frontend</a>
        </div>
    );
}

export default About;