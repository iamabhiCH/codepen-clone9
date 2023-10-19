import React from "react";
import { useState } from "react";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import '../App.css';

import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #aaaebc;
    font-weight: 700;
`;

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`;


function Editor({heading, icons, color, value, onChange}) {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) =>{
        onChange(value);
    }

    return (
        <Container style={open ? null : {flexGrow: 0}}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: "flex",
                            placeContent: "center",
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000',
                        }}
                    >
                        {icons}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className='controlled-editor'
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    );
}

export default Editor;
