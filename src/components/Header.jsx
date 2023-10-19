import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import logo from "../assets/logo.png";

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    position: static;
    border-bottom: 3px solid #2f2f2f;
`;

function Header() {
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="codepen" style={{ width: 40 }} />
            </Toolbar>
        </Container>
    );
}

export default Header;
