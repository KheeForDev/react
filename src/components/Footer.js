import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {currentYear} Khee Houy, Tan</p>
            <p>
                <a href="https://www.linkedin.com/in/kheehouytan" target="_blank" rel="noreferrer" style={{ color: "inherit" }}><LinkedInIcon /></a>
                <a href="https://github.com/KheeForDev/react/tree/note-keeper-frontend" target="_blank" rel="noreferrer" style={{ color: "inherit" }}><GitHubIcon /></a>
            </p>
        </footer >
    );
}

export default Footer;
