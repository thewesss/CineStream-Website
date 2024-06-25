import './Footer.css'
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    &copy; 2024 MovieWebsite. Created by Nhlanhla, Wesley. 
                    <a href="https://github.com/Nhlanhla-advocate" style={{ color: 'white', marginLeft: 10 }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/nhlanhla-advocate-msibi-258117288" style={{ color: 'white', marginLeft: 10 }}>LinkedIn</a>
                    <a href="https://github.com/thewesss" style={{ color: 'white', marginLeft: 10 }}>GitHub</a>
                    <a href="https://linkedin.com/in/wesley-mutyambizi" style={{ color: 'white', marginLeft: 10 }}>LinkedIn</a>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
