import React from "react";
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {currentYear} Khee Houy, Tan</p>
            <a href="https://www.linkedin.com/in/kheehouytan" target="_blank" rel="noreferrer" style={{ color: "inherit" }}><UilLinkedin size="30" /></a>
            <a href="https://github.com/KheeForDev/react/tree/recollection-frontend" target="_blank" rel="noreferrer" style={{ color: "inherit" }}><UilGithub size="30" /></a>
        </footer >
    );
}

export default Footer;